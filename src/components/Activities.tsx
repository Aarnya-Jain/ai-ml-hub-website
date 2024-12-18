import React from 'react';
import { Code, Users, Trophy, Brain } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import { Card } from './ui/Card';

const activities = [
  {
    icon: <Code className="h-8 w-8 text-purple-400" />,
    title: 'Coding Workshops',
    description:
      'Weekly hands-on sessions covering various programming languages and frameworks.',
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: 'Networking Events',
    description:
      'Connect with industry professionals and fellow tech enthusiasts.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-purple-400" />,
    title: 'Hackathons',
    description:
      'Participate in exciting coding competitions and build amazing projects.',
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    title: 'Tech Talks',
    description:
      'Learn from expert speakers about the latest trends in technology.',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative py-20">
      <Container>
        <GradientHeading>Our Activities</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-purple-500/50 hover:border-purple-1000/30 transition-all"
            >
              <div className="mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {activity.title}
              </h3>
              <p className="text-gray-400">{activity.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
