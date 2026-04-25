import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

export const dynamic = 'force-dynamic'

async function getPost(slug: string) {
  try {
    return await prisma.post.findUnique({
      where: { slug, published: true },
    })
  } catch {
    // Sample post fallback
    if (slug === 'cold-email-guide-2025') {
      return {
        id: '1',
        slug,
        title: 'The Ultimate Cold Email Guide for B2B SaaS in 2025',
        excerpt: 'Everything you need to know to write cold emails that actually get replies.',
        content: `
## Why Most Cold Emails Fail

The average cold email gets a **2-3% reply rate**. The best ones? 25-35%. The difference isn't magic — it's a system.

Most people make these mistakes:
- Talking about themselves instead of the prospect
- Generic openers ("I hope this email finds you well")
- No clear, single call to action
- Following up once then giving up

## The Framework We Use at Meetbound

After running thousands of campaigns, we've distilled it down to a simple formula:

### 1. The Subject Line

Your subject line is 80% of the open rate. It should be:
- Short (3-5 words max)
- Curiosity-driven or hyper-specific
- Never clickbait-y

**Examples that work:**
- "Quick question, [Name]"
- "[Company] + [Your Company]?"
- "Idea for [specific problem]"

### 2. The Opener (The Hook)

This is where most cold emails die. Skip the generic stuff. Use a **specific trigger** instead:

> "Saw you just raised a Series A — congrats. Most SaaS companies at that stage are ramping outbound fast."

> "Noticed [Company] is hiring 3 SDRs on LinkedIn right now."

### 3. The Value Proposition (One Line)

Don't list features. Say exactly what outcome you deliver:

> "We help B2B SaaS companies book 20+ qualified meetings/month using AI-personalized outbound."

### 4. Social Proof (Quick)

One relevant proof point. Don't write a case study in the email:

> "We did this for Scalepath — they went from 3 to 28 meetings/month in 45 days."

### 5. The CTA (Single, Low-Friction)

Ask for one thing. Make it easy to say yes:

> "Worth a 15-min call this week to see if it makes sense for [Company]?"

## The Follow-Up Sequence

Most replies come from follow-ups — not the first email. Here's what works:

1. **Day 1** — Initial email
2. **Day 3** — Add value (share a relevant resource)
3. **Day 7** — Light bump ("Did this get buried?")
4. **Day 14** — Try a different angle
5. **Day 21** — Break-up email ("Closing the loop...")

## Domain & Deliverability Setup

None of this matters if your emails land in spam. Here's the non-negotiable checklist:

- Use a **secondary domain** (never your main one)
- Set up SPF, DKIM, and DMARC
- Warm up for 3-4 weeks before sending
- Keep sending volume under 50/day per inbox to start
- Monitor with tools like Mailreach or Lemwarm

## Wrapping Up

Cold email is a skill. The teams that win at it treat it like a science — constant testing, clear hypothesis, quick iteration.

If you want us to build this system for you, [book a free strategy call](#contact).
        `,
        category: 'Cold Email',
        readTime: '8 min read',
        coverImage: null,
        published: true,
        publishedAt: new Date('2025-01-15'),
        createdAt: new Date('2025-01-15'),
        updatedAt: new Date('2025-01-15'),
      }
    }
    return null
  }
}

