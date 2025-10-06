import React from "react"

type Social = {
  twitter?: string
  instagram?: string
  linkedin?: string
}

type TeamMember = {
  name: string
  role: string
  image: string
  socials: Social
}

const team: TeamMember[] = [
  {
    name: "Ikta Sollork",
    role: "Founder / Machine learning Engineer",
    image:
      "https://pbs.twimg.com/profile_images/1564466669459734528/5_2XCjie_400x400.jpg",
    socials: {
      twitter: "https://x.com/AbdelVA",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/in/abdelfettah-latrache/",
    },
  },
  {
    name: "Alex Meyer",
    role: "AI Researcher",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=640&auto=format&fit=crop",
    socials: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Sara Weber",
    role: "Senior Designer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop",
    socials: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-balance">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A multidisciplinary team blending AI research, engineering, and design.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative max-w-md w-full mx-auto will-change-transform transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="relative profile-card bg-[#04070D] border border-[#D8E7F2]/10 rounded-[16px] shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.12)] overflow-hidden">
                {/* User Info */}
                <div className="p-6 pl-28">
                  <div className="flex flex-col mb-4">
                    <p className="text-white font-semibold text-xl mb-1">{member.name}</p>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>
                  {/* Social Icons */}
                  <div className="flex space-x-2">
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on X`}
                        className="bg-[#04070D] rounded-lg shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.2)] p-2 hover:scale-105 transition-transform duration-200"
                      >
                        <svg className="w-5 h-5 fill-[#D5DBE6]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="bg-[#04070D] rounded-lg shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.2)] p-2 hover:scale-105 transition-transform duration-200"
                      >
                        <svg className="w-5 h-5 fill-[#D5DBE6]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="bg-[#04070D] rounded-lg shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.2)] p-2 hover:scale-105 transition-transform duration-200"
                      >
                        <svg className="w-5 h-5 fill-[#D5DBE6]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {/* Profile Picture */}
                <div className="absolute top-6 left-6 w-20 h-20 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.image} alt={`${member.name} profile picture`} className="w-full h-full object-cover" />
                </div>
                {/* Light Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,_rgba(184,199,217,0.5)_0%,_rgba(4,7,13,0)_100%)] opacity-10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
