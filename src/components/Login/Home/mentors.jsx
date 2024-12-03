import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function Mentors() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Enable infinite looping
    align: 'start', // Align slides to the start
  });
  const [mentors, setMentors] = useState([]);

  // Dynamic slide width based on window size
  const [slideWidth, setSlideWidth] = useState('33.333%'); // Default width for desktop

  // Update slide width based on screen size
  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth < 768) {
        setSlideWidth('100%'); // Full width for small screens
      } else if (window.innerWidth < 1024) {
        setSlideWidth('50%'); // Two slides per screen for medium screens
      } else {
        setSlideWidth('33.333%'); // Three slides per screen for large screens
      }
    };

    updateSlideWidth(); // Set initial width
    window.addEventListener('resize', updateSlideWidth);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  useEffect(() => {
    const exampleMentors = [
      {
        image: 'https://via.placeholder.com/150',
        name: 'John Doe',
        description: 'An experienced software engineer with a passion for teaching.',
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'Jane Smith',
        description: 'A data scientist who loves to explore new technologies.',
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'Alice Johnson',
        description: 'A product manager with a knack for innovative solutions.',
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'Mark Lee',
        description: 'A seasoned entrepreneur with years of business insights.',
      },
    ];
    setMentors(exampleMentors);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
      <div className="embla__container flex" style={{ display: 'flex' }}>
        {mentors.map((mentor, index) => (
          <div
            className="embla__slide flex-none p-2"
            key={index}
            style={{
              flex: '0 0 auto',
              width: slideWidth,
              height: 'auto',
            }}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
              <img className="w-full" src={mentor.image} alt={mentor.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{mentor.name}</div>
                <p className="text-gray-700 text-base">{mentor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors;
