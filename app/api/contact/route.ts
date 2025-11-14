import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log('Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      name: body?.name,
      email: body?.email,
      phone: body?.phone,
      company: body?.company,
      subject: body?.subject,
      message: body?.message,
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return NextResponse.json({ success: true, message: 'Your message has been received.' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false, message: 'An error occurred' }, { status: 500 })
  }
}
