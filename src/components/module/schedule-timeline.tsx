"use client";

import { useMemo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Event } from "~/lib/constants/schedule";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScheduleTimelineProps {
  events: Event[];
  startHour?: number;
  endHour?: number;
  className?: string;
  pxPerHour?: number;
  compressAfterMinutes?: number;
  gapCompressFactor?: number;
  minEventWidth?: number;
  dayRowHeight?: number;
}

type DayChunks = Array<{ minutes: number; event: Event }>;

const toMinutes = (hhmm: string): number => {
  const [h = 0, m = 0] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(v, hi));

const toOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
};

const formatDay = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    dayNumber: String(date.getDate()).padStart(2, "0"),
    dayOrdinal: toOrdinal(date.getDate()),
    dayName: date
      .toLocaleDateString("en-GB", { weekday: "long" })
      .toUpperCase(),
    monthNameUpper: date
      .toLocaleDateString("en-GB", { month: "long" })
      .toUpperCase(),
    monthNameTitle: date.toLocaleDateString("en-GB", { month: "long" }),
  };
};

const groupEventsByDay = (events: Event[]): Record<string, Event[]> =>
  events.reduce(
    (acc, e) => {
      (acc[e.day] ||= []).push(e);
      return acc;
    },
    {} as Record<string, Event[]>
  );

function buildChunksForDay(
  dayEvents: Event[],
  startHour: number,
  endHour: number
): DayChunks {
  const startWindow = startHour * 60;
  const endWindow = endHour * 60;

  const normalized = dayEvents
    .map((e) => {
      const s = clamp(toMinutes(e.start), startWindow, endWindow);
      if (e.end) {
        const t = clamp(toMinutes(e.end), startWindow, endWindow);
        return t > s ? { ...e, _s: s, _t: t } : null;
      }
      return { ...e, _s: s, _t: s };
    })
    .filter((v): v is Event & { _s: number; _t: number } => !!v)
    .sort((a, b) => a._s - b._s || a._t - b._t);

  const chunks: DayChunks = [];

  for (const e of normalized) {
    chunks.push({ minutes: e._t - e._s, event: e });
  }
  return chunks;
}

