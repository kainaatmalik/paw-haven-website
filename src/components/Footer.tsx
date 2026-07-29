import React, { useState } from 'react';
import { PawPrint, Heart, Mail, Phone, MapPin, CheckCircle, ArrowRight, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#2F3437] text-white pt-16 pb-12 border-t border-[#4B5563]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Emergency Rescue Banner */}
        <div className="p-6 rounded-3xl bg-[#2E7D4E]/20 border border-[#2E7D4E]/30 mb-14 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2E7D4E] flex items-center justify-center text-white shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">24/7 Animal Rescue & Emergency Dispatch</h4>
              <p className="text-xs text-gray-300">Found an injured stray or lost pet in Central Texas?</p>
            </div>
          </div>
          <a
            href="tel:18005557297"
            className="px-5 py-2.5 rounded-xl bg-[#2E7D4E] text-white font-semibold text-xs hover:bg-[#1F6B3E] transition-colors whitespace-nowrap"
          >
            Call (800) 555-PAWS
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-700">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#2E7D4E] flex items-center justify-center text-white">
                <PawPrint className="w-5 h-5 fill-current" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">Paw Haven</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-6 max-w-sm">
              Helping every paw find a forever home. 501(c)(3) non-profit rescue organization serving Austin and Central Texas since 2018.
            </p>
            <div className="text-xs text-[#F59E0B] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified 501(c)(3) Non-Profit Organization</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#hero" className="hover:text-[#2E7D4E] transition-colors">Home</a></li>
              <li><a href="#adopt" className="hover:text-[#2E7D4E] transition-colors">Adoptable Pets</a></li>
              <li><a href="#spotlight" className="hover:text-[#2E7D4E] transition-colors">Pet of the Week</a></li>
              <li><a href="#stories" className="hover:text-[#2E7D4E] transition-colors">Happy Tails</a></li>
              <li><a href="#journey" className="hover:text-[#2E7D4E] transition-colors">Adoption Process</a></li>
              <li><a href="#why-us" className="hover:text-[#2E7D4E] transition-colors">Why Adopt</a></li>
            </ul>
          </div>

          {/* Community & Ways to Help */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Get Involved</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#donate" className="hover:text-[#2E7D4E] transition-colors">Donate Online</a></li>
              <li><a href="#contact" className="hover:text-[#2E7D4E] transition-colors">Become a Volunteer</a></li>
              <li><a href="#events" className="hover:text-[#2E7D4E] transition-colors">Adoption Events</a></li>
              <li><a href="#faq" className="hover:text-[#2E7D4E] transition-colors">FAQ & Support</a></li>
              <li><a href="#contact" className="hover:text-[#2E7D4E] transition-colors">Shelter Locations</a></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Paw Haven Digest</h4>
            <p className="text-xs text-gray-300 mb-4">
              Get monthly heart-warming rescue stories, adoption event alerts, and pet health tips directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Thank you! You are subscribed to Paw Haven updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-9 pr-24 py-2.5 rounded-xl bg-[#1E2224] border border-gray-700 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#2E7D4E] text-white text-[11px] font-semibold hover:bg-[#1F6B3E] transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Paw Haven Animal Shelter & Rescue. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Adoption
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs text-[#2F3437]">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E7E5E4] shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-[#6B7280]"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' ? (
              <div>
                <h3 className="text-xl font-semibold mb-3">Privacy Policy</h3>
                <div className="text-xs text-[#6B7280] space-y-3 leading-relaxed">
                  <p>At Paw Haven, we respect your privacy. Personal information submitted via adoption applications or newsletter subscriptions is never sold or shared with third parties.</p>
                  <p>All stored data is protected under modern encryption standards and used strictly for adoption processing and shelter operations.</p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold mb-3">Terms of Adoption</h3>
                <div className="text-xs text-[#6B7280] space-y-3 leading-relaxed">
                  <p>Paw Haven adoptions include a 30-day post-adoption care evaluation window. Adopters agree to provide humane treatment, adequate nutrition, fresh water, and annual veterinary care.</p>
                  <p>If an adopter is ever unable to care for the pet, the pet must be returned to Paw Haven rather than surrendered to municipal shelters.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
