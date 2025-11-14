import React from 'react'

export default function HeroSection(){
  return (
    <section className="relative h-[520px] lg:h-[680px] bg-gradient-to-r from-primary-600 to-primary-400 text-white">
      <div className="absolute inset-0 opacity-30 bg-[url('/hero-placeholder.svg')] bg-cover bg-center"></div>
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">Availability. Reliability. Ownership.</h1>
          <p className="text-lg">We deliver MRO solutions, spare parts and dependable supply chain services to industrial sectors.</p>
          <div className="flex gap-4">
            <a href="/quote-order" className="btn-secondary">Request a Quote</a>
            <a href="/industries" className="btn-outline">View Industries</a>
          </div>
        </div>
      </div>
    </section>
  )
}
