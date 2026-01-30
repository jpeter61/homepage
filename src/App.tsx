import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      const bgColor = window.getComputedStyle(heroElement).backgroundColor;
      let metaTag = document.querySelector('meta[name="theme-color"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute('content', bgColor);
    }
  });
  return (
    <div className="hero min-h-dvh relative overflow-hidden">
      <svg style={{ display: 'none' }}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch" />
        </filter>
      </svg>

      <div className="grainy-background fixed inset-0 w-full h-full">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>


      <div className="hero-content text-center relative z-10">
        <div className="max-w-md">

          <div className="badge badge-outline mb-4 p-3 font-medium">
            Senior Software Engineer & IT Strategist
          </div>

          <h1 className="text-5xl font-bold">
            Clarity From Complexity
          </h1>

          <p className="py-6 text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold">Jamie Peterson</span>.
            With over seven years of experience, I specialize in distilling tough
            technical problems into elegant solutions.

            {" "}<br className="hidden md:block" />

            Currently, I <strong>lead software initiatives</strong> and advise executive leadership on <strong>IT strategy</strong> at <span className="font-semibold">See Eyewear</span>.
          </p>

          <a
            href="https://www.linkedin.com/in/jamie-peterson"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn
          </a>

        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 mb-[env(safe-area-inset-bottom)]">
        <div className="dropdown dropdown-top dropdown-end">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost bg-base-100/40 backdrop-blur-md border border-white/20 shadow-lg hover:bg-base-100 transition-all duration-300"
            aria-label="Site Inspiration"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>

          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow-xl bg-base-100/90 backdrop-blur-md border border-base-300 mb-2 text-left"
          >
            <div className="card-body">
              <h3 className="card-title text-sm">Design Inspiration</h3>
              <p className="text-xs opacity-70">
                "Grainy Gradients" technique by Juxtopposed.
              </p>
              <div className="card-actions justify-end mt-2">
                <a
                  href="https://www.youtube.com/watch?v=_ZFghigBmqo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-xs btn-primary"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
