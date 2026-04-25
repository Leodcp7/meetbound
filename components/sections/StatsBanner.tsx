'use client'

const stats = [
  { value: '2,847+', label: 'Leads Generated / Month' },
  { value: '68%', label: 'Average Open Rate' },
  { value: '24%', label: 'Reply Rate' },
  { value: '134', label: 'Meetings Booked / Month' },
  { value: '3.2x', label: 'Average ROI' },
  { value: '48h', label: 'Campaign Launch Time' },
]

export default function StatsBanner() {
  const doubled = [...stats, ...stats]

  return (
    <section
      className="py-16 section-rounded-top"
      style={{ background: '#4A6CF7', overflow: 'hidden' }}
    >
      {/* Ticker */}
      <div className="ticker-wrap mb-12">
        <div className="ticker-inner">
          {doubled.map((stat, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-8 px-12"
            >
              <div className="text-center">
                <div
                  className="text-5xl font-medium"
                  style={{ color: 'white', letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {stat.label}
                </div>
              </div>
              <div className="w-px h-12" style={{ background: 'rgba(255,255,255,0.2)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Static grid */}
      <div className="max-w-[1160px] mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
        >
          {stats.slice(0, 4).map((stat, i) => (
            <div
              key={stat.label}
              className="px-8 py-8"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.2)' : 'none',
              }}
            >
              <div
                className="text-5xl font-medium mb-2"
                style={{ color: 'white', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
