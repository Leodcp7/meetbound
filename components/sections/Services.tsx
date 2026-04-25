'use client'
import { useEffect, useRef } from 'react'
import { Linkedin, Mail, Zap, BarChart3, Users, Target } from 'lucide-react'

const services = [
  {
    icon: <Linkedin size={24} />,
    title: 'LinkedIn Outreach',
    description: 'Hyper-personalized connection requests, DMs, and InMails at scale. We target your exact ICP using Sales Navigator + AI enrichment.',
    tags: ['Sales Navigator', 'AI Personalization', 'Auto-followup'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Cold Email System',
    description: 'Domain infrastructure, deliverability setup, AI-written sequences, and A/B testing — all managed for you.',
    tags: ['Domain Warmup', 'Spintax AI', 'Inbox Placement'],
  },
  {
    icon: <Zap size={24} />,
    title: 'AI Lead Enrichment',
    description: 'We enrich every lead with job title, tech stack, funding stage, and recent triggers to make each message feel 1-to-1.',
    tags: ['Apollo', 'Clay', 'GPT-4o'],
  },
  {
    icon: <Target size={24} />,
    title: 'ICP Definition & Targeting',
    description: "We help you nail your Ideal Customer Profile, then build targeted lists that match exactly who's ready to buy.",
    tags: ['List Building', 'Segmentation', 'Intent Signals'],
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Campaign Analytics',
    description: 'Real-time dashboard with open rates, reply rates, meetings booked — plus weekly optimization reviews.',
    tags: ['Weekly Reports', 'A/B Testing', 'Pipeline Tracking'],
  },
  {
    icon: <Users size={24} />,
    title: 'Full-Stack Management',
    description: 'We handle everything end-to-end — from copy to sending to booking calls directly into your calendar.',
    tags: ['Done For You', 'Calendly Integration', 'CRM Sync'],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
      id="services"
      ref={sectionRef}
      className="py-32 section-rounded-top"
      style={{ background: '#f7f8fc' }}
    >
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 fade-up">
          <div className="section-label mb-4">
            <Zap size={16} style={{ color: '#4A6CF7' }} />
            Awesome core services
          </div>
          <h2 className="text-h2" style={{ color: '#0d1526', maxWidth: '600px' }}>
            Everything you need to fill your pipeline
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="card fade-up p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: '#4A6CF7', color: 'white' }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-h3 mb-3" style={{ color: '#0d1526' }}>
                {service.title}
              </h3>
              <p className="text-small mb-6" style={{ color: '#5a6a8a', lineHeight: '1.6' }}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(74,108,247,0.08)', color: '#4A6CF7' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
