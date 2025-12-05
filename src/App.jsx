import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans bg-neutral-900 text-neutral-200 selection:bg-amber-500 selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;