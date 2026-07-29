import React, { useState } from 'react';
import { Pet } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, Instagram, Facebook, Twitter } from 'lucide-react';

interface ContactSectionProps {
  pets: Pet[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ pets }) => {
  const [activeShelter, setActiveShelter] = useState<'downtown' | 'eastside'>('downtown');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPet, setSelectedPet] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const shelters = {
    downtown: {
      name: 'Downtown Haven Center',
      address: '124 Haven Lane, Austin, TX 78701',
      phone: '(512) 555-PAWS (7297)',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM | Sun: 11:00 AM - 4:00 PM',
      mapPin: { x: '45%', y: '40%' },
      specs: 'Spacious Dog Runs, Agility Yard, Vet Clinic',
    },
    eastside: {
      name: 'Eastside Cat & Small Pet Lounge',
      address: '890 East 6th St, Austin, TX 78702',
      phone: '(512) 555-CATS (2287)',
      hours: 'Tue - Sun: 10:00 AM - 7:00 PM | Mon: Closed',
      mapPin: { x: '70%', y: '60%' },
      specs: 'Cage-free Feline Playroom, Rabbit Habitats',
    },
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please provide your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const currentShelter = shelters[activeShelter];

  return (
    <section id="contact" className="py-24 bg-[#FAF8F4] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            📩 Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            Visit Our Shelters or Send a Message
          </h2>
          <p className="text-base text-[#6B7280]">
            Our staff and adoption counselors are here to answer your questions and welcome you for a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Contact Info & Interactive Map */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Contact Details Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D4E]/10 text-[#2E7D4E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2F3437]">Primary Location</h3>
                  <p className="text-sm text-[#6B7280]">{currentShelter.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E76F51]/10 text-[#E76F51] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2F3437]">Direct Telephone</h3>
                  <p className="text-sm text-[#6B7280]">{currentShelter.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/20 text-[#2F3437] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2F3437]">Visiting Hours</h3>
                  <p className="text-sm text-[#6B7280]">{currentShelter.hours}</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-4 border-t border-[#E7E5E4] flex items-center gap-3">
                <span className="text-xs font-semibold text-[#6B7280]">Connect with us:</span>
                <a href="#facebook" className="p-2.5 rounded-xl bg-[#FAF8F4] text-[#2F3437] hover:bg-[#2E7D4E] hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" className="p-2.5 rounded-xl bg-[#FAF8F4] text-[#2F3437] hover:bg-[#2E7D4E] hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-2.5 rounded-xl bg-[#FAF8F4] text-[#2F3437] hover:bg-[#2E7D4E] hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Shelter Map Switcher Component */}
            <div className="bg-white rounded-3xl p-6 border border-[#E7E5E4] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-[#2F3437] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#2E7D4E]" />
                  <span>Interactive Shelter Map</span>
                </h4>
                <div className="flex gap-1 bg-[#FAF8F4] p-1 rounded-xl border border-[#E7E5E4]">
                  <button
                    onClick={() => setActiveShelter('downtown')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeShelter === 'downtown'
                        ? 'bg-[#2E7D4E] text-white'
                        : 'text-[#6B7280] hover:text-[#2F3437]'
                    }`}
                  >
                    Downtown
                  </button>
                  <button
                    onClick={() => setActiveShelter('eastside')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeShelter === 'eastside'
                        ? 'bg-[#2E7D4E] text-white'
                        : 'text-[#6B7280] hover:text-[#2F3437]'
                    }`}
                  >
                    Eastside
                  </button>
                </div>
              </div>

              {/* Styled Vector Map Representation */}
              <div className="relative h-48 rounded-2xl bg-[#E2E8F0] border border-[#CBD5E1] overflow-hidden flex items-center justify-center">
                {/* Roads & River Graphic */}
                <div className="absolute inset-0 bg-[#E5E7EB] opacity-80" />
                <div className="absolute top-1/2 left-0 right-0 h-8 bg-[#93C5FD]/40 transform -rotate-12" /> {/* Colorado River representation */}
                <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white opacity-70" /> {/* I-35 representation */}

                {/* Downtown Pin */}
                <button
                  onClick={() => setActiveShelter('downtown')}
                  className={`absolute p-2 rounded-full transition-transform duration-300 ${
                    activeShelter === 'downtown'
                      ? 'bg-[#2E7D4E] text-white scale-125 z-20 shadow-lg ring-4 ring-[#2E7D4E]/30'
                      : 'bg-white text-[#2E7D4E] shadow-md z-10 hover:scale-110'
                  }`}
                  style={{ left: shelters.downtown.mapPin.x, top: shelters.downtown.mapPin.y }}
                  title="Downtown Haven Center"
                >
                  <MapPin className="w-5 h-5" />
                </button>

                {/* Eastside Pin */}
                <button
                  onClick={() => setActiveShelter('eastside')}
                  className={`absolute p-2 rounded-full transition-transform duration-300 ${
                    activeShelter === 'eastside'
                      ? 'bg-[#E76F51] text-white scale-125 z-20 shadow-lg ring-4 ring-[#E76F51]/30'
                      : 'bg-white text-[#E76F51] shadow-md z-10 hover:scale-110'
                  }`}
                  style={{ left: shelters.eastside.mapPin.x, top: shelters.eastside.mapPin.y }}
                  title="Eastside Cat & Small Pet Lounge"
                >
                  <MapPin className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-[#FAF8F4] text-xs text-[#2F3437] flex items-center justify-between">
                <div>
                  <strong>Selected:</strong> {currentShelter.name}
                  <div className="text-[#6B7280] text-[11px]">{currentShelter.specs}</div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentShelter.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#2E7D4E] text-white text-[11px] font-semibold hover:bg-[#1F6B3E]"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E5E4] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2F3437] mb-2">Message Delivered!</h3>
                <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
                  Thank you, <strong>{name}</strong>. We received your message and will reply to <strong>{email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#2E7D4E] text-white font-medium text-xs hover:bg-[#1F6B3E]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold text-[#2F3437] mb-1">Send Us a Direct Message</h3>
                <p className="text-xs text-[#6B7280] mb-6">
                  Have questions about a specific pet, adoption fees, or visiting hours? Fill out the form below.
                </p>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#2F3437] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="(512) 555-0100"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F3437] mb-1">Pet Interested In (Optional)</label>
                  <select
                    value={selectedPet}
                    onChange={(e) => setSelectedPet(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                  >
                    <option value="">-- General Adoption Inquiry --</option>
                    {pets.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.breed})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F3437] mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you today?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#2E7D4E] text-white font-semibold text-sm shadow-md hover:bg-[#1F6B3E] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
