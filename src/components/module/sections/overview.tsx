import SectionHeader from "../section-header";

export default function Overview() {
  return (
    <section id="team" className="pb-10 sm:pb-16">
      <SectionHeader
        title="Overview"
        subtitle=""
      />

      <div className="mt-6 px-4 leading-7 md:mt-8 md:leading-8">
        <p className="mb-4">
          BioHackathon Edinburgh is a first-of-its-kind, interdisciplinary event at the University of Edinburgh that connects <span className="font-semibold">biologists, programmers, and industry partners</span> through a series of preparatory workshops, networking sessions, and challenge-based team projects. The initiative aims to create a sustainable ecosystem for <span className="font-semibold">collaboration, innovation, and entrepreneurship</span> at the interface of life sciences and artificial intelligence.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Objectives</h2>
        <h3 className="mt-4 mb-2 text-xl font-semibold">Build a cross-disciplinary innovation community</h3>
        <p className="mb-4">
          Unite life scientists and programmers through collaborative problem-solving on real-world biological and computational challenges.
        </p>
        <h3 className="mt-4 mb-2 text-xl font-semibold">Foster academia-industry partnerships</h3>
        <p className="mb-4">
          Co-design challenges with academic and industrial partners to expose students to authentic problem-based learning and professional mentoring.
        </p>
        <h3 className="mt-4 mb-2 text-xl font-semibold">Create sustainable pathways for innovation</h3>
        <p className="mb-4">
          Provide post-event mentoring and support for project continuation, growing into a recurring "Bio-Innovation Series."
        </p>
      </div>

    </section>
  );
}
