import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronRight } from 'lucide-react';

// Expanded Data with descriptions and gallery images
const menuContent = [
  { 
    category: "North Indian", 
    items: "Dal Makhani, Paneer Butter Masala, Naan, Tandoori Starters, Biryani...",
    image: "/north-indian.jpg",
    description: "Experience the rich and creamy flavors of North India. Our chefs use authentic spices and traditional clay ovens (tandoors) to bring you the true taste of Punjab and Delhi. From buttery naans to slow-cooked dal, every dish is a celebration.",
    gallery: ["/north-indian1.jpg", "/north-indian2.jpg", "/north-indian3.jpg"],
    fullList: [
        "Dal Makhani", "Paneer Butter Masala", "Kadhai Paneer", "Malai Kofta", 
        "Butter Naan", "Garlic Naan", "Tandoori Roti", "Jeera Rice", "Veg Biryani"
    ]
  },
  { 
    category: "South Indian", 
    items: "Idli, Dosa Live Counter, Pongal, Sambhar, Coconut Chutneys...",
    image: "/south-indian.jpg", 
    description: "Light, healthy, and incredibly delicious. Our South Indian spread features crispy dosas made live, fluffy idlis, and a variety of authentic chutneys that transport you straight to the southern coast.",
    gallery: ["/south-indian1.jpg", "/south-indian2.jpg", "/south-indian3.jpg"],
    fullList: [
        "Masala Dosa", "Plain Idli", "Sambar Vada", "Uttapam", "Coconut Chutney", "Tomato Chutney", "Lemon Rice"
    ]
  },
  { 
    category: "Chinese & Continental", 
    items: "Fried Rice, Noodles, Manchurian, Pasta, Garlic Bread...",
    image: "/chinese.jpg",
    description: "A fusion of flavors that everyone loves. Whether it's the spicy kick of Indo-Chinese stir-fries or the creamy comfort of Italian pasta, our continental section is a hit with guests of all ages.",
    gallery: ["/chinese1.jpg", "/chinese2.jpg", "/chinese3.jpg"],
    fullList: [
        "Veg Hakka Noodles", "Manchurian Gravy", "Chilli Paneer", "Spring Rolls", "White Sauce Pasta", "Red Sauce Pasta", "Garlic Bread"
    ]
  },
  { 
    category: "Sweets & Desserts", 
    items: "Gulab Jamun, Rasmalai, Jalebi, Ice Cream, Brownie...",
    image: "/sweets.jpg", 
    description: "No celebration is complete without something sweet. Our dessert counter offers a perfect blend of traditional Indian mithais and modern bakery delights to end your meal on a high note.",
    gallery: ["/sweets1.jpg", "/sweets2.jpg", "/sweets3.jpg"],
    fullList: [
        "Gulab Jamun", "Rasmalai", "Jalebi with Rabri", "Moong Dal Halwa", "Vanilla Ice Cream", "Chocolate Brownie", "Fruit Trifle"
    ]
  },
  { 
    category: "Snacks & Live Counters", 
    items: "Chaat Counter, Golgappa, Tandoor, BBQ, Pav Bhaji, Momos...",
    image: "/snacks.jpg", 
    description: "The life of the party! Our live counters serve piping hot snacks, tangy chaats, and spicy street food favorites that keep your guests coming back for more.",
    gallery: ["/snacks1.jpg", "/snacks2.jpg", "/snacks3.jpg"],
    fullList: [
        "Pani Puri (Gol Gappa)", "Aloo Tikki Chaat", "Papdi Chaat", "Pav Bhaji", "Veg Momos", "Paneer Tikka", "Hara Bhara Kebab"
    ]
  },
  { 
    category: "Beverages & Shakes", 
    items: "Mocktails, Fresh Juices, Milkshakes, Lassi, Cold Coffee...",
    image: "/beverages.jpg", 
    description: "Refreshing drinks to keep the conversations flowing. From traditional lassi to exotic mocktails, our beverage station is colorful, fresh, and thirst-quenching.",
    gallery: ["/beverages1.jpg", "/beverages2.jpg", "/beverages3.jpg"],
    fullList: [
        "Virgin Mojito", "Blue Lagoon", "Fresh Watermelon Juice", "Mango Lassi", "Cold Coffee", "Chocolate Shake", "Masala Chai"
    ]
  }
];

const MenuSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullMenu, setShowFullMenu] = useState(false); // State for full menu modal

  return (
    <section id="menu" className="py-24 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-2">Our Menu</h2>
            <h3 className="text-4xl font-bold font-serif">A Wide Range of <span className="text-amber-500">Cuisines</span></h3>
          </div>
          {/* Updated Button */}
          <button 
            onClick={() => setShowFullMenu(true)}
            className="hidden md:flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors mt-4 md:mt-0"
          >
            View Full Menu <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuContent.map((item, idx) => (
            <motion.div 
              key={idx}
              layoutId={`card-${item.category}`} 
              onClick={() => setSelectedItem(item)}
              whileHover={{ y: -5 }}
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-700 h-full group cursor-pointer hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-300 relative"
            >
              <div className="h-48 overflow-hidden relative">
                <motion.img 
                  layoutId={`image-${item.category}`}
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Adjusted Overlay for lighter look */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-20 pointer-events-none"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <motion.h4 layoutId={`title-${item.category}`} className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{item.category}</motion.h4>
                <p className="text-neutral-400 text-sm italic group-hover:text-neutral-200 transition-colors">{item.items}</p>
                <div className="mt-4 flex items-center text-amber-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Details <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL (Single Item) */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={`card-${selectedItem.category}`}
              className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-amber-500 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full min-h-[300px] relative">
                   <motion.img 
                      layoutId={`image-${selectedItem.category}`}
                      src={selectedItem.image} 
                      alt={selectedItem.category}
                      className="absolute inset-0 w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <motion.h2 
                    layoutId={`title-${selectedItem.category}`}
                    className="text-3xl md:text-4xl font-bold text-amber-500 mb-4 font-serif"
                  >
                    {selectedItem.category}
                  </motion.h2>
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-3 font-bold">Popular Items</h4>
                    <p className="text-neutral-300 italic bg-neutral-800 p-4 rounded-lg border-l-4 border-amber-500">
                      {selectedItem.items}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-3 font-bold">Gallery</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedItem.gallery.map((img, index) => (
                        <motion.img 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1) }}
                          src={img} 
                          alt="Gallery" 
                          className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer border border-neutral-700 hover:border-amber-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULL MENU MODAL (All Items) */}
      <AnimatePresence>
        {showFullMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFullMenu(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-800 flex justify-between items-center bg-neutral-900 sticky top-0 z-10">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white">Full Menu</h2>
                  <p className="text-amber-500 text-sm tracking-wider uppercase">Our Complete Selection</p>
                </div>
                <button 
                  onClick={() => setShowFullMenu(false)}
                  className="bg-neutral-800 p-2 rounded-full text-white hover:bg-amber-500 hover:text-black transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-8 custom-scrollbar">
                <div className="grid md:grid-cols-2 gap-12">
                  {menuContent.map((section, idx) => (
                    <div key={idx} className="mb-8 break-inside-avoid">
                      <h3 className="text-xl font-bold text-amber-500 mb-4 border-b border-neutral-800 pb-2 flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        {section.category}
                      </h3>
                      <ul className="space-y-3 pl-5">
                        {section.fullList ? (
                          section.fullList.map((dish, i) => (
                            <li key={i} className="text-neutral-300 hover:text-white transition-colors list-disc marker:text-neutral-600">
                              {dish}
                            </li>
                          ))
                        ) : (
                          <li className="text-neutral-500 italic">Items loading...</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer CTA */}
              <div className="p-6 border-t border-neutral-800 bg-neutral-900 text-center">
                <p className="text-neutral-400 text-sm mb-3">Want to customize this menu for your event?</p>
                <a href="#contact" onClick={() => setShowFullMenu(false)} className="text-amber-500 font-bold hover:underline">Contact Us for a Custom Quote</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f59e0b; 
        }
      `}</style>
    </section>
  );
};

export default MenuSection;