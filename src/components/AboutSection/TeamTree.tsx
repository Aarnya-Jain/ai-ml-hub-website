import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

interface TeamTreeProps {
  data: {
    facultyAdvisor: TeamMember;
    seniorAdvisors: TeamMember[];
    coreTeam: {
      president: TeamMember;
      vicePresident: TeamMember;
      generalSecretary: TeamMember;
      heads: {
        management: TeamMember;
        marketing: TeamMember;
        technical: TeamMember[];
        digital: TeamMember[];
      };
    };
  };
}

export default function TeamTree({ data }: TeamTreeProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 space-y-20"
      >
        {/* Advisors Section */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <TeamMemberCard member={data.facultyAdvisor} />
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.seniorAdvisors.map((advisor, index) => (
                <TeamMemberCard key={index} member={advisor} />
              ))}
            </div>
          </div>
        </div>

        {/* Core Team Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-center text-purple-400 mb-8">Core Team</h3>
          
          {/* President, VP, and Secretary Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard member={data.coreTeam.president} isHighlighted={true} />
            <TeamMemberCard member={data.coreTeam.vicePresident} isHighlighted={true} />
            <TeamMemberCard member={data.coreTeam.generalSecretary} isHighlighted={true} />
          </div>

          {/* Department Heads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMemberCard member={data.coreTeam.heads.management} />
            <TeamMemberCard member={data.coreTeam.heads.marketing} />
          </div>

          {/* Technical Heads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.coreTeam.heads.technical.map((head, index) => (
              <TeamMemberCard key={`tech-${index}`} member={head} />
            ))}
          </div>

          {/* Digital Heads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.coreTeam.heads.digital.map((head, index) => (
              <TeamMemberCard key={`digital-${index}`} member={head} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TeamMemberCard({ member, isHighlighted = false }: { member: TeamMember; isHighlighted?: boolean }) {
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
        <div className="relative group overflow-hidden rounded-lg mb-4">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-64 object-cover transform transition-all duration-700
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