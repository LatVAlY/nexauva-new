import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Large 404 text */}
          <div className="relative mb-12">
            <h1 className="text-[200px] lg:text-[300px] font-light leading-none text-muted-foreground/10 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light mb-4">Whoa!</h2>
                <p className="text-2xl lg:text-3xl font-light">That didn't work out.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            The page you are looking for either doesn't exist or currently not available
          </p>

          {/* CTA Button */}
          <Link href="/">
            <Button size="lg" className="gap-2 bg-white text-background hover:bg-white/90">
              <ArrowLeft className="w-4 h-4" />
              Go to homepage
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
