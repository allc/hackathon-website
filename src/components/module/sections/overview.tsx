import SectionHeader from "../section-header";
import { UsersIcon, BriefcaseIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function Overview() {
  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader
        title="Overview"
        subtitle=""
      />

      <div className="mt-6 px-4 leading-7 md:mt-8 md:leading-8">
        <p className="mb-4">
          BioHackathon Edinburgh is a first-of-its-kind, interdisciplinary event at the University of Edinburgh that connects <span className="font-semibold">biologists, programmers, and industry partners</span> through a series of preparatory workshops, networking sessions, and challenge-based team projects. The initiative aims to create a sustainable ecosystem for <span className="font-semibold">collaboration, innovation, and entrepreneurship</span> at the interface of life sciences and artificial intelligence.
        </p>

        <div className="mt-12">
          <h2 className="text-center text-3xl font-bold">Objectives</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Build a cross-disciplinary innovation community</h3>
              <p className="mt-2 text-gray-600">
                Unite life scientists and programmers through collaborative problem-solving on real-world biological and computational challenges.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Foster academia-industry partnerships</h3>
              <p className="mt-2 text-gray-600">
                Co-design challenges with academic and industrial partners to expose students to authentic problem-based learning and professional mentoring.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <LightBulbIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Create sustainable pathways for innovation</h3>
              <p className="mt-2 text-gray-600">
                Provide post-event mentoring and support for project continuation, growing into a recurring "Bio-Innovation Series."
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
