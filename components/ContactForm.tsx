"use client"
import React, { useState } from 'react'

export default function ContactForm(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [status,setStatus]=useState<'idle'|'sending'|'sent'>('idle')

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setStatus('sending')
    try{
      await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name,email,message})})
      setStatus('sent')
    }catch(err){
      console.error(err)
      setStatus('idle')
    }
  }

  return (
    <form className="space-y-6 max-w-xl" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your full name" className="input-field" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com" type="email" className="input-field" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="How can we help you?" className="input-field h-32 resize-none" />
      </div>
      <div>
        <button type="submit" disabled={status==='sending'} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
          {status==='sending'?'Sending...':status==='sent'?'✓ Message Sent':'Send Message'}
        </button>
      </div>
      {status==='sent' && (
        <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
          Thank you! We&apos;ll get back to you soon.
        </div>
      )}
    </form>
  )
}
