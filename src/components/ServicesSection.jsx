import React from "react";
import ServiceCard from "./ServiceCard";
import { content } from "../data/app-data";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-3">
            Our Services
          </h2>
          <h3 className="text-4xl font-bold font-serif">
            We Cater All Types of{" "}
            <span className="text-amber-500">Celebrations</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
