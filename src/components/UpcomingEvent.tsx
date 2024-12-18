import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from './ui/Card';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationLink: string;
}

const currentEvent: EventProps = {
  title: 'AI Workshop: Deep Learning Fundamentals',
  date: 'March 25, 2024',
  time: '2:00 PM - 5:00 PM',
  location: 'CS Building, Room 201',
  description:
    'Join us for an intensive workshop on deep learning fundamentals. Learn about neural networks, backpropagation, and implement your first AI model!',
  imageUrl:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  registrationLink: '#',
};

export default function UpcomingEvent() {
  return (
    <section className="relative pt-24 pb-20 z-0">
      {' '}
      {/* Updated padding and z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover:shadow-purple-500/50">
        <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-purple-500/50">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-overlay" />
              <img
                src={currentEvent.imageUrl}
                alt={currentEvent.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium animate-pulse">
                  Upcoming Event
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all duration-300">
                {currentEvent.title}
              </h3>
              <p className="text-gray-300 mb-6">{currentEvent.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">{currentEvent.date}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">{currentEvent.time}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">{currentEvent.location}</span>
                </div>
              </div>
              <button className="group relative w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px]">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
