import React from 'react';
import { teamData } from '../data/team';
import { Container } from '../components/ui/Container';
import { GradientHeading } from '../components/ui/GradientHeading';
import { Card } from '../components/ui/Card';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <Container>
        <section className="py-20 animate-fade-in">
          <GradientHeading>About AI/ML HUB</GradientHeading>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-gray-300 animate-float">
              AI/ML HUB is a student-led organization dedicated to fostering
              innovation and learning in Artificial Intelligence and Machine
              Learning. We bring together passionate students to explore, learn,
              and grow in the field of AI/ML through workshops, projects, and
              collaborative learning.
            </p>
          </div>
        </section>

        <section className="py-20">
          <GradientHeading>Our Team</GradientHeading>

          {/* Advisors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <TeamMemberCard member={teamData.facultyAdvisor} />
            <TeamMemberCard member={teamData.seniorAdvisor} />
          </div>

          {/* Core Team Tree */}
          
            {/* President Level */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
              <TeamMemberCard member={teamData.coreTeam.president} />

              {/* VP and Secretary Level */}

              <TeamMemberCard member={teamData.coreTeam.vicePresident} />
              <TeamMemberCard member={teamData.coreTeam.generalSecretary} />
            </div>

            {/* Department Heads Level */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMemberCard member={teamData.coreTeam.heads.management} />
              <TeamMemberCard member={teamData.coreTeam.heads.marketing} />
              <div className="grid gap-4">
                {teamData.coreTeam.heads.technical.map((head, index) => (
                  <TeamMemberCard key={`tech-${index}`} member={head} />
                ))}
              </div>
              <div className="grid gap-4">
                {teamData.coreTeam.heads.digital.map((head, index) => (
                  <TeamMemberCard key={`digital-${index}`} member={head} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50">
      <div className="relative group">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold text-purple-400">{member.name}</h3>
      <p className="text-gray-400">{member.role}</p>
      <p className="text-sm text-gray-500">{member.email}</p>
    </Card>
  );
}
