import { NextRequest, NextResponse } from 'next/server'

// Simple contact form API route
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Set up rate limiting to prevent spam
    // 4. Add CAPTCHA verification

    // For now, we'll just simulate a successful response
    // Replace this with actual email sending logic
    
    console.log('Contact form submission:', { name, email, message })
    
    // Example: Send email using a service
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   from: email,
    //   subject: `New contact form message from ${name}`,
    //   text: message,
    // })

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

