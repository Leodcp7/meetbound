import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

function authCheck(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key')
  return apiKey === process.env.ADMIN_API_KEY
}

// GET single post
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const post = await prisma.post.findUnique({ where: { id: params.id } })
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}

// PATCH update post
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!authCheck(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await req.json()
    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        ...body,
        publishedAt: body.published ? body.publishedAt || new Date() : null,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json(post)
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

// DELETE post
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!authCheck(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    await prisma.post.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}
