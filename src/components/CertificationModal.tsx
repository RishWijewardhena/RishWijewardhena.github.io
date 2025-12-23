import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ExternalLink, Award } from 'lucide-react';
type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  description: string;
  credentialUrl?: string;
   link: string;
};
interface CertificationModalProps {
  cert: Certification | null;
  onClose: () => void;
}
export function CertificationModal({
  cert,
  onClose
}: CertificationModalProps) {
  return <AnimatePresence>
      {cert && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {/* Modal Content */}
            <motion.div initial={{
          scale: 0.9,
          opacity: 0,
          y: 20
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 0.9,
          opacity: 0,
          y: 20
        }} onClick={e => e.stopPropagation()} className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
              <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/80 hover:text-white transition-colors z-10">
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-48 md:h-full relative">
                  <img src={cert.image} alt={cert.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <div className="mb-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4 border border-purple-500/20">
                      {cert.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-slate-300 mb-4">{cert.issuer}</p>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                      <Calendar size={16} />
                      <span>Issued {cert.date}</span>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-200 transition-colors w-full md:w-auto">
                      <Award size={18} />
                      View Credential
                      <ExternalLink size={14} />
                    </a>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>}
    </AnimatePresence>;
}