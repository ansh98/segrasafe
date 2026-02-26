const clients = [
  {
    label: 'Hospitals',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <line x1="12" y1="8" x2="12" y2="14"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
      </svg>
    ),
    desc: 'Multi-specialty hospitals and healthcare systems',
  },
  {
    label: 'Clinics',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    desc: 'Independent clinics and outpatient care centers',
  },
  {
    label: 'Diagnostic Labs',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-4m-6 0h6"/>
      </svg>
    ),
    desc: 'Pathology, radiology, and testing laboratories',
  },
  {
    label: 'Pharma Units',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <path d="M3 17h4v4H3z"/>
        <path d="M7 14H3v3"/>
      </svg>
    ),
    desc: 'Pharmaceutical manufacturers and research units',
  },
]

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p className="section-label mb-3">Who We Serve</p>
          <h2 className="font-display text-3xl md:text-5xl text-forest-900 max-w-lg leading-tight">
            Trusted by healthcare across the board
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map(c => (
            <div key={c.label} className="flex flex-col items-start p-7 bg-white border border-forest-100 rounded-2xl hover:border-forest-400 hover:shadow-md transition-all group">
              <div className="text-forest-500 mb-5 group-hover:text-forest-700 transition-colors">
                {c.icon}
              </div>
              <h3 className="font-display text-xl text-forest-900 mb-1">{c.label}</h3>
              <p className="text-xs text-forest-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
