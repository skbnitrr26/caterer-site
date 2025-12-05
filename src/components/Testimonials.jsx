import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import { content } from "../data/app-data";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % content.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <UtensilsCrossed className="w-12 h-12 text-amber-500 mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl font-serif font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-3xl mx-auto h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl md:text-3xl font-light italic text-neutral-300 mb-8 leading-relaxed">
                "{content.testimonials[current].text}"
              </p>
              <div>
                <h4 className="text-amber-500 font-bold tracking-widest uppercase text-sm">
                  {content.testimonials[current].name}
                </h4>
                <p className="text-neutral-500 text-sm mt-1">
                  {content.testimonials[current].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {content.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === current ? "bg-amber-500 w-8" : "bg-neutral-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
