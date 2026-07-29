import React, { useState } from 'react';
import { Clock, GraduationCap, Users, Heart, CheckCircle, X } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Hours',
      desc: 'Weekend shifts, evening dog walks, or morning cat lounge socialization based on your schedule.',
    },
    {
      icon: GraduationCap,
      title: 'Free Pet Care Training',
      desc: 'Receive certified positive-reinforcement training from our licensed behavioral team.',
    },
    {
      icon: Users,
      title: 'Welcoming Community',
      desc: 'Join 120+ passionate local volunteers in Austin & Central Texas who love animals.',
    },
    {
      icon: Heart,
      title: 'Direct Life Impact',
      desc: 'Help shy rescue animals build confidence and find their forever families faster.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Grid Photo Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80"
                  alt="Volunteer holding puppies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-sm mt-8">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80"
                  alt="Volunteer grooming cat"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Text & Benefits */}
          <div className="lg:col-span-6">
            <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
              🤝 Volunteer With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
              Become a Paw Haven Volunteer
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed mb-8">
              Whether you have 2 hours a month or 5 hours a week, your warm presence changes the lives of shelter animals preparing for adoption.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((b, i) => {
                const IconComp = b.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#2E7D4E]/15 text-[#2E7D4E] flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2F3437]">{b.title}</h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                setShowModal(true);
                setSubmitted(false);
              }}
              className="px-8 py-4 rounded-2xl bg-[#2E7D4E] text-white font-medium text-base shadow-md hover:bg-[#1F6B3E] transition-all"
            >
              Become a Volunteer
            </button>
          </div>

        </div>
      </div>

      {/* Volunteer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#E7E5E4] shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#6B7280] hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3437] mb-2">Volunteer Application Sent!</h3>
                <p className="text-xs text-[#6B7280] mb-6">
                  Thank you, <strong>{volunteerName}</strong>! Our volunteer manager will contact you at <strong>{volunteerEmail}</strong> regarding our upcoming orientation session.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#2E7D4E] text-white font-medium text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-[#2F3437] mb-2">Volunteer Registration</h3>
                <p className="text-xs text-[#6B7280] mb-4">Tell us a little about yourself!</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Smith"
                      value={volunteerName}
                      onChange={(e) => setVolunteerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={volunteerEmail}
                      onChange={(e) => setVolunteerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#2E7D4E] text-white font-semibold text-xs hover:bg-[#1F6B3E] transition-colors"
                  >
                    Submit Volunteer Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
