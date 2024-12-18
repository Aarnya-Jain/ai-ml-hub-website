import React, { useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import { Card } from './ui/Card';

const events = [
  {
    title: "Machine Learning Workshop",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80",
    description: "Introduction to machine learning algorithms and practical implementations."
  },
  {
    title: "AI Ethics Symposium",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
    description: "Discussion on ethical considerations in AI development."
  },
  {
    title: "Neural Networks Deep Dive",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?auto=format&fit=crop&q=80",
    description: "Advanced session on neural network architectures and applications."
  },
  {
    title: "Computer Vision Workshop",
    date: "February 25, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    description: "Hands-on workshop on computer vision and image processing."
  }
];

export default function EventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="events" className="relative py-20">
      <Container>
        <GradientHeading>Past Events</GradientHeading>
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800/80 p-2 rounded-full border border-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800/80 p-2 rounded-full border border-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 px-4 -mx-4 snap-x snap-mandatory"
            onMouseEnter={() => {
              if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
              }
            }}
            onMouseLeave={() => {
              const scroll = () => {
                if (scrollContainerRef.current) {
                  if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
                    scrollContainerRef.current.scrollLeft = 0;
                  } else {
                    scrollContainerRef.current.scrollLeft += 1;
                  }
                }
                animationRef.current = requestAnimationFrame(scroll);
              };
              animationRef.current = requestAnimationFrame(scroll);
            }}
          >
            {events.map((event, index) => (
              <Card
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-start overflow-hidden group/card transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover/card:text-purple-400 transition-colors">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}