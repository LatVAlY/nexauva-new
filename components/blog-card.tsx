"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group h-full">
        {/* Image (shared element) */}
        <motion.div
          layoutId={`post-image-${post.slug}`}
          className="relative h-64 overflow-hidden"
          style={{ borderRadius: 16 }}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-white/10 text-foreground hover:bg-white/20">
              {post.category}
            </Badge>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>

          <motion.h3
            layoutId={`post-title-${post.slug}`}
            className="text-2xl font-medium mb-3 text-balance group-hover:text-muted-foreground transition-colors"
          >
            {post.title}
          </motion.h3>

          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </div>
      </Card>
    </Link>
  )
}
