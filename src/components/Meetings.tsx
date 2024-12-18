import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Meetings() {
  return (
    <section id="meetings" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Meeting Information
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-900/20 p-8 max-w-3xl mx-auto shadow-lg shadow-purple-500/10 hover:shadow-purple-500/50">
          <div className="space-y-6">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-purple-400 mr-4" />
              <div>
                <h3 className="font-semibold text-white">Weekly Meetings</h3>
                <p className="text-gray-400">Every Wednesday</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-purple-400 mr-4" />
              <div>
                <h3 className="font-semibold text-white">Time</h3>
                <p className="text-gray-400">6:00 PM - 7:30 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-purple-400 mr-4" />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-400">
                  Computer Science Building, Room 105
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
