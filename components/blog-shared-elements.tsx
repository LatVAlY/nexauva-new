"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function SharedPostTitle({
  slug,
  children,
  className = "",
}: {
  slug: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.h1 layoutId={`post-title-${slug}`} className={className}>
      {children}
    </motion.h1>
  )
}

export function SharedPostImage({
  slug,
  src,
  alt,
  className = "",
  sizes = "100vw",
}: {
  slug: string
  src: string
  alt: string
  className?: string
  sizes?: string
}) {
  return (
    <motion.div layoutId={`post-image-${slug}`} className={`relative overflow-hidden ${className}`} style={{ borderRadius: 16 }}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </motion.div>
  )
}
