export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <p className="section-label mb-4">Our Mission</p>

          <h2 className="font-display text-3xl md:text-5xl text-forest-900 leading-tight mb-6">
            Healthcare waste managed responsibly
          </h2>

          <p className="text-sm text-forest-700 leading-relaxed mb-6">
            Segrasafe was founded on a simple belief: that biomedical waste management
            should never be an afterthought. Healthcare providers dedicate themselves to
            healing — we ensure their waste doesn’t become a harm.
          </p>

          <p className="text-sm text-forest-700 leading-relaxed mb-6">
            We combine deep regulatory expertise with modern logistics to create a
            seamless, transparent waste management experience. From scheduled pickups
            to certified final disposal, every step follows the highest standards of
            safety and environmental responsibility.
          </p>

          <p className="text-sm text-forest-700 leading-relaxed mb-10">
            Sustainability isn't a checkbox for us — it's built into every process.
            Our eco-friendly treatment methods, zero-landfill commitment, and
            continuous compliance monitoring mean you can focus on patient care
            while we handle the rest.
          </p>

          {/* Stats */}
          <div className="flex gap-10">
            <div>
              <h3 className="text-3xl font-semibold text-forest-900">500+</h3>
              <p className="text-xs text-forest-600 mt-1">Facilities Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-forest-900">12+</h3>
              <p className="text-xs text-forest-600 mt-1">Cities Covered</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-forest-900">100%</h3>
              <p className="text-xs text-forest-600 mt-1">Compliance Rate</p>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-forest-800 rounded-2xl p-10 text-white flex items-center justify-center min-h-[300px]">
          <h3 className="font-display text-2xl md:text-3xl text-center">
            “Safety, compliance, and sustainability —
            our three pillars.”
          </h3>
        </div>

      </div>
    </section>
  )
}