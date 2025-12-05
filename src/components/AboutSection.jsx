import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';

const aboutContent = {
  title: "About Us",
  subtitle: "LEGACY OF TASTE, TRADITION OF TRUST",
  desc1: "Shree Shyam Caterers is a trusted name in the catering industry. Our journey began with one simple mission: to serve fresh, authentic, and unforgettable food for every occasion.",
  desc2: "With a passionate team of chefs, trained service staff, and a commitment to hygiene, we bring perfection to every plate we serve. We don’t just serve food—we create experiences.",
  features: [
    "Exceptional taste",
    "Customized menus",
    "Professional service",
    "100% client satisfaction"
  ],
  stats: [
    { label: "Years of Legacy", value: "10+" },
    { label: "Happy Clients", value: "100%" },
    { label: "Hygiene", value: "100%" },
    { label: "Service", value: "24/7" }
  ]
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-2">{aboutContent.title}</h2>
             <h3 className="text-3xl md:text-4xl font-bold mb-8 font-serif">{aboutContent.subtitle}</h3>
             <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
               {aboutContent.desc1}
             </p>
             <p className="text-neutral-300 leading-relaxed text-lg italic mb-8">
               {aboutContent.desc2}
             </p>
             <ul className="space-y-3 mb-10">
                {aboutContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-400">
                    <CheckCircle className="text-amber-500 w-5 h-5 mr-3" />
                    {feature}
                  </li>
                ))}
             </ul>
             <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
               {aboutContent.stats.map((stat, idx) => (
                 <div key={idx} className="text-center md:text-left">
                   <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                   <p className="text-xs text-neutral-500 uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
             </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <img 
              src="/hero-image.jpg" 
              alt="Legacy" 
              // Changed classes:
              // Removed fixed height (h-96) to allow image to grow naturally
              // w-full ensures it takes full width of the column
              // h-auto maintains aspect ratio
              // object-contain ensures full image is visible
              // Added max-h-[600px] to prevent it from getting too tall on very large screens
              className="relative z-10 rounded-lg shadow-2xl border border-neutral-800 w-full h-auto max-h-[600px] object-contain bg-neutral-800/50"
            />
            <div className="absolute -bottom-10 -left-10 bg-neutral-800 p-6 rounded-lg shadow-xl border border-amber-500/30 z-20 hidden md:block">
               <Award className="text-amber-500 w-12 h-12 mb-2" />
               <p className="text-white font-bold uppercase text-sm text-center">Best<br/>Caterers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;