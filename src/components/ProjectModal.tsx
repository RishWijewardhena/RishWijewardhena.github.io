import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
}
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
export function ProjectModal({
  project,
  onClose
}: ProjectModalProps) {
  return <AnimatePresence>
      {project && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div layoutId={`project-${project.id}`} className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl pointer-events-auto border border-slate-100">
              <div className="relative h-64 md:h-80">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-slate-800 hover:bg-white transition-colors shadow-lg">
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-slate-900">
                    {project.title}
                  </h2>
                  <div className="flex gap-3">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors font-medium text-sm">
                      <Github size={18} />
                      Code
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors font-medium text-sm shadow-lg shadow-purple-200">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-600 border border-purple-100">
                      {tag}
                    </span>)}
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>}
    </AnimatePresence>;
}