async function getRelatedPosts(currentSlug: string) {
  try {
    return await prisma.post.findMany({
      where: { published: true, slug: { not: currentSlug } },
      take: 3,
      orderBy: { publishedAt: 'desc' },
      select: { slug: true, title: true, category: true, readTime: true },
    })
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Meetbound Blog`,
    description: post.excerpt,
  }
}

// Simple markdown renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontSize: '1.875rem', fontWeight: 600, letterSpacing: '-0.02em', margin: '2.5rem 0 1rem', color: '#0d1526' }}>{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontSize: '1.375rem', fontWeight: 600, margin: '2rem 0 0.75rem', color: '#0d1526' }}>{line.slice(4)}</h3>)
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} style={{ borderLeft: '3px solid #4A6CF7', paddingLeft: '1.5rem', fontStyle: 'italic', color: '#5a6a8a', margin: '1.5rem 0', fontSize: '1.05rem' }}>
          {line.slice(2)}
        </blockquote>
      )
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          {listItems.map((item, j) => (
            <li key={j} style={{ marginBottom: '0.5rem', color: '#3d4a6b', lineHeight: '1.7' }}
              dangerouslySetInnerHTML={{ __html: formatInline(item) }}
            />
          ))}
        </ul>
      )
      continue
    } else if (line.match(/^\d+\. /)) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(lines[i].replace(/^\d+\. /, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'decimal' }}>
          {listItems.map((item, j) => (
            <li key={j} style={{ marginBottom: '0.5rem', color: '#3d4a6b', lineHeight: '1.7' }}
              dangerouslySetInnerHTML={{ __html: formatInline(item) }}
            />
          ))}
        </ol>
      )
      continue
    } else if (line.trim() === '') {
      // skip
    } else {
      elements.push(
        <p key={i} style={{ marginBottom: '1.5rem', color: '#3d4a6b', lineHeight: '1.8', fontSize: '1.05rem' }}
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      )
    }
    i++
  }

  return elements
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#0d1526;font-weight:600">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code style="background:#f0f2ff;padding:2px 6px;border-radius:4px;font-size:0.9em;color:#4A6CF7">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#4A6CF7;text-decoration:underline;text-underline-offset:3px">$1</a>')
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, related] = await Promise.all([
    getPost(params.slug),
    getRelatedPosts(params.slug),
  ])

  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        {/* Hero */}
        <section className="pb-12" style={{ background: 'white' }}>
          <div className="max-w-[760px] mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mb-8 no-underline text-sm font-medium transition-colors"
              style={{ color: '#5a6a8a' }}
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="mb-6">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(74,108,247,0.1)', color: '#4A6CF7' }}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-h1 mb-6" style={{ color: '#0d1526', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {post.title}
            </h1>

            <p className="text-body mb-8" style={{ color: '#5a6a8a' }}>
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 pb-8" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: '#4A6CF7' }}
              >
                MB
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: '#0d1526' }}>Meetbound Team</div>
                <div className="flex items-center gap-3 text-xs" style={{ color: '#5a6a8a' }}>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                  {post.publishedAt && (
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        {post.coverImage ? (
          <div className="max-w-[960px] mx-auto px-6 mb-12">
            <div className="rounded-3xl overflow-hidden h-[400px]"
              style={{ background: `url(${post.coverImage}) center/cover` }} />
          </div>
        ) : (
          <div className="max-w-[960px] mx-auto px-6 mb-12">
            <div className="rounded-3xl h-[300px] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4A6CF7 0%, #6a8aff 100%)' }}>
              <span className="text-6xl opacity-40">✉️</span>
            </div>
          </div>
        )}

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="prose-meetbound">
              {renderContent(post.content)}
            </div>

            {/* CTA Banner */}
            <div
              className="mt-16 p-8 rounded-3xl text-center"
              style={{ background: 'linear-gradient(135deg, #4A6CF7, #6a8aff)' }}
            >
              <h3 className="text-h3 mb-3" style={{ color: 'white' }}>
                Want us to build this for you?
              </h3>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Book a free strategy call and we'll show you exactly how to apply this to your business.
              </p>
              <Link href="/#contact" className="btn-primary" style={{ background: 'white', color: '#4A6CF7', display: 'inline-flex' }}>
                Book Free Strategy Call
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16" style={{ background: '#f7f8fc' }}>
            <div className="max-w-[1160px] mx-auto px-6">
              <h2 className="font-semibold mb-8" style={{ color: '#0d1526', fontSize: '1.5rem' }}>
                More from the blog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 no-underline block group">
                    <span className="px-2 py-1 rounded-full text-xs font-medium mb-3 inline-block"
                      style={{ background: 'rgba(74,108,247,0.1)', color: '#4A6CF7' }}>
                      {p.category}
                    </span>
                    <h3 className="font-semibold group-hover:text-brand-500 transition-colors"
                      style={{ color: '#0d1526', fontSize: '1rem', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                      {p.title}
                    </h3>
                    <span className="text-xs" style={{ color: '#5a6a8a' }}>{p.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
