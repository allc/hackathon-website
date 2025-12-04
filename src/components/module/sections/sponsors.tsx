"use client";

import CornerBrackets from "~/components/module/corner-brackets";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import NavbarLayout from "~/components/layout/navbar-layout";
import SectionHeader from "../section-header";

type Prize = {
  // Placeholder prize copy. Keep this as gibberish for now.
  text: string;
  // Toggle to reveal actual text later (when set to true).
  revealed: boolean;
};

interface SponsorCardProps {
  name: string;
  tier: string;
  overview: string;
  prizes: Array<Prize>;
  number: string;
  logo: string;
  website: string;
  cardRef: React.RefObject<HTMLDivElement>;
}

// Collapsible container for mobile card with GSAP open/close animation
const MobileExpander = ({
  open,
  id,
  children,
}: {
  open: boolean;
  id: string;
  children: React.ReactNode;
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (open) {
      gsap.fromTo(
        el,
        { height: 0, autoAlpha: 0 },
        { height: "auto", autoAlpha: 1, duration: 0.25, ease: "power2.out" }
      );
    } else {
      gsap.to(el, {
        height: 0,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  return (
    <div
      id={id}
      ref={wrapperRef}
      style={{ overflow: "hidden", height: 0, opacity: 0 }}
      aria-hidden={!open}
      className="mt-4"
    >
      {children}
    </div>
  );
};

// Mobile-only simplified card (no hover GSAP, stacked layout)
const MobileSponsorCard = ({
  name,
  tier,
  overview,
  prizes,
  number,
  website,
}: Pick<
  SponsorCardProps,
  "name" | "tier" | "overview" | "prizes" | "number" | "website"
>) => {
  const cornersRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const corners = cornersRef.current;
    const content = contentRef.current;
    if (!corners || !content) return;

    // Prepare initial state
    gsap.set(content, { autoAlpha: 0, y: 15, scale: 0.95 });
    gsap.set(corners.querySelectorAll("svg"), {
      scale: 0.8,
      transformOrigin: "center",
    });

    const tl = gsap.timeline();

    // First animate corners expanding outward
    tl.to(corners.querySelectorAll("svg"), {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: {
        amount: 0.1,
        from: "random",
      },
    })
      // Then fade and slide in content with slight bounce
      .to(
        content,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="relative w-full cursor-pointer px-6 pb-10 pt-10 text-black"
      onClick={handleCardClick}
    >
      <div ref={cornersRef}>
        <CornerBrackets />
      </div>

      <div ref={contentRef}>
        <div className="mb-5 flex items-end gap-3">
          <h2 className="-mb-1 font-whyte text-2xl font-bold uppercase sm:text-3xl">
            {name}
          </h2>
          <div className="mb-1 ml-2 flex items-center gap-2">
            <div className="h-2 w-2 bg-black" />
            <p className="text-[0.65rem] font-light uppercase tracking-wide">
              {tier}
            </p>
          </div>
        </div>

        <div className="my-4 h-px w-full bg-black" />

        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <div className="text-[0.8rem] font-light uppercase tracking-wide">
              Overview:
            </div>
            <div className="text-[0.8rem] font-light uppercase tracking-wide">
              {overview}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[0.8rem] font-light uppercase tracking-wide">
              Prizes:
            </div>
            <ul className="space-y-1 text-[0.8rem] font-light uppercase tracking-wide">
              {prizes.map((prize, i) => {
                const labels = ["1ST PRIZE", "2ND PRIZE", "3RD PRIZE"];
                const label = labels[i] ?? `${i + 1}TH PRIZE`;
                if (name==="Huawei" && i===2) return null; // Huawei has no 3rd prize
                return (
                  <li key={i} className="flex items-center gap-3">
                    <span className="shrink-0">{label}:</span>
                    {prize.revealed ? (
                      <span className="normal-case leading-relaxed">
                        {prize.text}
                      </span>
                    ) : (
                      <span
                        aria-label="redacted"
                        className="inline-block w-fit align-middle"
                      >
                        <span
                          className="overflow-hidden bg-black"
                          style={{ userSelect: "none" }}
                        >
                          {prize.text}
                        </span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <span className="absolute -bottom-4 right-0 inline-block text-[0.6rem] font-light uppercase tracking-wide">
          {number}
        </span>

        <span className="absolute -top-4 right-0 inline-block text-[0.8rem] font-light uppercase tracking-wide">
          +
        </span>
      </div>
    </div>
  );
};

const sponsorsData = [
  {
    name: "Huawei",
    tier: "PLATINUM",
    overview:
      "A leading global provider of ICT infrastructure and smart devices, headquartered in Shenzhen, operating across telecom networks, cloud/AI and consumer electronics.",
    prizes: [
      { text: "xra vurg ran jolt max", revealed: false },
      { text: "zor plix meta flux", revealed: false },
      { text: "", revealed: false },
    ],
    number: "02",
    logo: "/sponsors/huwaei.svg",
    website: "https://www.huawei.com/en/",
  },
  {
    name: "G-Research",
    tier: "PLATINUM",
    overview:
      "A leading quantitative research and technology firm applying scientific rigor and advanced ML to predict movements in global financial markets.",
    prizes: [
      { text: "sigma nova grid pack", revealed: false },
      { text: "tensor flux keyset", revealed: false },
      { text: "alpha kit delta", revealed: false },
    ],
    number: "01",
    logo: "/sponsors/g-research.svg",
    website: "https://www.gresearch.com",
  },

  {
    name: "Optiver",
    tier: "GOLD",
    overview:
      "A global, tech-driven market maker providing liquidity across 50+ exchanges since 1986, trading derivatives, equities, ETFs, bonds and FX.",
    prizes: [
      { text: "neo rig vanta", revealed: false },
      { text: "mecha key array", revealed: false },
      { text: "pro swag stack", revealed: false },
    ],
    number: "03",
    logo: "/sponsors/optiver.svg",
    website: "https://optiver.com",
  },
  {
    name: "Bending Spoons",
    tier: "SILVER",
    overview:
      "An Italian tech company that owns and operates popular digital products—including Evernote, Meetup, Remini and WeTransfer.",
    prizes: [
      { text: "suite pro delta", revealed: false },
      { text: "accessory nova", revealed: false },
      { text: "brand pack plus", revealed: false },
    ],
    number: "04",
    logo: "/sponsors/bending-spoons.png",
    website: "https://bendingspoons.com",
  },
];

const SponsorCard = ({
  name,
  tier,
  overview,
  prizes,
  number,
  website,
  cardRef,
}: SponsorCardProps) => {
  const cornerBracketsRef = useRef<HTMLDivElement>(null);
  const squareIconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tierDotRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const card = cardRef.current;
    const corners = cornerBracketsRef.current;
    const squares = squareIconRef.current;
    const title = titleRef.current;
    const dot = tierDotRef.current;

    if (!card || !corners || !squares || !title || !dot) return;

    const handleMouseEnter = () => {
      // gsap.to(corners.querySelectorAll("div"), {
      //   scale: 1.05,
      //   duration: 0.3,
      //   ease: "power2.out",
      //   stagger: 0.02,
      // });

      gsap.to(squares.querySelectorAll("rect"), {
        fill: "black",
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.02,
      });

      gsap.to(title, {
        x: 5,
        duration: 0.3,
        ease: "power2.out",
      });

      // gsap.to(dot, {
      //   scale: 1.2,
      //   duration: 0.2,
      //   ease: "power2.out",
      // });
    };

    const handleMouseLeave = () => {
      // gsap.to(corners.querySelectorAll("div"), {
      //   scale: 1,
      //   duration: 0.3,
      //   ease: "power2.out",
      //   stagger: 0.02,
      // });

      gsap.to(squares.querySelectorAll("rect"), {
        fill: "none",
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.02,
      });

      gsap.to(title, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // gsap.to(dot, {
      //   scale: 1,
      //   duration: 0.2,
      //   ease: "power2.out",
      // });
    };

    const handleClick = () => {
      // Animate corner brackets inward on click
      const svgs = corners.querySelectorAll("svg");
      gsap.to(svgs, {
        scale: 0.98,
        duration: 0.2,
        ease: "power4.inOut",
        yoyo: true,
        repeat: 1,
        transformOrigin: "center",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("click", handleClick);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("click", handleClick);
    };
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      className="group relative h-full w-full cursor-pointer px-10 pb-8 pt-7 text-black transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div ref={cornerBracketsRef}>
        <CornerBrackets />
      </div>

      <div className="mb-6 flex flex-wrap items-end gap-3 sm:gap-4">
        <h1
          ref={titleRef}
          className="-mb-5 mt-3 flex cursor-pointer items-center gap-3 font-whyte text-3xl font-bold uppercase leading-none sm:text-4xl md:text-5xl"
        >
          {name}
        </h1>
        <div className="ml-2 flex items-center gap-2 pt-1">
          <div ref={tierDotRef} className="-mb-1 h-2 w-2 bg-black" />
          <p className="-mb-1 text-xs font-light uppercase tracking-wide sm:text-xs">
            {tier}
          </p>
        </div>
      </div>

      <div className="my-6 h-px w-full bg-black sm:my-8" />

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="flex flex-row gap-3 sm:gap-4">
          <div className="text-[0.8rem] font-light uppercase tracking-wide">
            Overview:
          </div>
          <div className="text-[0.8rem] font-light uppercase tracking-wide">
            {overview}
          </div>
        </div>
        <div className="flex flex-row gap-3 sm:gap-4">
          <div className="text-[0.8rem] font-light uppercase tracking-wide">
            Prizes:
          </div>
          <ul className="space-y-1 text-[0.8rem] font-light uppercase tracking-wide">
            {prizes.map((prize, i) => {
              const labels = ["1ST PRIZE", "2ND PRIZE", "3RD PRIZE"];
              const label = labels[i] ?? `${i + 1}TH PRIZE`;
              if (name==="Huawei" && i===2) return null; // Huawei has no 3rd prize
              return (
                <li key={i} className="flex items-center gap-3">
                  <span className="shrink-0">{label}:</span>
                  {prize.revealed ? (
                    <span className="normal-case leading-relaxed">
                      {prize.text}
                    </span>
                  ) : (
                    <span
                      aria-label="redacted"
                      className="inline-block w-fit align-middle"
                    >
                      <span
                        className="user-select-none overflow-hidden bg-black"
                        style={{ userSelect: "none" }}
                      >
                        {prize.text}
                      </span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <span className="absolute bottom-5 left-5 inline-block text-[0.6rem] font-light uppercase tracking-wide">
        {number}
      </span>

      <span className="absolute bottom-5 right-5 inline-block text-[0.6rem] font-light uppercase tracking-wide">
        +
      </span>

      <div
        ref={squareIconRef}
        className="absolute right-5 top-5 inline-block text-[0.6rem] font-light uppercase tracking-wide"
      >
        <svg
          width="6"
          height="24"
          viewBox="0 0 6 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="5" height="5" stroke="black" />
          <rect x="0.5" y="9.5" width="5" height="5" stroke="black" />
          <rect x="0.5" y="18.5" width="5" height="5" stroke="black" />
        </svg>
      </div>
    </div>
  );
};

export const SponsorsGrid = () => {
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    sponsorsData.map(() => React.createRef<HTMLDivElement>())
  );

  return (
    <div className="h-full w-full px-4 sm:px-8">
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className="relative">
              <button
                type="button"
                onClick={(e) => {
                  // Handle mobile sponsor interaction
                  e.stopPropagation();

                  // Animate corner brackets inward on click
                  const button = e.currentTarget;
                  const corners = button.querySelector(
                    "[data-corner-brackets]"
                  );
                  if (corners) {
                    const svgs = corners.querySelectorAll("svg");
                    gsap.to(svgs, {
                      scale: 0.99,
                      duration: 0.2,
                      ease: "power4.inOut",
                      yoyo: true,
                      repeat: 1,
                      transformOrigin: "center",
                    });
                  }

                  // Toggle mobile expansion
                  const isCurrentlyOpen = mobileOpenIndex === index;
                  if (isCurrentlyOpen) {
                    // If already open, clicking goes to website
                    window.open(
                      sponsor.website,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  } else {
                    // If not open, expand the card
                    setMobileOpenIndex(index);
                  }
                }}
                className="relative flex h-40 w-full items-center justify-center p-4 pt-1 sm:h-48 sm:p-6"
                aria-expanded={mobileOpenIndex === index}
                aria-controls={`mobile-sponsor-${index}`}
              >
                <div data-corner-brackets>
                  <CornerBrackets />
                </div>
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={160}
                  height={100}
                  className="max-h-24 max-w-full object-contain sm:max-h-28"
                />
                <span
                  className="absolute bottom-4 left-4 px-1 text-[0.6rem] font-medium uppercase tracking-wide sm:text-sm"
                  // style={{
                  //   color:
                  //     TIER_COLORS[sponsor.tier as keyof typeof TIER_COLORS],
                  // }}
                >
                  {sponsor.tier}
                </span>
                <span className="absolute right-4 top-4 inline-block text-[0.6rem] font-light uppercase tracking-wide">
                  <svg
                    width="4"
                    height="24"
                    viewBox="0 0 6 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" y="0.5" width="5" height="5" stroke="black" />
                    <rect x="0.5" y="9.5" width="5" height="5" stroke="black" />
                    <rect
                      x="0.5"
                      y="18.5"
                      width="5"
                      height="5"
                      stroke="black"
                    />
                  </svg>
                </span>
              </button>

              <MobileExpander
                open={mobileOpenIndex === index}
                id={`mobile-sponsor-${index}`}
              >
                <MobileSponsorCard
                  name={sponsor.name}
                  tier={sponsor.tier}
                  overview={sponsor.overview}
                  prizes={sponsor.prizes}
                  number={sponsor.number}
                  website={sponsor.website}
                />
              </MobileExpander>
            </div>
          ))}
        </div>
      </div>

      {sponsorsData.map((sponsor, index) => (
        <div key={index}>
          <div className="hidden flex-col gap-8 lg:flex lg:flex-row lg:gap-12 pb-8">
            <div className="lg:sticky lg:top-28 lg:w-80 lg:self-start">
              <div
                className="flex items-center justify-center overflow-hidden p-8"
                style={{ height: "300px" }} // Initial height
              >
                <CornerBrackets />
                <div className="flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt="Sponsor logo"
                    width={200}
                    height={120}
                    className="max-h-32 max-w-full object-contain"
                  />
                </div>
                <span className="absolute bottom-4 left-4 flex items-center gap-2 text-[0.6rem] font-light uppercase tracking-wide">
                  <div className="h-2 w-2 bg-black" />
                  [LOGO]
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="max-w-6xl space-y-8"  style={{ height: "300px" }}>
                <SponsorCard
                  name={sponsor.name}
                  tier={sponsor.tier}
                  overview={sponsor.overview}
                  prizes={sponsor.prizes}
                  number={sponsor.number}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  cardRef={cardRefs.current[index]!}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default function Sponsors() {
  return (
    <NavbarLayout className="relative min-h-screen w-full py-16 sm:py-24">
      <SectionHeader
        title="Sponsor/Partners"
        subtitle="Meet the organizations making this hackathon possible"
        className="mb-10"
      />
      <SponsorsGrid />
    </NavbarLayout>
  );
}
