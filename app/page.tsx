import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'ARWAD Trading — Availability. Reliability. Ownership.',
  description: 'Leading regional provider of MRO solutions, spare parts and supply chain services.'
}

export default function Page() {
  return <HomeClient />
}
