import SectionHeader from "../section-header";
import { BeakerIcon, BuildingOffice2Icon, MusicalNoteIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Tracks() {
  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader
        title="Challenge Tracks"
        subtitle=""
      />

      <div className="mt-6 px-4 leading-7 md:mt-8 md:leading-8">
        <p className="mb-4 text-center">
          To cater to diverse backgrounds and interests, BioHackathon Edinburgh 2026 will feature several <span className="font-semibold">challenge tracks</span>, each designed to bring together participants from life sciences, computing, and related disciplines.
        </p>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <BeakerIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mt-4 text-xl font-bold">Academic Research Track</h2>
            <p className="mt-2 text-gray-600">
              Collaborate on open-ended research challenges proposed by academic groups — such as modelling gene regulation, analysing imaging data, drug discovery/design or exploring machine learning approaches for biological datasets. Teams will get access to sample datasets, academic mentors, and opportunities for follow-up collaborations.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <BuildingOffice2Icon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mt-4 text-xl font-bold">Industry Innovation Track</h2>
            <p className="mt-2 text-gray-600">
              Work on problem statements proposed by industry partners from biotech, health, and data-driven companies. These challenges are practical, outcome-focused, and aim to translate ideas into prototypes, pipelines, or analytical insights. Participants gain direct exposure to industrial R&D workflows and potential recruitment opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <MusicalNoteIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mt-4 text-xl font-bold">Data Sonification & Visualisation Track</h2>
            <div id="non-coder-track-anchor" />
            <p className="mt-2 text-gray-600">
              Bridge science and creativity by transforming biological data into sound or interactive visual experiences. This track welcomes artists, musicians, and communicators alongside scientists and coders, exploring how multisensory representations can make complex data more intuitive and engaging.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mt-4 text-xl font-bold">Non-Coder Problem-Solving Track</h2>
            <p className="mt-2 text-gray-600">
              For participants without a coding background, this track focuses on designing experimental frameworks, conceptual solutions, and project management strategies for interdisciplinary challenges. Activities include problem-based team exercises, scientific storytelling, and collaborative design thinking.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center">
          Teams participating in each track will compete against each other in <span className="font-semibold">a final presentation and pitch session</span>, with awards for winners which are selected by a judging panel.
        </p>
      </div>
    </section>
  );
}
