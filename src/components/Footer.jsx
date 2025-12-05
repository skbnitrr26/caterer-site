import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const footerContent = {
  brandName: "Shree Shyam Caterers",
  instagramHandle: "_Shree_Shyam_Caterers",
  email: "Shreeshyamcaterers05@gmail.com"
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-10 pb-6 border-t border-neutral-800">
      <div className="container mx-auto px-6 text-center">
        
        {/* Updated Header: Flex Row to keep icon LEFT of text on all screens */}
        <div className="flex flex-row justify-center items-center space-x-4 mb-8">
            <div className="bg-amber-500/10 p-2 rounded-full border border-amber-500/20 flex-shrink-0">
               {/* Logo Image */}
                <img src="/logo.png" alt="Logo" className="w-6 h-6 object-cover rounded-full" />
            </div>
            {/* Brand Name */}
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider text-left">
              {footerContent.brandName}
            </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            {/* Instagram Link */}
            <a 
              href={`https://www.instagram.com/${footerContent.instagramHandle}/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-amber-500 transition-colors text-lg"
            >
              <Instagram size={24} className="mr-2" />
              {footerContent.instagramHandle}
            </a>

            {/* Email Link */}
            <a 
              href={`mailto:${footerContent.email}`}
              className="flex items-center hover:text-amber-500 transition-colors text-lg"
            >
              <Mail size={24} className="mr-2" />
              Email Us
            </a>
        </div>
        <div className="text-sm text-neutral-600 border-t border-neutral-800 pt-6">
          <p>© {new Date().getFullYear()} {footerContent.brandName} – All Rights Reserved</p>
          <p className="mt-2 text-xs">Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;