export default function ScheduleTimeline({
  events,
  startHour = 9,
  endHour = 23,
  className = "",
  minEventWidth = 120, // Increased from 80 to 120 for better readability
  dayRowHeight = 550,
}: ScheduleTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventsByDay = useMemo(() => groupEventsByDay(events), [events]);

  const sortedDays = useMemo(
    () =>
      Object.keys(eventsByDay).sort(
        (a, b) => new Date(a).getTime() - new Date(b).getTime()
      ),
    [eventsByDay]
  );

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    if (!container || !timeline) return;

    // Find the parent schedule section container (updated id = "schedule")
    let scheduleSection = document.getElementById("schedule");
    if (!scheduleSection) {
      // Fallback to old id for safety if present
      scheduleSection =
        document.getElementById("schedule-section") || (undefined as any);
    }
    if (!scheduleSection) return;

    // Calculate total timeline width
    const totalWidth = timeline.scrollWidth;
    const containerWidth = container.offsetWidth;
    const maxScroll = totalWidth - containerWidth;

    // Detect mobile and measure navbar height to avoid header clipping when pinned
    const navEl = document.querySelector("nav") as HTMLElement | null;
    const navHeight = navEl?.getBoundingClientRect().height ?? 64; // fallback
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const startVal = isMobile ? `top top+=${Math.round(navHeight)}` : "top top";

    // Set up ScrollTrigger for pinning the entire schedule section and horizontal scroll
    const st = ScrollTrigger.create({
      trigger: scheduleSection,
      start: startVal,
      end: () => `+=${maxScroll + window.innerHeight * 0.3}`, // Reduced whitespace after schedule
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Horizontal scroll based on progress
        const scrollAmount = maxScroll * self.progress;
        gsap.set(timeline, { x: -scrollAmount });
      },
      onLeave: () => {
        // Ensure timeline is fully scrolled when leaving
        gsap.set(timeline, { x: -maxScroll });
      },
      onEnterBack: () => {
        // Reset timeline position when scrolling back up
        gsap.set(timeline, { x: 0 });
      },
    });

    const onResize = () => {
      // Recalculate on resize (navbar height and widths can change)
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [sortedDays, events]);

  // Event card hover animations
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll("[data-event-card]");
    if (!cards) return;

    const cleanupFunctions: (() => void)[] = [];

    cards.forEach((card) => {
      const overlay = card.querySelector("[data-card-overlay]") as HTMLElement;
      const content = card.querySelector("[data-card-content]") as HTMLElement;

      if (!overlay || !content) return;

      // Ensure a known starting state to avoid jumpy animations
      gsap.set(overlay, {
        clipPath: "inset(0% calc(100% - 2px) 0% 0%)",
      });
      gsap.set(content, { color: "rgb(24 24 27)" });

      let isHovered = false;

      const handleMouseEnter = () => {
        if (isHovered) return;
        isHovered = true;

        gsap.killTweensOf([overlay, content]);

        gsap.to(overlay, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(content, {
          color: "rgb(255 255 255)",
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        if (!isHovered) return;
        isHovered = false;

        gsap.killTweensOf([overlay, content]);

        gsap.to(overlay, {
          clipPath: "inset(0% calc(100% - 2px) 0% 0%)",
          duration: 0.26,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(content, {
          color: "rgb(24 24 27)",
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      cleanupFunctions.push(() => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
        gsap.killTweensOf([card, overlay, content]);
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [sortedDays, events]);

  return (
    <div className={`w-full border-y border-gray-200 ${className}`}>
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={timelineRef} className="flex">
          {sortedDays.map((day) => {
            const {
              dayNumber,
              dayOrdinal,
              dayName,
              monthNameUpper,
              monthNameTitle,
            } = formatDay(day);
            const dayEvents = eventsByDay[day] ?? [];
            const chunks = buildChunksForDay(dayEvents, startHour, endHour);

            return (
              <div
                key={day}
                className="flex flex-shrink-0 border-r border-gray-200 last:border-r-0"
              >
                <div className="hidden w-64 flex-shrink-0 flex-col justify-center p-6 md:flex">
                  <div className="relative flex items-end gap-1 text-7xl font-bold leading-none">
                    <h1 className="font-hexaframe text-black">{dayNumber}</h1>
                    <p className="mb-1 text-xs font-light uppercase">
                      {monthNameUpper}
                    </p>
                  </div>
                  <div
                    className={`ml-1 mt-1 text-left font-whyte text-base font-bold leading-none text-black${dayName && sortedDays[1] && dayName === formatDay(sortedDays[1])?.dayName ? "ml-3.5" : ""}`}
                    style={{ letterSpacing: 3 }}
                  >
                    {dayName}
                  </div>
                </div>

                <div className="relative min-w-0 flex-1">
                  <div className="ml-2 px-5 pt-5 md:hidden">
                    <div className="flex items-end leading-none text-black">
                      <span className="font-hexaframe text-3xl font-bold">
                        {dayOrdinal}
                      </span>
                      <span className="font-ibm-plex-mono mb-1.5 ml-2 flex items-end gap-1 text-[0.6rem] uppercase">
                        <div className="mb-0.5 h-1 w-1 bg-black"></div>{" "}
                        {monthNameTitle}
                      </span>
                    </div>
                    <div
                      className={`mt-0 font-whyte text-[0.7rem] font-black uppercase ${dayName && sortedDays[1] && dayName === formatDay(sortedDays[1])?.dayName ? "ml-1" : ""}`}
                    >
                      {dayName}
                    </div>
                  </div>

                  <div className="relative">
                    <div
                      className="scrollbar-hide overflow-x-auto overflow-y-hidden px-6 py-6 md:px-8"
                      style={{ height: `${dayRowHeight}px` }}
                      role="region"
                      aria-label={`${dayOrdinal} ${monthNameTitle} timeline`}
                    >
                      <div className="flex items-stretch">
                        <article
                          data-event-card
                          className="relative mx-1.5 flex w-auto max-w-[70vw] shrink-0 flex-col overflow-hidden bg-white transition-transform duration-300 md:mx-2"
                          style={{
                            width: '500px',
                            height: `${dayRowHeight - 32}px`,
                            minWidth: `${minEventWidth * 1.2}px`, // Ensure minimum width
                          }}
                        >
                          <div
                            data-card-overlay
                            className="absolute inset-0 bg-black"
                            style={{
                              clipPath: "inset(0 calc(100% - 2px) 0 0)",
                              willChange: "clip-path",
                            }}
                          />

                          <div
                            data-card-content
                            className="relative z-10 flex h-full flex-col p-4"
                            style={{
                              color: "rgb(24 24 27)",
                              willChange: "color",
                            }}
                          >
                            {chunks.map((chunk) => {
                              const e = chunk.event;

                              return (
                                <div key={e.id} className="mb-4">
                                  <div className="break-words font-whyte text-base font-bold leading-tight sm:text-base xl:text-xl 2xl:text-2xl">
                                    {e.title}
                                  </div>

                                  <div className="whitespace-nowrap text-xs font-light 2xl:text-sm">
                                    {e.start}{e.end && ` - ${e.end}`}
                                  </div>

                                  {e.location && (
                                    <div className="break-words text-xs font-medium underline opacity-90">
                                      {e.location}
                                    </div>
                                  )}

                                  {e.description && (
                                    <div className="mt-auto line-clamp-4 flex-1 overflow-hidden text-xs leading-relaxed opacity-80">
                                      {e.description}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </article>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-8 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-8 bg-gradient-to-l from-white via-white/80 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
