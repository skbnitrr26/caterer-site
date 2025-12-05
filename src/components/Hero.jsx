import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// Using ChefHat as the placeholder icon. 
// You can replace <ChefHat /> with <img src="/your-icon.png" /> later.
import { ChefHat } from 'lucide-react'; 

const heroContent = {
  // Removed brandName from here since we aren't displaying it separately anymore
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

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          {/* COMBINED ICON + TAGLINE (Bigger & Styled) */}
          <div className="inline-flex items-center justify-center mb-8 px-6 py-3 rounded-full border border-amber-500/30 bg-black/60 backdrop-blur-md shadow-lg">
             {/* Icon */}
             <div className="bg-amber-500/20 p-2 rounded-full mr-4">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-cover rounded-full" />
             </div>
             
             {/* Text */}
             <p className="text-amber-500 tracking-[0.15em] text-lg md:text-xl uppercase font-bold">
               {heroContent.tagline}
             </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif drop-shadow-2xl text-shadow-lg">
            {heroContent.title}
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl mb-10 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-amber-500 transition-colors shadow-lg shadow-black/40"
            >
              {heroContent.primaryButton.toUpperCase()}
            </motion.a>
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm shadow-lg"
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