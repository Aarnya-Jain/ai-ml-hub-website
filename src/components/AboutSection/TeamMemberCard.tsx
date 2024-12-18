import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import type { TeamMember } from '../../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  isHighlighted?: boolean;
}

export function TeamMemberCard({ member, isHighlighted = false }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        z: 50
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`
        perspective-1000 transform-gpu transition-all duration-300
        ${isHighlighted ? 'col-span-1' : ''}
      `}
    >
      <Card className={`
        p-6 h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50
        hover:shadow-xl hover:shadow-purple-500/20
        transform transition-all duration-500
        hover:translate-z-10
        ${isHighlighted ? 'border-purple-500/30' : 'border-purple-900/20'}
      `}>
        <div className="relative group overflow-hidden rounded-lg mb-4 aspect-square">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-contain transform transition-all duration-700
              group-hover:scale-110 group-hover:rotate-3"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300">
            {member.name}
          </h3>
          <p className="text-gray-300">{member.role}</p>
          <p className="text-sm text-gray-400">{member.email}</p>
        </div>
      </Card>
    </motion.div>
  );
}