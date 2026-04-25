'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-20 section-rounded-bottom"
      style={{ background: 'white' }}
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div
          className="rounded-4xl p-12 md:p-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4A6CF7 0%, #6a8aff 50%, #dfdbff 120%)' }}
        >
          {/* Blob */}
          <div
            className="glow-blob w-[400px] h-[400px] top-[-100px] right-[-100px] opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <h2 className="text-h2 mb-4" style={{ color: 'white' }}>
                Ready to fill your calendar with qualified meetings?
              </h2>
              <p className="text-body mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Book a free 30-minute strategy call. No fluff — we'll show you exactly how we'd build your outbound system.
              </p>
              <ul className="space-y-3">
                {[
                  'Personalized outreach audit',
                  'ICP & targeting strategy',
                  'Expected results & timeline',
                  'No commitment required',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: 'rgba(255,255,255,0.9)', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}
            >
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} style={{ color: '#4A6CF7', margin: '0 auto 1rem' }} />
                  <h3 className="text-h3 mb-2" style={{ color: '#0d1526' }}>Message sent!</h3>
                  <p style={{ color: '#5a6a8a' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#0d1526' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: '#f7f8fc',
                          border: '1.5px solid rgba(0,0,0,0.08)',
                          fontFamily: 'var(--font-outfit)',
                          color: '#0d1526',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#4A6CF7')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#0d1526' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: '#f7f8fc',
                          border: '1.5px solid rgba(0,0,0,0.08)',
                          fontFamily: 'var(--font-outfit)',
                          color: '#0d1526',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#4A6CF7')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#0d1526' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: '#f7f8fc',
                        border: '1.5px solid rgba(0,0,0,0.08)',
                        fontFamily: 'var(--font-outfit)',
                        color: '#0d1526',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#4A6CF7')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#0d1526' }}>
                      What's your main challenge? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your current outbound situation and goals..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{
                        background: '#f7f8fc',
                        border: '1.5px solid rgba(0,0,0,0.08)',
                        fontFamily: 'var(--font-outfit)',
                        color: '#0d1526',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#4A6CF7')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm" style={{ color: '#ef4444' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center"
                    style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Book My Free Strategy Call'}
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-xs" style={{ color: '#5a6a8a' }}>
                    No credit card required · Response within 24h
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
