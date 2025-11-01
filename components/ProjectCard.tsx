'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-electric-100 to-electric-200">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-charcoal-400">
            <span className="text-4xl">📱</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-electric-600/0 group-hover:bg-electric-600/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal-900 mb-2 group-hover:text-electric-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-charcoal-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-charcoal-100 text-charcoal-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-600 hover:text-electric-700 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              Live Demo →
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-charcoal-900 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              GitHub →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

