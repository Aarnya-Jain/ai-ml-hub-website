import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingEvent from './components/UpcomingEvent';
import Activities from './components/Activities';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import Meetings from './components/Meetings';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed inset-0 grid-background pointer-events-none"></div>
      <Navbar />
      <main className="relative pt-16">
        <Hero />
        <UpcomingEvent />
        <Activities />
        <EventsSection />
        <Meetings />
        <AboutSection />
        <ContactUs />
        <Contact />
      </main>
      <footer className="relative bg-gray-900 border-t border-purple-900/30 text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} AIML HUB. All rights reserved.</p>
        <p>By- HARSIMRAN SINGH</p>
      </footer>
    </div>
  );
}
