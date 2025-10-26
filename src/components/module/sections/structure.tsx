import SectionHeader from "../section-header";

export default function Structure() {
  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader
        title="Structure & Timeline"
        subtitle=""
      />

      <div className="mt-6 px-4 leading-7 md:mt-8 md:leading-8">
        <h2 className="mt-8 mb-4 text-2xl font-bold">Consultation & Planning (Oct-Dec 2025)</h2>
        <p className="mb-4">
          Surveys, partnerships, and organising committee formation completed.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Pre-Event Workshops (Jan-Feb 2026)</h2>
        <p className="mb-4">
          Technical, entrepreneurial, and communication workshops co-delivered with Edinburgh Innovations and the Centre for Engineering Biology.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Flagship BioHackathon (Late Mar 2026)</h2>
        <p className="mb-4">
          2-3 day event at <span className="font-semibold">The Nucleus</span>, featuring an opening ceremony, challenge introductions, team sprints, and final project pitches with prizes.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Post-Event Continuation (Apr 2026 onwards)</h2>
        <p className="mb-4">
          Mentoring, project refinement, and launch of a recurring Bio-Innovation community.
        </p>
      </div>
    </section>
  );
}
