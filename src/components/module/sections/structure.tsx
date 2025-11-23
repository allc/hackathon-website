import { ReactNode } from "react";
import SectionHeader from "../section-header";
import { ClipboardDocumentListIcon, AcademicCapIcon, TrophyIcon, ArrowPathIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";


interface TimelineItemProps {
  icon: ReactNode;
  title: string;
  date: string;
  children: ReactNode;
  isLast?: boolean;
}

function TimelineItem({ icon, title, date, children, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white">
            {icon}
          </div>
        </div>
        {!isLast && <div className="h-full w-px bg-gray-300"></div>}
      </div>
      <div className="pb-8">
        <p className="mb-2 text-lg font-bold text-gray-600">{date}</p>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="mt-2 text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default function Structure() {
  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader
        title="Structure & Timeline"
        subtitle=""
      />

      <div className="mt-12 px-4">
        <div className="relative">
          <TimelineItem
            icon={<ClipboardDocumentListIcon className="h-6 w-6 text-blue-500" />}
            date="Deadline 30th Jan 2026"
            title="Challenge Submission"
          >
            <p>Sponsors challenge submission.</p>
          </TimelineItem>
          <TimelineItem
            icon={<CursorArrowRaysIcon className="h-6 w-6 text-blue-500" />}
            date="30th Jan 2026"
            title="Application Opens"
          >
            <p>Application opens for participants.</p>
          </TimelineItem>
          <TimelineItem
            icon={<AcademicCapIcon className="h-6 w-6 text-blue-500" />}
            date="6th - 20th Mar 2026"
            title="Pre-hackathon Workshops"
          >
            <p>Technical, entrepreneurial, and communication workshops co-delivered with Edinburgh Innovations and the Centre for Engineering Biology.</p>
          </TimelineItem>
          <TimelineItem
            icon={<TrophyIcon className="h-6 w-6 text-blue-500" />}
            date="20th - 22nd Mar 2026 (Subject to change)"
            title="BioHackathon"
          >
            <p>2-3 day event at <span className="font-semibold">The Nucleus</span>, featuring an opening ceremony, challenge introductions, team sprints, and final project pitches with prizes.</p>
          </TimelineItem>
          <TimelineItem
            icon={<ArrowPathIcon className="h-6 w-6 text-blue-500" />}
            date="22nd Mar - late April 2026"
            title="Post-hackathon Workshops"
            isLast
          >
            <></>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
