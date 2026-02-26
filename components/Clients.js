export default function Clients() {
  const clients = [
    {
      title: "Home",
      desc: "Safe biomedical waste collection for home healthcare and individual medical needs."
    },
    {
      title: "Hospitals",
      desc: "Multi-specialty hospitals and healthcare systems."
    },
    {
      title: "Clinics",
      desc: "Independent clinics and outpatient care centers."
    },
    {
      title: "Diagnostic Labs",
      desc: "Pathology, radiology, and testing laboratories."
    },
    {
      title: "Pharma Units",
      desc: "Pharmaceutical manufacturers and research units."
    }
  ]

  return (
    <section id="clients" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center mb-14">
          <p className="section-label mb-4">Who We Serve</p>
          <h2 className="font-display text-3xl md:text-4xl text-forest-900">
            Serving healthcare ecosystems of all sizes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white border border-forest-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-display text-xl text-forest-900 mb-3">
                {client.title}
              </h3>
              <p className="text-sm text-forest-600 leading-relaxed">
                {client.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}