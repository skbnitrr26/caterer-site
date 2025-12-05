import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// Use explicit extension to ensure resolution
import { content } from '../data/app-data.js';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays automatically on all browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-neutral-900 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          ref={videoRef}
          src={content.hero.video}
          poster={content.hero.image} // Fallback image if video fails/loads slow
          autoPlay
          loop
          muted
          playsInline
          // 'w-full h-full object-cover' ensures the video fills the entire background area
          // just like a background-size: cover in CSS
          className="w-full h-full object-cover opacity-100"
        />
        {/* Dark Overlay - Essential for readability over video */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Removed visible box styling as requested, just a container
          className=""
        >
          {/* Tagline */}
          <p className="text-amber-500 tracking-[0.2em] text-xs sm:text-sm md:text-base mb-4 uppercase font-bold inline-block px-4 py-1 rounded border border-amber-500/20 bg-black/50">
            {content.tagline}
          </p>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif drop-shadow-2xl text-shadow-lg">
            {content.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl mb-10 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-amber-500 transition-colors shadow-lg shadow-black/40"
            >
              {content.hero.primaryButton.toUpperCase()}
            </motion.a>
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm shadow-lg"
            >
              {content.hero.secondaryButton.toUpperCase()}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;