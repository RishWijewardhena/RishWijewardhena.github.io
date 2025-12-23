import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Award } from 'lucide-react';
type Competition = {
  id: string;
  name: string;
  award: string;
  date: string;
  description: string;
  icon: 'trophy' | 'award';
};
export function CompetitionCard({
  competition,
  index
}: {
  competition: Competition;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return <div className="relative w-full h-64 perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div className="w-full h-full relative preserve-3d transition-all duration-500" animate={{
      rotateY: isFlipped ? 180 : 0
    }} transition={{
      duration: 0.6,
      type: 'spring',
      stiffness: 260,
      damping: 20
    }} style={{
      transformStyle: 'preserve-3d'
    }}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden w-full h-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-purple-300 transition-colors shadow-lg hover:shadow-xl hover:shadow-purple-200/20">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4 text-purple-500">
            {competition.icon === 'trophy' ? <Trophy size={32} /> : <Award size={32} />}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {competition.name}
          </h3>
          <p className="text-purple-500 font-medium">{competition.award}</p>
          <p className="text-slate-400 text-sm mt-4">Click to reveal details</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden w-full h-full bg-gradient-to-br from-white to-slate-50 border border-purple-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xl" style={{
        transform: 'rotateY(180deg)'
      }}>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <Calendar size={14} />
            <span>{competition.date}</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {competition.description}
          </p>
        </div>
      </motion.div>
    </div>;
}