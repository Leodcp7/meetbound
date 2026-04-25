'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Linkedin, Mail, Zap } from 'lucide-react'

export default function Hero() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('visible'), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background glow blobs */}
      <div
        className="glow-blob w-[600px] h-[600px] top-[-100px] right-[-200px]"
        style={{ background: 'radial-gradient(circle, rgba(74,108,247,0.2) 0%, transparent 70%)' }}
      />
      <div
        className="glow-blob w-[400px] h-[400px] bottom-[0px] left-[-100px]"
        style={{
          background: 'radial-gradient(circle, rgba(74,108,247,0.12) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#4A6CF7 1px, transparent 1px),
                            linear-gradient(90deg, #4A6CF7 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1160px] mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full fade-up visible"
          style={{ background: 'rgba(74,108,247,0.08)', border: '1px solid rgba(74,108,247,0.2)' }}
        >
          <Zap size={14} className="text-brand-500" style={{ color: '#4A6CF7' }} />
          <span className="text-sm font-medium" style={{ color: '#4A6CF7' }}>
            AI-Powered Lead Generation Agency
          </span>
        </div>

        {/* Main heading */}
        <div ref={headingRef} className="fade-up" style={{ transitionDelay: '0.1s' }}>
          <h1 className="text-h1 mb-6" style={{ color: '#0d1526', maxWidth: '820px', margin: '0 auto 1.5rem' }}>
            Turn Cold Outreach Into{' '}
            <span style={{ color: '#4A6CF7' }}>Warm Meetings</span>{' '}
            on Autopilot
          </h1>
        </div>

        {/* Subheading */}
        <div className="fade-up" style={{ transitionDelay: '0.2s', animation: 'fadeUp 0.7s 0.2s cubic-bezier(0.44,0,0.56,1) forwards', opacity: 0 }}>
          <p
            className="text-body mb-10"
            style={{ color: '#5a6a8a', maxWidth: '560px', margin: '0 auto 2.5rem' }}
          >
            We build AI-driven cold email & LinkedIn outreach systems that generate qualified leads
            consistently — so your team focuses on closing, not prospecting.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          style={{ animation: 'fadeUp 0.7s 0.35s cubic-bezier(0.44,0,0.56,1) forwards', opacity: 0 }}
        >
          <Link href="#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            Book a Free Strategy Call
            <ArrowRight size={16} />
          </Link>
          <Link href="#services" className="btn-secondary" style={{ fontSize: '1rem', padding: '13px 32px' }}>
            See How It Works
          </Link>
        </div>

        {/* Channel pills */}
        <div
          className="flex flex-wrap gap-3 justify-center mb-16"
          style={{ animation: 'fadeUp 0.7s 0.45s cubic-bezier(0.44,0,0.56,1) forwards', opacity: 0 }}
        >
          {[
            { icon: <Linkedin size={16} />, label: 'LinkedIn Outreach' },
            { icon: <Mail size={16} />, label: 'Cold Email' },
            { icon: <Zap size={16} />, label: 'AI Personalization' },
          ].map(item => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.08)',
                color: '#3d4a6b',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <span style={{ color: '#4A6CF7' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Hero dashboard mockup */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: '900px',
            animation: 'fadeUp 0.9s 0.5s cubic-bezier(0.44,0,0.56,1) forwards',
            opacity: 0,
          }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 0 80px 20px rgba(74,108,247,0.15), 0 40px 80px rgba(0,0,0,0.1)',
              transform: 'perspective(1000px) rotateX(8deg)',
              border: '1px solid rgba(255,255,255,0.8)',
            }}
          >
            {/* Fake dashboard */}
            <div style={{ background: '#0f1728', padding: '0' }}>
              {/* Topbar */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div
                  className="rounded-lg px-4 py-1 text-xs"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}
                >
                  app.meetbound.agency
                </div>
                <div className="w-16" />
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-12 gap-0" style={{ minHeight: '380px' }}>
                {/* Sidebar */}
                <div className="col-span-2 p-4 flex flex-col gap-2" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  {['Dashboard', 'Leads', 'Sequences', 'LinkedIn', 'Analytics', 'Settings'].map((item, i) => (
                    <div
                      key={item}
                      className="px-3 py-2 rounded-lg text-xs font-medium"
                      style={{
                        background: i === 0 ? 'rgba(74,108,247,0.2)' : 'transparent',
                        color: i === 0 ? '#4A6CF7' : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main area */}
                <div className="col-span-10 p-6">
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Leads Generated', value: '2,847', trend: '+23%', color: '#4A6CF7' },
                      { label: 'Open Rate', value: '68.4%', trend: '+12%', color: '#10b981' },
                      { label: 'Reply Rate', value: '24.1%', trend: '+8%', color: '#f59e0b' },
                      { label: 'Meetings Booked', value: '134', trend: '+41%', color: '#ec4899' },
                    ].map(stat => (
                      <div
                        key={stat.label}
                        className="rounded-xl p-4"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
                        <div className="text-xl font-semibold mb-1" style={{ color: 'white' }}>{stat.value}</div>
                        <div className="text-xs font-medium" style={{ color: '#10b981' }}>{stat.trend}</div>
                      </div>
                    ))}
                  </div>

                  {/* Lead table */}
                  <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div
                      className="px-4 py-3 text-xs font-semibold grid grid-cols-4 gap-4"
                      style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)' }}
                    >
                      <span>Name</span><span>Company</span><span>Status</span><span>Channel</span>
                    </div>
                    {[
                      { name: 'Sarah Mitchell', co: 'TechFlow SaaS', status: 'Meeting Booked', ch: 'LinkedIn', sc: '#10b981' },
                      { name: 'James Okafor', co: 'ScaleHQ', status: 'Replied', ch: 'Email', sc: '#4A6CF7' },
                      { name: 'Lena Vogel', co: 'Nordic Labs', status: 'Opened', ch: 'Email', sc: '#f59e0b' },
                      { name: 'Marco Di Luca', co: 'Velo Growth', status: 'Contacted', ch: 'LinkedIn', sc: 'rgba(255,255,255,0.3)' },
                    ].map(row => (
                      <div
                        key={row.name}
                        className="px-4 py-3 text-xs grid grid-cols-4 gap-4"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)' }}
                      >
                        <span>{row.name}</span>
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{row.co}</span>
                        <span>
                          <span className="px-2 py-0.5 rounded-full text-[10px]" style={{ background: `${row.sc}20`, color: row.sc }}>
                            {row.status}
                          </span>
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{row.ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient fade bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(transparent, white)' }}
          />
        </div>
      </div>
    </section>
  )
}
