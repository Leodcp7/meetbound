import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save to DB
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company: company || '',
        message,
        source: 'website-contact',
      },
    })

    // Optional: Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'Meetbound <noreply@meetbound.agency>',
          to: process.env.NOTIFY_EMAIL || 'hello@meetbound.agency',
          subject: `New lead: ${name} from ${company || 'Unknown'}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        })
      } catch (emailError) {
        console.error('Email send failed:', emailError)
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
