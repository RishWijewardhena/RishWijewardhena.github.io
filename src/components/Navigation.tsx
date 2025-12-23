import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const sections = [{
  id: 'hero',
  label: 'Home'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'skills',
  label: 'Skills'
}, {
  id: 'certifications',
  label: 'Certifications'
}, {
  id: 'competitions',
  label: 'Competitions'
}];
export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.5
    });
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col gap-6">
        {sections.map(section => <li key={section.id} className="relative group">
            <button onClick={() => scrollToSection(section.id)} className="relative flex items-center justify-center w-4 h-4" aria-label={`Scroll to ${section.label}`}>
              <motion.div className={`absolute w-3 h-3 rounded-full transition-colors duration-300 ${activeSection === section.id ? 'bg-purple-500' : 'bg-slate-300 group-hover:bg-slate-400'}`} layoutId="nav-dot" />
              {activeSection === section.id && <motion.div className="absolute w-6 h-6 rounded-full border border-purple-500" layoutId="nav-ring" transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />}
            </button>

            {/* Tooltip */}
            <span className="absolute right-8 top-1/2 -translate-y-1/2 px-2 py-1 bg-white text-slate-700 text-xs rounded shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </li>)}
      </ul>
    </nav>;
}