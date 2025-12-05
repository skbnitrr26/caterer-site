import React from "react";
import { Instagram, Mail } from "lucide-react";
import { content } from "../data/app-data";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-10 pb-6 border-t border-neutral-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-6 mb-8">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            {content.brandName}
          </h2>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="flex items-center hover:text-amber-500 transition-colors"
          >
            <Instagram size={20} className="mr-2" />
            {content.contact.instagram}
          </a>
          <a
            href="#"
            className="flex items-center hover:text-amber-500 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Email Us
          </a>
        </div>

        <div className="text-sm text-neutral-600 border-t border-neutral-800 pt-6">
          <p>
            © {new Date().getFullYear()} {content.brandName} – All Rights
            Reserved
          </p>
          <p className="mt-2 text-xs">Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
