export default function Services() {
  const services = [
    {
      title: "Waste Collection",
      desc: "Scheduled, reliable pickups tailored to your facility's volume and timing needs. Never miss a collection window.",
      tag: "01",
    },
    {
      title: "Secure Transportation",
      desc: "GPS-tracked vehicles and trained personnel ensure safe and compliant biomedical waste transport.",
      tag: "02",
    },
    {
      title: "Safe Disposal",
      desc: "Government-approved processing methods ensuring environmentally responsible biomedical waste disposal.",
      tag: "03",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition"
            >
              <div className="text-green-600 font-bold text-lg mb-4">
                {service.tag}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}