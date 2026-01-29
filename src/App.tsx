import React from 'react';

export default function App() {
  return (
    // "min-h-screen" ensures the background covers the whole viewport
    <div className="hero min-h-screen bg-base-200">

      <div className="hero-content text-center">
        <div className="max-w-md">

          <div className="badge badge-outline mb-4 p-3">
            Software Engineer @ See Eyewear
          </div>

          <h1 className="text-5xl font-bold">
            Clarity From Complexity
          </h1>

          <p className="py-6 text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold">Jamie Peterson</span>.
            With over seven years of experience, I specialize in distilling tough
            technical problems into elegant solutions.
            <br className="hidden md:block" /> {/* Line break on desktop for readability */}
            Currently, I lead software initiatives and advise on IT strategy at <span className="font-semibold">See Eyewear</span>.
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
    </div>
  );
}
