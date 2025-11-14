import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Mock: In real app you'd validate and send email/save to DB
    console.log('Contact form submitted', body)
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }
}
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the contact form submission (in production, this would send an email or save to database)
    console.log('Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      subject: body.subject,
      message: body.message,
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will contact you shortly.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    )
  }
}
