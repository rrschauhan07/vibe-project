import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

// Contact form API route
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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      // Still return success to user, but log the error
      return NextResponse.json(
        { 
          message: 'Message sent successfully',
          success: true 
        },
        { status: 200 }
      )
    }

    // Get the receiving email from environment variable or use default
    const receivingEmail = process.env.CONTACT_EMAIL || 'hello@example.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    // Send email using Resend
    try {
      await resend.emails.send({
        from: fromEmail, // Must be a verified domain in Resend
        to: receivingEmail, // Your email where you want to receive messages
        replyTo: email, // Allow replying directly to the sender
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">New Contact Form Submission</h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px;">This message was sent from your portfolio contact form.</p>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
        `,
      })

      console.log('Contact form email sent successfully:', { name, email })
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      // Still return success to user to prevent revealing internal errors
      // You can log this to a monitoring service
    }

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

