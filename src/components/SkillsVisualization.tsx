import React, { useState } from 'react';
import { motion } from 'framer-motion';
type Skill = {
  name: string;
  level: number; // 0-100
};
const skills: Skill[] = [{
  name: 'Python',
  level: 95
}, {
  name: 'Cpp',
  level: 90
}, {
  name: 'PCB Designing',
  level: 85
}, {
  name: '3D-Design',
  level: 60   
}, {
  name: 'openCV',
  level: 80
}, {
  name: 'Java',
  level: 75
}
,
{  name: 'Embedded C',
   level: 90
}
];
export function SkillsVisualization() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  // Radar chart calculations
  const radius = 120;
  const center = 150;
  const angleStep = Math.PI * 2 / skills.length;
  const getPoint = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const distance = value / 100 * radius;
    const x = center + Math.cos(angle) * distance;
    const y = center + Math.sin(angle) * distance;
    return {
      x,
      y
    };
  };
  const polyPoints = skills.map((skill, i) => {
    const {
      x,
      y
    } = getPoint(i, skill.level);
    return `${x},${y}`;
  }).join(' ');
  return <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <svg width="100%" height="100%" viewBox="0 0 300 300" className="overflow-visible">
          {/* Background Grid */}
          {[20, 40, 60, 80, 100].map(level => <polygon key={level} points={skills.map((_, i) => {
          const {
            x,
            y
          } = getPoint(i, level);
          return `${x},${y}`;
        }).join(' ')} fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />)}

          {/* Axes */}
          {skills.map((_, i) => {
          const {
            x,
            y
          } = getPoint(i, 100);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />;
        })}

          {/* Data Shape */}
          <motion.polygon points={polyPoints} fill="rgba(167, 139, 250, 0.2)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="2" initial={{
          scale: 0,
          opacity: 0,
          transformOrigin: 'center'
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 1,
          ease: 'easeOut'
        }} viewport={{
          once: true
        }} />

          {/* Interactive Points */}
          {skills.map((skill, i) => {
          const {
            x,
            y
          } = getPoint(i, skill.level);
          return <g key={skill.name}>
                <motion.circle cx={x} cy={y} r="4" fill="#a78bfa" initial={{
              scale: 0
            }} whileInView={{
              scale: 1
            }} transition={{
              delay: 0.5 + i * 0.1
            }} viewport={{
              once: true
            }} onMouseEnter={() => setHoveredSkill(skill)} onMouseLeave={() => setHoveredSkill(null)} className="cursor-pointer hover:fill-rose-400 transition-colors" />
                {/* Label */}
                <text x={getPoint(i, 115).x} y={getPoint(i, 115).y} textAnchor="middle" dominantBaseline="middle" fill="#475569" fontSize="12" className="uppercase tracking-wider font-medium">
                  {skill.name}
                </text>
              </g>;
        })}
        </svg>

        {/* Tooltip */}
        {hoveredSkill && <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: 10
      }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 shadow-xl pointer-events-none">
            <div className="text-center">
              <div className="font-bold text-slate-800">
                {hoveredSkill.name}
              </div>
              <div className="text-purple-500 font-mono font-medium">
                {hoveredSkill.level}%
              </div>
            </div>
          </motion.div>}
      </div>
    </div>;
}