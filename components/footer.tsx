import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const footerLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Impressum" },
    { href: "/terms", label: "Privacy Policy" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col gap-0.5">
              <div className="h-1 w-8 bg-white rounded-full" />
              <div className="h-1 w-8 bg-white rounded-full" />
              <div className="h-1 w-8 bg-white rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">nexauva</span>
              <span className="text-[10px] text-muted-foreground -mt-1">Where Ideas Meet Intelligence</span>
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© 2025 Nexauva</p>
          <div className="flex items-center gap-4">
            <span>Headquarters in Germany</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
