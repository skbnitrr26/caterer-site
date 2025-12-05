import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

const testimonialsContent = [
  { 
    text: "Our special day was made more special with the delicious food....",
    name: "Adv. Rakesh Verma", 
    event: "Practice at Sadar Tehsil" 
  },
  { 
    text: "Staff behaviour was excellent.",
    name: "Vijendra Singh", 
    event: "RTD Head at Control Room" 
  },
  { 
    text: "Food quality is very good, tasty food, supportive staff.",
    name: "Jagdish Singh Kushwah", 
    event: "Member at BSNL" 
  },
  { 
    text: "Brilliant! Wonderful finger food, beautifully presented, tastes amazing.",
    name: "Gama Dubey", 
    event: "Member at ADA" 
  },
  { 
    text: "The food was so delicious and the service was really great, too! The Dal Baati was so yummy and I ate the whole thing.",
    name: "Kusum Middha", 
    event: "Kitty Planner" 
  },
  { 
    text: "Had an amazing experience at Shree Shyam Caterers! From the moment I walked in, the staff was friendly and helpful.",
    name: "Pawan Garg", 
    event: "Agra Petha Store" 
  },
  { 
    text: "The food is extremely good; prices are very reasonable considering the quantity of food, my new favourite now.",
    name: "Rajesh Agarwal", 
    event: "Rajesh Scientific Industries" 
  },
  { 
    text: "We just want to say thank you so much for wonderful food and beautiful decoration you provided. Good job.",
    name: "Sanjeev K Singhal", 
    event: "Krishna Shubh Pvt Ltd" 
  },
  { 
    text: "Polite staff, on time service & tasty food. We extend our thanks to shree shyam team for the wonderful show put together for our house party.",
    name: "Rajeev Singhal", 
    event: "Agra Lotus Petha" 
  },
  { 
    text: "Fabulous service & tasty food... on time delivery, it was wonderful experience for having lunch for our kitty party.",
    name: "Honey Tiwari", 
    event: "Teacher at St. Paul's" 
  },
  { 
    text: "Hygiene, packing, quantity is at par and also the rates are reliable.",
    name: "Rishi Jain", 
    event: "Jain Traders" 
  },
  { 
    text: "Mr. Arpit and his team are praised for treating events as their own, providing excellent service, and ensuring guest satisfaction.",
    name: "Pankaj Gupta", 
    event: "MD R.B.S College" 
  },
  { 
    text: "Every guest who attended our wedding appreciated the quality, cleanliness, and most importantly, the taste of the food.",
    name: "Rajesh Shrivastava", 
    event: "Fauji Chemist" 
  },
  { 
    text: "The quality, hygiene, and taste they provide are unforgettable, along with the variety of food offered.",
    name: "Sachin Jain", 
    event: "Rangjee Heights" 
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsContent.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <UtensilsCrossed className="w-12 h-12 text-amber-500 mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl font-serif font-bold mb-12">What Our Clients Say</h2>
        
        <div className="max-w-3xl mx-auto h-64 flex items-center justify-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <p className="text-xl md:text-2xl font-light italic text-neutral-300 mb-8 leading-relaxed">
                "{testimonialsContent[current].text}"
              </p>
              <div>
                <h4 className="text-amber-500 font-bold tracking-widest uppercase text-sm">{testimonialsContent[current].name}</h4>
                <p className="text-neutral-500 text-sm mt-1">{testimonialsContent[current].event}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-8 flex-wrap max-w-2xl mx-auto px-4">
          {testimonialsContent.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all mt-2 ${idx === current ? 'bg-amber-500 w-8' : 'bg-neutral-700'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;