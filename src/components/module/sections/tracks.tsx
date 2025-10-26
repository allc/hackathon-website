import SectionHeader from "../section-header";

export default function Tracks() {
  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader
        title="Challenge Tracks"
        subtitle=""
      />

      <div className="mt-6 px-4 leading-7 md:mt-8 md:leading-8">
        <p className="mb-4">
          To cater to diverse backgrounds and interests, BioHackathon Edinburgh 2026 will feature several <span className="font-semibold">challenge tracks</span>, each designed to bring together participants from life sciences, computing, and related disciplines.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Academic Research Track</h2>
        <p className="mt-2 mb-4">
          Collaborate on open-ended research challenges proposed by academic groups — such as modelling gene regulation, analysing imaging data, drug discovery/design or exploring machine learning approaches for biological datasets. Teams will get access to sample datasets, academic mentors, and opportunities for follow-up collaborations.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Industry Innovation Track</h2>
        <p className="mt-2 mb-4">
          Work on problem statements proposed by industry partners from biotech, health, and data-driven companies. These challenges are practical, outcome-focused, and aim to translate ideas into prototypes, pipelines, or analytical insights. Participants gain direct exposure to industrial R&D workflows and potential recruitment opportunities.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Data Sonification & Visualisation Track</h2>
        <div id="non-coder-track-anchor" />
        <p className="mt-2 mb-4">
          Bridge science and creativity by transforming biological data into sound or interactive visual experiences. This track welcomes artists, musicians, and communicators alongside scientists and coders, exploring how multisensory representations can make complex data more intuitive and engaging.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Non-Coder Problem-Solving Track</h2>
        <p className="mt-2 mb-4">
          For participants without a coding background, this track focuses on designing experimental frameworks, conceptual solutions, and project management strategies for interdisciplinary challenges. Activities include problem-based team exercises, scientific storytelling, and collaborative design thinking.
        </p>
        <p className="mt-2 mb-4 italic">
          Teams participating in each track will compete against each other in <span className="font-semibold">a final presentation and pitch session</span>, with awards for winners which are selected by a judging panel.
        </p>
      </div>
    </section>
  );
}
