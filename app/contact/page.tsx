'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-electric-50 via-white to-electric-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Drop me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-width max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-6">
                  Contact Information
                </h2>
                
                {/* Email */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wide mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:rrschauhan20@gmail.com"
                    className="text-lg text-charcoal-900 hover:text-electric-600 transition-colors"
                  >
                    rrschauhan20@gmail.com
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wide mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <SocialLink
                      href="https://github.com/rrschauhan07"
                      label="GitHub"
                      icon="↗"
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/rrsc20"
                      label="LinkedIn"
                      icon="↗"
                    />
                    <SocialLink
                      href="https://x.com/rrschauhan07"
                      label="Twitter"
                      icon="↗"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-8 border-t border-charcoal-200">
                <p className="text-charcoal-600 leading-relaxed">
                  I typically respond within 24-48 hours. For urgent matters,
                  feel free to reach out via email or social media.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal-100 hover:bg-electric-100 text-charcoal-700 hover:text-electric-700 rounded-lg transition-colors font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label} {icon}
    </motion.a>
  )
}

