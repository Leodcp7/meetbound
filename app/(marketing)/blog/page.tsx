import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Clock } from 'lucide-react'

export const dynamic = 'force-dynamic'

async function getPosts() {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      select: { id: true, slug: true, title: true, excerpt: true, category: true, readTime: true, publishedAt: true, coverImage: true },
    })
  } catch {
    // Return sample posts if DB not connected yet
    return [
      {
        id: '1', slug: 'cold-email-guide-2025', title: 'The Ultimate Cold Email Guide for B2B SaaS in 2025',
        excerpt: 'Everything you need to know to write cold emails that actually get replies — from subject lines to follow-up sequences.',
        category: 'Cold Email', readTime: '8 min read', publishedAt: new Date('2025-01-15'), coverImage: null,
      },
      {
        id: '2', slug: 'linkedin-outreach-strategy', title: 'LinkedIn Outreach That Gets 20%+ Reply Rates',
        excerpt: "How we craft LinkedIn messages that don't feel like spam — and the exact sequences we use for our clients.",
        category: 'LinkedIn', readTime: '6 min read', publishedAt: new Date('2025-01-22'), coverImage: null,
      },
      {
        id: '3', slug: 'ai-personalization-outbound', title: 'How AI Personalization Is Changing Cold Outreach',
        excerpt: 'Using Clay, GPT-4o, and enrichment APIs to write messages that feel 1-to-1 even at scale.',
        category: 'AI & Tech', readTime: '5 min read', publishedAt: new Date('2025-02-01'), coverImage: null,
      },
    ]
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '140px', minHeight: '100vh' }}>
        {/* Header */}
        <section className="pb-20 text-center">
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="section-label justify-center mb-4">
              📝 &nbsp;Insights & Resources
            </div>
            <h1 className="text-h1 mx-auto mb-4" style={{ color: '#0d1526', maxWidth: '700px' }}>
              The Meetbound Blog
            </h1>
            <p className="text-body mx-auto" style={{ color: '#5a6a8a', maxWidth: '540px' }}>
              Actionable guides on cold email, LinkedIn outreach, AI prospecting, and building outbound systems that scale.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="pb-32" style={{ background: '#f7f8fc' }}>
          <div className="max-w-[1160px] mx-auto px-6 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card no-underline block group"
                >
                  {/* Cover */}
                  <div
                    className="h-48 rounded-t-2xl flex items-end p-6"
                    style={{
                      background: post.coverImage
                        ? `url(${post.coverImage}) center/cover`
                        : 'linear-gradient(135deg, #4A6CF7 0%, #6a8aff 100%)',
                    }}
                  >
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(10px)' }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock size={12} style={{ color: '#5a6a8a' }} />
                      <span className="text-xs" style={{ color: '#5a6a8a' }}>{post.readTime}</span>
                      {post.publishedAt && (
                        <>
                          <span style={{ color: '#5a6a8a', fontSize: '10px' }}>·</span>
                          <span className="text-xs" style={{ color: '#5a6a8a' }}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="font-semibold mb-3 group-hover:text-brand-500 transition-colors"
                      style={{ color: '#0d1526', fontSize: '1.1rem', lineHeight: '1.4', transition: 'color 0.2s' }}
                    >
                      {post.title}
                    </h2>

                    <p className="text-sm mb-6" style={{ color: '#5a6a8a', lineHeight: '1.6' }}>
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#4A6CF7' }}>
                      Read more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
