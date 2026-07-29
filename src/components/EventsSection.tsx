import React, { useState } from 'react';
import { ADOPTION_EVENTS } from '../data/content';
import { AdoptionEvent } from '../types';
import { Calendar, Clock, MapPin, CheckCircle, Sparkles, X } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<AdoptionEvent | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestEmail) return;
    setRsvpSubmitted(true);
  };

  return (
    <section id="events" className="py-20 bg-[#FAF8F4] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
              📅 Upcoming Events
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight">
              Upcoming Adoption Events & Fairs
            </h2>
          </div>
          <p className="text-sm text-[#6B7280] max-w-md">
            Come meet our adoptable pets in person, chat with veterinarians, and connect with fellow pet lovers across Central Texas.
          </p>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADOPTION_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[24px] border border-[#E7E5E4] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#2E7D4E] shadow-xs">
                    {event.tag}
                  </span>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#E76F51] mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#2F3437] mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 mb-4 text-xs text-[#6B7280]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2E7D4E]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#2E7D4E]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setRsvpSubmitted(false);
                    setGuestEmail('');
                  }}
                  className="w-full py-2.5 rounded-xl border border-[#E7E5E4] bg-[#FAF8F4] text-[#2F3437] hover:bg-[#2E7D4E] hover:text-white hover:border-[#2E7D4E] font-semibold text-xs transition-colors text-center"
                >
                  RSVP / Get Event Pass
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#E7E5E4] shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#6B7280] hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {rsvpSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3437] mb-2">You're on the Guest List!</h3>
                <p className="text-xs text-[#6B7280] mb-6">
                  We sent your free VIP event pass and calendar invite to <strong>{guestEmail}</strong>.
                </p>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#2E7D4E] text-white font-medium text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2E7D4E] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Free RSVP Registration</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2F3437] mb-2">{selectedEvent.title}</h3>
                <p className="text-xs text-[#6B7280] mb-4">{selectedEvent.date} • {selectedEvent.location}</p>

                <form onSubmit={handleRsvpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">
                      Email address for your VIP pass
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#2E7D4E] text-white font-semibold text-xs hover:bg-[#1F6B3E] transition-colors"
                  >
                    Confirm Free Pass
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
