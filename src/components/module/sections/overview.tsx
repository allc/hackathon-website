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
          BioHackathon Edinburgh is part of a broader <span className="font-semibold">Bio-Innovation Series</span> which consists of pre-hackathon workshops, the flagship BioHackathon event, and post-hackathon continuation workshops.
        </p>

        <p className="mb-4">
          Together, these stages bring <span className="font-semibold">biologists, programmers, and industry partners</span> into a shared space for hands-on problem-solving, skill-building, and entrepreneurial exploration.
        </p>

        <p className="mb-4">
          We aim to cultivate a <span className="font-semibold">long-lasting ecosystem</span> that supports collaboration, innovation, and the translation of academic research into real-world, potentially commercialisable solutions.
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
