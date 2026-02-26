const points = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Regulatory Compliant',
    desc: 'Fully certified under CPCB and state pollution control board norms. All documentation handled end-to-end.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Reliable Pickup Schedules',
    desc: 'We commit to your schedule. Consistent, punctual pickups so your facility runs without interruption.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 6s4-2 11-2 11 2 11 2-4 2-11 2S1 6 1 6z"/>
        <path d="M1 12s4 2 11 2 11-2 11-2"/>
        <path d="M1 18s4-2 11-2 11 2 11 2"/>
      </svg>
    ),
    title: 'Transparent Tracking',
    desc: 'Real-time GPS tracking on every vehicle. Know where your waste is, at every step of the chain.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10"/>
        <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
        <path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>
      </svg>
    ),
    title: 'Eco-Friendly Processing',
    desc: 'Zero landfill commitment. Our treatment methods minimize environmental impact while maximizing safety.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-forest-900 relative overflow-hidden">
      {/* background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #4eba85 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p className="section-label text-forest-400 mb-3">Why Segrasafe</p>
          <h2 className="font-display text-3xl md:text-5xl text-white max-w-lg leading-tight">
            Built on accountability, driven by care
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(p => (
            <div key={p.title} className="bg-forest-800/60 border border-forest-700/50 rounded-2xl p-6 hover:border-forest-500 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-forest-600/30 text-forest-400 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="font-display text-lg text-white mb-2">{p.title}</h3>
              <p className="text-sm text-forest-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
