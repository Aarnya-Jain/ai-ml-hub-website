import React from 'react';
import { motion } from 'framer-motion';
import { TeamMemberCard } from './TeamMemberCard';
import { GradientHeading } from '../ui/GradientHeading';
import type { TeamData } from '../../types/team';

interface TeamSectionProps {
  data: TeamData;
}

export function TeamSection({ data }: TeamSectionProps) {
  return (
    <section className="space-y-20">
      {/* Faculty Advisor */}
      <div className="space-y-8">
        <GradientHeading>Faculty Advisor</GradientHeading>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <TeamMemberCard member={data.facultyAdvisor} isHighlighted />
          </div>
        </div>
      </div>

      {/* Senior Advisors */}
      <div className="space-y-8">
        <GradientHeading>Senior Advisors</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.seniorAdvisors.map((advisor, index) => (
            <TeamMemberCard key={index} member={advisor} />
          ))}
        </div>
      </div>

      {/* Core Team */}
      <div className="space-y-12">
        <GradientHeading>Core Team</GradientHeading>
        
        {/* Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMemberCard member={data.coreTeam.president} isHighlighted />
          <TeamMemberCard member={data.coreTeam.vicePresident} isHighlighted />
          <TeamMemberCard member={data.coreTeam.generalSecretary} isHighlighted />
        </div>

        {/* Department Heads */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMemberCard member={data.coreTeam.heads.management} />
            <TeamMemberCard member={data.coreTeam.heads.marketing} />
          </div>

          {/* Technical Heads */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-purple-400 mb-8">Technical Heads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.coreTeam.heads.technical.map((head, index) => (
                <TeamMemberCard key={`tech-${index}`} member={head} />
              ))}
            </div>
          </div>

          {/* Digital Heads */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-purple-400 mb-8">Digital Heads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.coreTeam.heads.digital.map((head, index) => (
                <TeamMemberCard key={`digital-${index}`} member={head} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}