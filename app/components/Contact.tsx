'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', project: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Let's Create Something Amazing
        </h2>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Ready to bring your vision to life? Let's discuss your project and create compelling content together.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Get In Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to bring your vision to life? I'm here to help you create compelling video content 
                  that resonates with your audience and achieves your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">nc1575612@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 7078244548</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Location</p>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-foreground font-medium">Quick Actions</h4>
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://cal.com/nitinnennn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-primary hover-lift hover:bg-primary rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-primary-foreground font-medium">Schedule a Call</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/nitin6404/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-muted hover-lift hover:bg-primary rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-muted-foreground group-hover:text-foreground font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted rounded-xl p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project" className="block text-foreground font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="commercial">Commercial</option>
                      <option value="music-video">Music Video</option>
                      <option value="social-media">Social Media</option>
                      <option value="corporate">Corporate</option>
                      <option value="wedding">Wedding</option>
                      <option value="documentary">Documentary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-foreground font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under ₹50,000</option>
                      <option value="1k-5k">₹50,000 - ₹2,00,000</option>
                      <option value="5k-10k">₹2,00,000 - ₹5,00,000</option>
                      <option value="10k-plus">₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary hover-lift text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}