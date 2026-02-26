'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left */}
          <div>
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-5xl text-forest-900 leading-tight mb-6">
              Ready to get started with Segrasafe?
            </h2>
            <p className="text-sm text-forest-700 leading-relaxed mb-10">
              Fill out the form and our team will reach out within 24 hours to discuss your facility's specific needs and schedule a free consultation.
            </p>

            <div className="space-y-5">
              
              {/* Email Only */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-forest-900 mb-0.5">Email</div>
                  <div className="text-sm text-forest-600">segrasafe@gmail.com</div>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-forest-100 rounded-2xl p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-forest-800 mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Priya Sharma"
                      className="w-full border border-forest-200 rounded-lg px-4 py-2.5 text-sm text-forest-900 placeholder-forest-300 focus:outline-none focus:border-forest-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-forest-800 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@hospital.com"
                      className="w-full border border-forest-200 rounded-lg px-4 py-2.5 text-sm text-forest-900 placeholder-forest-300 focus:outline-none focus:border-forest-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-800 mb-1.5">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="City Hospital, Apollo Clinics..."
                    className="w-full border border-forest-200 rounded-lg px-4 py-2.5 text-sm text-forest-900 placeholder-forest-300 focus:outline-none focus:border-forest-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-800 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your facility's waste management needs..."
                    className="w-full border border-forest-200 rounded-lg px-4 py-2.5 text-sm text-forest-900 placeholder-forest-300 focus:outline-none focus:border-forest-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-medium py-3 rounded-full transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center py-10">
                <h3 className="font-display text-2xl text-forest-900 mb-2">Message received!</h3>
                <p className="text-sm text-forest-600 max-w-xs">
                  Our team will get back to you within 24 hours to discuss your needs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}