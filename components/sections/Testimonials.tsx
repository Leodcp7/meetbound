'use client'
import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Thomas Gerber',
    title: 'CEO, Scalepath SaaS',
    avatar: 'TG',
    quote: 'Meetbound completely transformed our outbound. We went from 3 meetings per month to 28 in the first 45 days. The personalization is insane — prospects actually think we hand-wrote every message.',
    metric: '9x more meetings',
  },
  {
    name: 'Amélie Dubois',
    title: 'Head of Sales, Nodevo',
    avatar: 'AD',
    quote: "The LinkedIn + email combo they run is chef's kiss. We closed two enterprise deals in month 2. The ROI speaks for itself.",
    metric: '€140k pipeline in 60 days',
  },
  {
    name: 'James Okafor',
    title: 'Founder, HireLoop',
    avatar: 'JO',
    quote: "I was skeptical about cold outreach but these guys know exactly what they're doing. Our reply rates are consistently above 20% which I thought was impossible.",
    metric: '24% reply rate achieved',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-32 section-rounded-top"
      style={{ background: '#f7f8fc' }}
    >
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label justify-center mb-4">
            <Star size={16} style={{ color: '#4A6CF7' }} />
            Client results
          </div>
          <h2 className="text-h2 mx-auto" style={{ color: '#0d1526', maxWidth: '560px' }}>
            What our clients say after 90 days
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card fade-up p-8 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote size={32} style={{ color: '#4A6CF7', opacity: 0.3, marginBottom: '1rem' }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 mb-6" style={{ color: '#3d4a6b', lineHeight: '1.7', fontSize: '0.95rem' }}>
                "{t.quote}"
              </p>

              {/* Metric badge */}
              <div
                className="inline-flex self-start px-3 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{ background: 'rgba(74,108,247,0.1)', color: '#4A6CF7' }}
              >
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: '#4A6CF7' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#0d1526' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#5a6a8a' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
