'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient with organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-200 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-300 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container-width section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Rishi Raj Singh Chauhan</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-charcoal-600 mb-8 font-light"
            >
              AI Developer and Cybersecurity Expert
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-charcoal-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-charcoal-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Bio/Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-4">
              I&apos;m a passionate developer and designer with a focus on creating
              beautiful, functional, and user-centric web experiences. I combine
              technical expertise with creative vision to build digital products
              that make a difference.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the
              developer community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gradient-to-b from-white to-charcoal-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              A collection of projects showcasing my skills and passion for
              building exceptional digital experiences
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-900 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

