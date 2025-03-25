import React, { useState, useEffect } from 'react';
 
const testimonials = [
  {
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Dinesh Singh",
    location: "Mumbai, India",
    image: "/api/placeholder/48/48"
  },
  {
    text: "Their innovative AI solutions have transformed how we approach data analysis. The results exceeded our expectations.",
    author: "Sarah Chen",
    location: "Singapore",
    image: "/api/placeholder/48/48"
  },
  {
    text: "Outstanding support and cutting-edge technology that delivered real business value.",
    author: "Michael Roberts",
    location: "London, UK",
    image: "/api/placeholder/48/48"
  }
];
 
const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-50 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDJjMC05Ljk0IDguMDYtMTggMTgtMThWMGMtOS45NCAwLTE4IDguMDYtMTggMThoLTJ6TTAgMzZjOS45NCAwIDE4IDguMDYgMTggMThoMmMwLTkuOTQgOC4wNi0xOCAxOC0xOHYtMmMtOS45NCAwLTE4LTguMDYtMTgtMThoLTJjMCA5Ljk0LTguMDYgMTgtMTggMTh2MnoiIGZpbGw9IiNmM2YzZjMiLz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10">
        {/* Header Section with responsive adjustments */}
        <div className="mb-12 sm:mb-20">
          <div className="inline-block mb-4">
            <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">TESTIMONIALS</p>
            <div className="h-1 w-12 bg-gray-300 mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">What People Say</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">About Us.</h3>
        </div>
 
        {/* Testimonials Container with responsive height */}
        <div className="relative h-auto sm:h-64 mb-16 sm:mb-0">
          {/* Testimonials with background exactly behind card */}
          <div className="relative z-20">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === activeIndex;
              const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isPrev = idx === prevIndex;
 
              return (
                <div
                  key={idx}
                  className={`absolute right-0 w-full max-w-xl transform transition-all duration-700 ease-in-out
                    ${isActive ? 'translate-y-0 opacity-100 z-30' : ''}
                    ${isPrev ? 'translate-y-2 opacity-60 z-20 hidden sm:block' : ''}
                    ${!isActive && !isPrev ? 'translate-y-4 opacity-30 z-10 hidden sm:block' : ''}
                  `}
                >
                  {/* Fixed: Oval background placed immediately behind each card */}
                  {isActive && (
                    <div className="hidden sm:block absolute z-0 inset-0 overflow-visible">
                      {/* Base oval */}
                      <div className="absolute -left-24 -top-32 w-64 md:w-96 lg:w-[600px] h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-gray-600 to-gray-600 rounded-[40%_60%_55%_45%/55%_45%_45%_55%] opacity-15 blur-xl"></div>
                      
                      {/* Middle oval */}
                      <div className="absolute -left-16 -top-24 w-64 md:w-96 lg:w-[600px] h-64 md:h-80 lg:h-[400px] bg-gradient-to-tr from-gray-600 to-gray-500 rounded-[40%_60%_55%_45%/55%_45%_45%_55%] opacity-20 blur-sm"></div>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-lg p-4 sm:p-8 shadow-lg border border-gray-100 relative z-10">
                    {/* Quote icon - subtle addition */}
                    <div className="mb-4 text-gray-200">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div className="flex-1 mt-4 sm:mt-0">
                        <p className="text-gray-600 text-base sm:text-lg mb-4 italic">{testimonial.text}</p>
                        <p className="font-semibold text-gray-800 mb-1">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* Navigation Controls - adjusted for mobile */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-64 sm:mt-8">
          {/* Previous/Next buttons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full
                  ${idx === activeIndex
                    ? 'w-8 h-2 bg-gray-800'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default TestimonialSlider;