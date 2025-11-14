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
    <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
      <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full p-3 border rounded" />
      <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full p-3 border rounded" />
      <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="w-full p-3 border rounded h-32" />
      <div>
        <button type="submit" className="btn-primary">{status==='sending'?'Sending...':status==='sent'?'Sent':'Send Message'}</button>
      </div>
    </form>
  )
}
