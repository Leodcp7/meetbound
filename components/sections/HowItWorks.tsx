'use client'
import { useEffect, useRef } from 'react'
import { ClipboardList, Rocket, TrendingUp, Calendar } from 'lucide-react'

const steps = [
  {
    icon: <ClipboardList size={28} />,
    number: '01',
    title: 'Strategy & ICP Definition',
    description: 'We deep-dive into your business, understand your ideal customer, and define a precise targeting strategy aligned with your goals.',
  },
  {
    icon: <Rocket size={28} />,
    number: '02',
    title: 'Campaign Build & Launch',
    description: 'We set up domain infrastructure, write AI-personalized sequences, build prospect lists, and launch your campaigns within 48 hours.',
  },
  {
    icon: <TrendingUp size={28} />,
    number: '03',
    title: 'Optimize & Scale',
    description: 'We monitor performance daily, A/B test messaging, clean lists, and continuously optimize to maximize reply rates and conversions.',
  },
  {
    icon: <Calendar size={28} />,
    number: '04',
    title: 'Meetings in Your Calendar',
    description: 'Qualified leads are booked directly into your calendar. You show up, pitch, and close — we handle everything else.',
  },
]

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="py-32"
      style={{ background: 'white' }}
    >
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="section-label justify-center mb-4">
            <Rocket size={16} style={{ color: '#4A6CF7' }} />
            Simple process
          </div>
          <h2 className="text-h2 mx-auto" style={{ color: '#0d1526', maxWidth: '600px' }}>
            From zero to booked meetings in 4 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(74,108,247,0.3), transparent)',
                    transform: 'translateX(-20px)',
                    width: 'calc(100% - 40px)',
                  }}
                />
              )}

              <div className="relative z-10">
                {/* Number */}
                <div
                  className="text-xs font-semibold mb-4 tracking-widest"
                  style={{ color: '#4A6CF7' }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(74,108,247,0.08)',
                    color: '#4A6CF7',
                    border: '1px solid rgba(74,108,247,0.15)',
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="text-h3 mb-3" style={{ color: '#0d1526', fontSize: '1.2rem' }}>
                  {step.title}
                </h3>
                <p className="text-small" style={{ color: '#5a6a8a', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
