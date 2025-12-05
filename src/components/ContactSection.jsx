import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { content } from "../data/app-data";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-2">
              Contact Us
            </h2>
            <h3 className="text-4xl font-bold font-serif mb-6">
              Book Your Event <span className="text-amber-500">With Us</span>
            </h3>
            <p className="text-neutral-400 mb-10 text-lg">
              We Are Just a Call Away!
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-neutral-900 p-4 rounded-lg mr-6 text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone / WhatsApp</h4>
                  <p className="text-neutral-400">{content.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-neutral-900 p-4 rounded-lg mr-6 text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Address</h4>
                  <p className="text-neutral-400">{content.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-neutral-900 p-4 rounded-lg mr-6 text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Location</h4>
                  <p className="text-neutral-400">{content.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 text-white transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 text-white transition-colors"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 text-white transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Event Type
                  </label>
                  <select className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 text-white transition-colors">
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Corporate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Guests
                  </label>
                  <input
                    type="number"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 text-white transition-colors"
                    placeholder="Approx. count"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 text-white transition-colors"
                  placeholder="Tell us more about your event..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold py-4 rounded-lg transition-colors uppercase tracking-wider"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
