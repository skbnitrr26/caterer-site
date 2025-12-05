import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const heroContent = {
  tagline: "SERVING EXCELLENCE FOR DECADES",
  title: "From Weddings to Corporate Events, We Bring Flavours That Create Memories.",
  subtitle: "For over a decade, Shree Shyam Caterers has been delivering premium catering services with unmatched taste, hygiene, and hospitality excellence. Whether it’s an intimate celebration or a grand event, our experienced team ensures every moment becomes unforgettable.",
  primaryButton: "Book Your Event",
  secondaryButton: "View Menu",
  video: "/hero-video.mp4",
  image: "/hero-background.jpg"
};

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
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
          src={heroContent.video}
          poster={heroContent.image}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          {/* Icon and Tagline Section */}
          <div className="flex flex-col items-center justify-center mb-8">
            {/* Even Bigger Icon Above */}
            <div className="mb-6 bg-amber-500/10 p-6 rounded-full border-2 border-amber-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.4)]">
               {/* Increased icon size to w-20 h-20 */}
               <img src="/logo.png" alt="Logo" className="w-20 h-20 object-cover rounded-full" />
            </div>
            
            {/* Tagline Text - Bigger */}
            <p className="text-amber-500 tracking-[0.25em] text-lg md:text-xl font-extrabold uppercase inline-block px-8 py-3 rounded-full border border-amber-500/20 bg-black/60 backdrop-blur-md">
              {heroContent.tagline}
            </p>
          </div>
          
          {/* Main Title - Bigger */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-serif drop-shadow-2xl text-shadow-lg">
            {heroContent.title}
          </h1>
          
          {/* Subtitle - Bigger */}
          <p className="text-neutral-200 text-lg sm:text-xl md:text-2xl mb-12 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {heroContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Bigger buttons
              className="bg-amber-600 text-white px-10 py-5 text-lg rounded-full font-bold tracking-wider hover:bg-amber-500 transition-colors shadow-xl shadow-black/40"
            >
              {heroContent.primaryButton.toUpperCase()}
            </motion.a>
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Bigger buttons
              className="bg-white/10 border-2 border-white text-white px-10 py-5 text-lg rounded-full font-bold tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm shadow-xl"
            >
              {heroContent.secondaryButton.toUpperCase()}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;