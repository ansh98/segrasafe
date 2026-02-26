export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-400">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-forest-600 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-display text-lg text-white">Segrasafe</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Compliant, eco-friendly biomedical waste management for India's healthcare ecosystem.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {['Services', 'Why Us', 'Clients', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-xs hover:text-forest-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Contact
            </div>
            <div className="space-y-2 text-xs">
              <div>segrasafe@gmail.com</div>
              <div className="text-forest-600 text-xs mt-4 leading-relaxed">
                Available Mon–Sat, 8AM–6PM IST
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-forest-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-forest-700">
            © {new Date().getFullYear()} Segrasafe Waste Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-forest-700">
            Safe · Compliant · Sustainable
          </p>
        </div>
      </div>
    </footer>
  )
}