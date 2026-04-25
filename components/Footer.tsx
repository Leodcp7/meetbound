import Link from 'next/link'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16" style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center" style={{ background: '#4A6CF7' }}>
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-[1.05rem]" style={{ color: '#0d1526' }}>Meetbound Agency</span>
            </div>
            <p className="text-sm mb-6" style={{ color: '#5a6a8a', maxWidth: '300px', lineHeight: '1.6' }}>
              AI-powered cold email & LinkedIn outreach that fills your calendar with qualified meetings.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={16} />, href: '#' },
                { icon: <Twitter size={16} />, href: '#' },
                { icon: <Mail size={16} />, href: 'mailto:hello@meetbound.agency' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.08)',
                    color: '#5a6a8a',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#4A6CF7'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'white'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'white'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#5a6a8a'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#0d1526' }}>SERVICES</div>
            <ul className="space-y-3">
              {['LinkedIn Outreach', 'Cold Email System', 'Lead Enrichment', 'Campaign Analytics'].map(item => (
                <li key={item}>
                  <Link href="#services" className="text-sm no-underline transition-colors" style={{ color: '#5a6a8a' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A6CF7')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5a6a8a')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#0d1526' }}>COMPANY</div>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '#contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm no-underline transition-colors" style={{ color: '#5a6a8a' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A6CF7')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5a6a8a')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: '#5a6a8a' }}>
            © {new Date().getFullYear()} Meetbound Agency. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#5a6a8a' }}>
            Built with ❤️ for growth teams
          </p>
        </div>
      </div>
    </footer>
  )
}
