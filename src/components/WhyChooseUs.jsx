import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
// Use the latest data file - defined locally to avoid import issues
const whyChooseContent = {
  brandName: "Shree Shyam Caterers",
  whyChooseUs: [
    {
      title: "10+ Years of Catering Legacy",
      description: "A decade of trust and excellence in serving authentic flavors across Agra. Our experience ensures your event runs flawlessly."
    },
    {
      title: "Fresh Ingredients, Hygienic Preparation",
      description: "We adhere to strict hygiene standards and source only the freshest, high-quality ingredients for every dish we prepare."
    },
    {
      title: "Customized Menu for Every Event",
      description: "Whether it's a traditional wedding or a modern corporate gala, we tailor our menus to perfectly match your theme and preferences."
    },
    {
      title: "Professional & Trained Staff",
      description: "Our courteous and well-trained hospitality team ensures your guests are served with warmth, efficiency, and a smile."
    },
    {
      title: "Wide Range of Cuisines",
      description: "From North Indian delicacies to Chinese, Continental, and South Indian favorites, we offer a diverse culinary experience."
    },
    {
      title: "On-Time Service, Every Time",
      description: "Punctuality is our promise. We ensure food is ready and served exactly when scheduled, so your event flows smoothly."
    },
    {
      title: "Affordable Packages",
      description: "Premium catering doesn't have to be expensive. We offer competitive pricing packages designed to fit various budgets."
    }
  ]
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-neutral-950 text-white relative">
       {/* Optional background pattern or gradient */}
       <div className="absolute inset-0 bg-neutral-900/50 skew-y-3 origin-top-left transform -z-10 h-full w-full"></div>

       <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
              Why Clients Choose <span className="text-amber-500">{whyChooseContent.brandName}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
             {whyChooseContent.whyChooseUs.map((point, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.9, backgroundColor: "rgba(38, 38, 38, 0.4)" }} // Initial dark bg
                 whileInView={{ opacity: 1, scale: 1 }}
                 // Updated hover effect to match Service Cards (Brownish color)
                 whileHover={{ 
                   scale: 1.02, 
                   backgroundColor: "rgba(120, 53, 15, 0.6)" 
                 }}
                 transition={{ delay: idx * 0.01, duration: 0.3 }}
                 viewport={{ once: true }}
                 // Removed Tailwind bg class to let Framer handle the background color animation
                 className="border border-neutral-800 p-8 rounded-xl flex flex-col items-start shadow-lg hover:border-amber-500/50 hover:shadow-amber-500/10 transition-all group h-full cursor-pointer"
               >
                 <div className="bg-amber-500/10 p-3 rounded-full mb-4 group-hover:bg-amber-500 transition-colors">
                    <CheckCircle className="text-amber-500 w-8 h-8 group-hover:text-black transition-colors" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2 text-left group-hover:text-amber-500 transition-colors">{point.title}</h3>
                 <p className="text-neutral-400 text-left text-sm leading-relaxed group-hover:text-neutral-200 transition-colors">{point.description}</p>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  )
}

export default WhyChooseUs;