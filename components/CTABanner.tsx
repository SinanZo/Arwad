import React from 'react'

export default function CTABanner(){
  return (
    <section className="bg-blue-600 text-white py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Ready to Optimize Your Supply Chain?</h3>
          <p className="mt-2 text-blue-100">Contact our team today to discuss your MRO requirements.</p>
        </div>
        <div className="flex gap-3 mt-6 md:mt-0">
          <a href="/quote-order" className="btn-secondary">Request Quote</a>
          <a href="/contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
