'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            {[
              { icon: Mail, label: 'Email', value: 'support@shophub.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Address', value: '123 Shopping St, Commerce City, CC 12345' },
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <div key={i} className="flex gap-4">
                  <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">{contact.label}</h3>
                    <p className="text-gray-600">{contact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
