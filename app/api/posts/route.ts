import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all posts (with optional ?published=true filter)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const publishedOnly = searchParams.get('published') === 'true'

    const posts = await prisma.post.findMany({
      where: publishedOnly ? { published: true } : {},
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST create new post
export async function POST(req: NextRequest) {
  try {
    // Simple API key auth — set ADMIN_API_KEY in env
    const apiKey = req.headers.get('x-api-key')
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { slug, title, excerpt, content, category, readTime, published, coverImage } = body

    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'slug, title, content required' }, { status: 400 })
    }

    const post = await prisma.post.create({
      data: {
        slug,
        title,
        excerpt: excerpt || '',
        content,
        category: category || 'Growth',
        readTime: readTime || '5 min read',
        published: published || false,
        publishedAt: published ? new Date() : null,
        coverImage: coverImage || null,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error: any) {
    if (error?.code === 'P2002') {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
