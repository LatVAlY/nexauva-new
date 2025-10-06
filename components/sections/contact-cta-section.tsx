'use client'
import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
})

export function ContactCTASection() {
  return (
    <section className="relative w-full p-12 flex items-center justify-center bg-black">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8 relative z-10">
        {/* Tag */}
        <div className="flex items-center gap-2 px-4 py-1 bg-transparent rounded-full">
          <div className="w-2 h-1 tag-line"></div>
          <p className="text-sm italic text-gray-300 m-0">Reach out anytime</p>
          <div className="w-2 h-1 tag-line-reverse"></div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-medium leading-tight gradient-text">
          Ready to Automate Smarter? Let’s{" "}
          <span className={`${instrumentSerif.className} italic`}> Build Together</span>
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-400 text-lg max-w-md">Schedule a Call and Begin Automating</p>

        {/* Button */}
        <a
          href="https://calendly.com/hello-nexauva/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block group"
        >
          <div className="absolute inset-0 btn-glow rounded-lg"></div>
          <div className="absolute inset-0 btn-stroke rounded-lg"></div>
          <div className="relative bg-black px-8 py-4 rounded-lg border border-white/10">
            <p className="text-white font-medium m-0">Book A Free Call</p>
          </div>
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/nexauva/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full p-2"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <div className="w-px h-6 separation"></div>
          <a
            href="https://x.com/AbdelVA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full p-2"
            aria-label="X"
          >
            <svg className="w-5 h-5 social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <div className="w-px h-6 separation"></div>
          <a
            href="https://calendly.com/hello-nexauva/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full p-2"
            aria-label="Calendly"
          >
            <svg className="w-5 h-5 social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>

        {/* Email / Contact note */}
        <p className="text-center text-gray-400 text-sm m-0">
          Prefer email? Reach us via the contact form
        </p>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bottom-border"></div>

      {/* BG Shape */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-shape"></div>

      {/* Decorative Masked Area */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>

      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(161deg, rgb(213, 219, 230) 51.66%, rgb(4, 7, 13) 166%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tag-line {
          background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%);
          opacity: 0.5;
        }
        .tag-line-reverse {
          background: linear-gradient(270deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%);
          opacity: 0.5;
        }
        .btn-glow {
          background: radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
          filter: blur(15px);
        }
        .btn-stroke {
          background: radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
        }
        .separation {
          background-color: rgba(255, 255, 255, 0.07);
        }
        .bottom-border {
          background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.07) 0%, rgb(0, 0, 0) 100%);
        }
        .bg-shape {
          background: radial-gradient(50% 50% at 50% 50%, rgba(213, 219, 230, 0.7) 0%, rgba(4, 7, 13, 0) 100%);
          border-radius: 10px;
          opacity: 0.1;
          transform: rotate(-13deg);
        }
        .social-icon {
          color: rgb(213, 219, 230);
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }
        .social-icon:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
