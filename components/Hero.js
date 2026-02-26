export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a2519 0%, #185136 50%, #196641 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #4eba85, transparent 70%)', transform: 'translateX(30%)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #2a9d65, transparent 70%)', transform: 'translateX(-30%) translateY(30%)' }} />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="fade-up fade-up-delay-1 section-label text-forest-300 mb-6">
            Biomedical Waste Management
          </p>

          <h1 className="fade-up fade-up-delay-2 font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Safe Waste Management{' '}
            <em className="text-forest-400 not-italic">for Healthcare</em>
          </h1>

          <p className="fade-up fade-up-delay-3 text-forest-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            We provide compliant collection, transport, and disposal of biomedical waste for hospitals, clinics, labs, and healthcare providers.
          </p>

          <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-forest-500 hover:bg-forest-400 text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Request Pickup
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center border border-forest-400/50 hover:border-forest-400 text-forest-200 hover:text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="fade-up fade-up-delay-4 mt-16 grid grid-cols-3 gap-6 max-w-sm">
            {[
              { num: '100%', label: 'Compliant' },
              { num: '24/7', label: 'Support' },
              { num: 'Zero', label: 'Compromise' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-display text-2xl text-forest-400">{stat.num}</div>
                <div className="text-xs text-forest-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#f8f5f0"/>
        </svg>
      </div>
    </section>
  )
}
