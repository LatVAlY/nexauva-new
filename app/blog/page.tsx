import { BlogCard } from "@/components/blog-card"
import { FileText } from "lucide-react"

const blogPosts = [
  {
    slug: "the-future-of-workflows-why-ai-automation-is-the-standard",
    title: "The Future of Workflows: Why AI Automation Is the Standard",
    excerpt:
      "Discover how businesses are replacing repetitive tasks with intelligent automation — and why early adoption gives you a competitive edge.",
    date: "Jan 15, 2025",
    category: "Article",
    image: "/ai-automation-workflow-dashboard.jpg",
  },
  {
    slug: "5-ways-ai-assistants-are-transforming-operations",
    title: "5 Ways AI Assistants Are Transforming Operations",
    excerpt:
      "From handling support queries to managing schedules, see how AI assistants are streamlining internal workflows across industries.",
    date: "Jan 10, 2025",
    category: "Resources",
    image: "/ai-assistant-technology-interface.jpg",
  },
  {
    slug: "scaling-smarter-how-automation-helps-startups",
    title: "Scaling Smarter: How Automation Helps Startups",
    excerpt:
      "Learn how fast-growing companies use AI to cut costs, boost output, and stay lean while scaling operations efficiently.",
    date: "Jan 6, 2025",
    category: "Article",
    image: "/startup-coding-screen.jpg",
  },
  {
    slug: "beyond-bots-real-business-impact-from-ai-integration",
    title: "Beyond Bots: Real Business Impact from AI Integration",
    excerpt:
      "Explore real-world examples of how AI automation goes beyond simple chatbots to deliver measurable business value across teams.",
    date: "Jan 1, 2025",
    category: "Article",
    image: "/colorful-keyboard-technology.jpg",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Blog Posts</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light mb-4">
            Latest News <span className="font-serif italic text-muted-foreground">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest improvements and new features
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
