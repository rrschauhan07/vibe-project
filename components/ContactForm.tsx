'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message'
      )
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-charcoal-900 mb-6">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all bg-white text-charcoal-900"
            placeholder="Your name"
            disabled={status === 'submitting'}
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all bg-white text-charcoal-900"
            placeholder="your.email@example.com"
            disabled={status === 'submitting'}
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all resize-none bg-white text-charcoal-900"
            placeholder="Tell me about your project..."
            disabled={status === 'submitting'}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          className="w-full"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
            >
              <p className="font-medium">✓ Message sent successfully!</p>
              <p className="text-sm mt-1">
                I'll get back to you as soon as possible.
              </p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
            >
              <p className="font-medium">✗ Failed to send message</p>
              <p className="text-sm mt-1">
                {errorMessage || 'Please try again later.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}

