"use client"

import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  image: string
  category: string
  href: string
}

export default function ProductCard({
  title,
  description,
  image,
  category,
  href,
}: ProductCardProps) {
  return (
    <Link href={href} className="card group cursor-pointer hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl transition-all">
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-3"
        />
        <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-primary-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {category}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-secondary line-clamp-2">{description}</p>
    </Link>
  )
}
