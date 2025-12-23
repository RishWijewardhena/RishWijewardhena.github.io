import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './ProjectModal';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-purple-200/20"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-30" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-purple-600 shadow-lg">
            <ArrowRight
              size={20}
              className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 line-clamp-2 text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
}
