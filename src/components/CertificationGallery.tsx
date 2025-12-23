import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, X } from 'lucide-react';
interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
  link: string;
}
const certifications: Certification[] = [
  {
    id: '1',
    title: 'Supervised Machine Learning',
    issuer: 'Coursera',
    date: 'Jul 2024',
    credentialId: 'COURSERA-SML-2024',
    skills: [
      'Machine Learning',
      'Regression',
      'Classification',
      'Model Evaluation'
    ],
    image: '/images/certifications/supervised-ml.jpg',
    link: 'https://drive.google.com/file/d/1neWKuN5WHcd343H9i4xM7Hxow3wssv-0/view'
  },
  {
    id: '2',
    title: 'Artificial Intelligence in Embedded Systems',
    issuer: 'University of Moratuwa',
    date: '2024',
    credentialId: 'UOM-AIES-2024',
    skills: [
      'Embedded AI',
      'Edge Computing',
      'Microcontrollers',
      'Model Optimization'
    ],
    image: '/Images/ML.jpg',
    link: 'https://drive.google.com/file/d/1neWKuN5WHcd343H9i4xM7Hxow3wssv-0/view?usp=drive_link'
  },
  {
    id: '3',
    title: 'Fundamentals of Digital System Design',
    issuer: 'University of Moratuwa',
    date: '2024 (32 Hours)',
    credentialId: 'UOM-DIGITAL-DSD',
    skills: [
      'Digital Logic',
      'Combinational Circuits',
      'Sequential Circuits',
      'Timing Analysis'
    ],
    image: 'Images/fundamentals_of_Digital_Systems.png',
    link: 'https://drive.google.com/file/d/13s1GtYv9F9vS6MU3S0dRbG20kdPL50Ah/view'
  },
  {
    id: '4',
    title: 'Verilog for ASIC / FPGA Design & Simulation',
    issuer: 'University of Moratuwa',
    date: '2025 (60 Hours)',
    credentialId: 'UOM-VERILOG-2025',
    skills: [
      'Verilog HDL',
      'FPGA Design',
      'ASIC Flow',
      'ModelSim Simulation'
    ],
    image: 'Images/SystemVerilog.png',
    link: 'https://drive.google.com/file/d/1EJyDOyhQRhrGL2jNK5UxJ-Z1u7gLC_3w/view'
  }
];

export function CertificationGallery() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  return <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => <motion.div key={cert.id} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} viewport={{
        once: true
      }} onClick={() => setSelectedCert(cert)} className="group cursor-pointer bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-100">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-colors">
                <Award size={24} />
              </div>
              <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                {cert.date}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {cert.title}
            </h3>
            <p className="text-slate-500 text-sm mb-4">{cert.issuer}</p>

            <div className="flex flex-wrap gap-2">
              {cert.skills.map(skill => <span key={skill} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                  {skill}
                </span>)}
            </div>
          </motion.div>)}
      </div>

      <AnimatePresence>
        {selectedCert && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setSelectedCert(null)} className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }} className="w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl pointer-events-auto border border-slate-100">
                <div className="relative h-48">
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-slate-800 hover:bg-white transition-colors shadow-sm">
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8 -mt-12 relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="text-blue-500" size={24} />
                      <h3 className="text-xl font-bold text-slate-900">
                        {selectedCert.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 font-medium">
                      {selectedCert.issuer}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-500">Issue Date</span>
                      <span className="font-medium text-slate-900">
                        {selectedCert.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-500">Credential ID</span>
                      <span className="font-medium text-slate-900 font-mono text-sm">
                        {selectedCert.credentialId}
                      </span>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-sm font-medium text-slate-900 mb-3">
                        Skills Verified
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map(skill => <div key={skill} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-100 text-sm font-medium">
                            <CheckCircle size={14} />
                            {skill}
                          </div>)}
                      </div>
                    </div>

                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Verify Credential
                  </a>

                    
                  </div>
                </div>
              </motion.div>
            </div>
          </>}
      </AnimatePresence>
    </>;
}