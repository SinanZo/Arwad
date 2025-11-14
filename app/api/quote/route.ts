import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the quote request (in production, this would send an email or save to database)
    console.log('Quote Request Submission:', {
      timestamp: new Date().toISOString(),
      company: body.company,
      contactPerson: body.contactPerson,
      email: body.email,
      phone: body.phone,
      industry: body.industry,
      items: body.items,
      itemCount: body.items?.length || 0,
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your quote request has been received. We will respond within 24-48 hours.',
        referenceNumber: `QT-${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    )
  }
}
