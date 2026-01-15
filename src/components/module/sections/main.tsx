// import backgroundImage from '../../../../public/htb-photos/team.png'; // placeholder image for now

export const Main = () => (
  <div
    className="relative flex h-full w-full items-center justify-center"
    style={{
      // backgroundImage: `url('${backgroundImage.src}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-80"></div>
    <div className="relative flex scale-90 transform flex-col items-center px-4 text-center sm:scale-100">
      <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-6xl md:text-6xl 2xl:text-6xl">
        BioHackathon Edinburgh 2026
      </h1>
      <p className="mt-10 text-lg font-medium text-white sm:text-2xl 2xl:text-3xl">
        Building a Collaborative Bio-AI Innovation Community
      </p>
      <p className="mt-6 max-w-4xl px-2 text-center text-white">
        20th - 22nd Mar 2026
      </p>
      <p className="mt-6 max-w-3xl px-2 text-center text-white">
        Opens to <span className="font-semibold">undergraduate, postgraduate taught, and postgraduate research students, postdocs, and academic staff</span> from <span className="font-semibold">all UK universities</span> interested in biological and computational innovation. <span className="underline"><a className="font-semibold" href="#:~:text=For%20participants,design%20thinking.">No coding experience required</a></span>.
      </p>

      <div className="mt-8 flex w-full max-w-xl items-center justify-center gap-6 sm:mt-10">
        <a href="https://forms.office.com/e/Wm4nmLv3px" className="bg-gray-700 px-5 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-gray-800">
          Register Interest
        </a>
        <a href="https://forms.office.com/e/kZaw6FTEYR" className="bg-gray-700 px-5 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-gray-800">
          Submit a Challenge
        </a>
        <a href="mailto:ian.yang@ed.ac.uk" className="bg-gray-700 px-5 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-gray-800">
          Email
        </a>
      </div>
    </div>
  </div>
);
