import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Calendar, ChefHat, Baby, 
  Heart, GraduationCap, BookOpen, Coffee, Star 
} from 'lucide-react';

const icons = {
  Ring: <Users className="w-10 h-10 text-amber-500 mb-4" />,
  Briefcase: <Calendar className="w-10 h-10 text-amber-500 mb-4" />,
  Cake: <ChefHat className="w-10 h-10 text-amber-500 mb-4" />,
  Baby: <Baby className="w-10 h-10 text-amber-500 mb-4" />,
  Heart: <Heart className="w-10 h-10 text-amber-500 mb-4" />,
  School: <GraduationCap className="w-10 h-10 text-amber-500 mb-4" />,
  Book: <BookOpen className="w-10 h-10 text-amber-500 mb-4" />,
  Coffee: <Coffee className="w-10 h-10 text-amber-500 mb-4" />
};

const ServiceCard = ({ icon, title, desc, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, backgroundColor: "rgba(38, 38, 38, 0.4)" }} // bg-neutral-800/40 is roughly this
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        backgroundColor: "rgba(120, 53, 15, 0.6)" // Brownish color (amber-900)
      }} 
      transition={{ delay: index * 0.05, duration: 0.3 }}
      // Removed bg-neutral-800/40 from className to let Framer control the background
      className="p-6 rounded-xl border border-neutral-700 hover:border-amber-500/50 group cursor-pointer"
    >
      <div className="bg-neutral-900 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
        {icons[icon] || <Star className="w-8 h-8 text-amber-500" />}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-200 transition-colors">{desc}</p>
    </motion.div>
  );
};

export default ServiceCard;