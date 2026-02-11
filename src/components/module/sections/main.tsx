import backgroundImage from '../../../../public/primed_bg.png';

export const Main = () => (
  <div
    className="relative flex h-full w-full items-center justify-center"
    style={{
      backgroundImage: `url('${backgroundImage.src}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="relative flex scale-90 transform flex-col items-center px-4 text-center sm:scale-100">
      <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-6xl md:text-6xl 2xl:text-6xl">
        BioHackathon Edinburgh 2026
      </h1>
      <p className="mt-10 text-lg font-medium text-white sm:text-2xl 2xl:text-3xl">
        Building a Collaborative Bio-AI Innovation Community
      </p>
      <p className="mt-6 max-w-4xl px-2 text-center text-white">
        20th - 22nd Mar 2026 | The University of Edinburgh
        <br />
        Edinburgh Futures Institute (Friday) & The Nucleus Building (Saturday & Sunday)
      </p>
      <p className="mt-6 max-w-3xl px-2 text-center text-white">
        Opens to <span className="font-semibold">undergraduate, postgraduate taught, and postgraduate research students, postdocs, and academic staff</span> from <span className="font-semibold">all UK universities</span> interested in biological and computational innovation. <span className="underline"><a className="font-semibold" href="#:~:text=For%20participants,design%20thinking.">No coding experience required</a></span>.
      </p>

      <div className="mt-8 flex w-full max-w-2xl items-center justify-center gap-6 sm:mt-10">
        <a href="https://forms.gle/XTx73urXEnToMaV38" target="_blank" className="text-2xl font-semibold uppercase bg-blue-700 px-7 py-5 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          Apply to Participate
        </a>
      </div>
      <div className="mt-6 text-sm text-white opacity-70">
        <a href='https://ed-ac-uk.zoom.us/rec/share/d1KokWKCHh4d7G8MoMey2-RDgS5xH76n69EcGiozLMk1PbsQa_1la1jaTjXwi8rx.6r61kEJnHQP3O9O3' target="_blank" className="mt-6 text-sm font-medium text-white underline">
          Watch the Q&A Session Recording
        </a>
      </div>
    </div>
  </div>
);
