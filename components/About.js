export default function About() {
  return (
    <section id="about" className="py-24 bg-forest-50 border-y border-forest-200/50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-4">Our Mission</p>
            <h2 className="font-display text-3xl md:text-5xl text-forest-900 leading-tight mb-6">
              Healthcare waste managed responsibly
            </h2>
            <div className="space-y-4 text-forest-800 leading-relaxed text-sm">
              <p>
                Segrasafe was founded on a simple belief: that biomedical waste management should never be an afterthought. Healthcare providers dedicate themselves to healing — we ensure their waste doesn't become a harm.
              </p>
              <p>
                We combine deep regulatory expertise with modern logistics to create a seamless, transparent waste management experience. From scheduled pickups to certified final disposal, every step follows the highest standards of safety and environmental responsibility.
              </p>
              <p>
                Sustainability isn't a checkbox for us — it's built into every process. Our eco-friendly treatment methods, zero-landfill commitment, and continuous compliance monitoring mean you can focus on patient care while we handle the rest.
              </p>
            </div>

            <div className="mt-8 flex gap-6">
              <div>
                <div className="font-display text-3xl text-forest-700">500+</div>
                <div className="text-xs text-forest-600 mt-0.5">Facilities Served</div>
              </div>
              <div>
                <div className="font-display text-3xl text-forest-700">12+</div>
                <div className="text-xs text-forest-600 mt-0.5">Cities Covered</div>
              </div>
              <div>
                <div className="font-display text-3xl text-forest-700">100%</div>
                <div className="text-xs text-forest-600 mt-0.5">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-forest-800 aspect-[4/3] flex flex-col justify-end p-8"
              style={{ background: 'linear-gradient(135deg, #0a2519 0%, #196641 100%)' }}>
              {/* Icon grid */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="grid grid-cols-4 gap-8 p-8">
                  {Array(16).fill(0).map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-forest-400" />
                  ))}
                </div>
              </div>
              <div className="relative z-10">
                <p className="font-display text-2xl text-white leading-tight mb-2">
                  "Safety, compliance, and sustainability — our three pillars."
                </p>
                <p className="text-forest-400 text-sm">Segrasafe Core Values</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-forest-200 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-forest-900">CPCB Certified</div>
                <div className="text-xs text-forest-500">Govt. Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
