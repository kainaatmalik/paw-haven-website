import React, { useState } from 'react';
import { Pet } from '../types';
import { Sparkles, Heart, Volume2, VolumeX, CheckCircle, ArrowRight } from 'lucide-react';

interface PetSpotlightProps {
  spotlightPet: Pet;
  onSelectPet: (pet: Pet) => void;
  isFavorite: boolean;
  onToggleFavorite: (petId: string) => void;
}

export const PetSpotlight: React.FC<PetSpotlightProps> = ({
  spotlightPet,
  onSelectPet,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const toggleSound = () => {
    setIsPlayingSound((prev) => !prev);
    if (!isPlayingSound) {
      setTimeout(() => setIsPlayingSound(false), 3000);
    }
  };

  return (
    <section id="spotlight" className="py-20 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/15 text-[#2F3437] text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>Pet of the Week Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            Meet Our Featured Companion
          </h2>
          <p className="text-[#6B7280] text-base">
            Every week, we shine a special light on a long-term resident or gentle soul waiting for an extra special family.
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="bg-white rounded-[28px] border border-[#E7E5E4] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          
          {/* Left Column Image & Sound Player */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px]">
            <img
              src={spotlightPet.imageUrl}
              alt={spotlightPet.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

            {/* Favorite Button */}
            <button
              onClick={() => onToggleFavorite(spotlightPet.id)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md text-[#2F3437] hover:scale-110 transition-transform"
              title="Save to favorites"
            >
              <Heart className={`w-6 h-6 ${isFavorite ? 'fill-[#E76F51] text-[#E76F51]' : ''}`} />
            </button>

            {/* Simulated Audio Sound Bite Button */}
            <button
              onClick={toggleSound}
              className="absolute bottom-4 left-4 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md text-[#2F3437] text-xs font-semibold flex items-center gap-2 shadow-md hover:bg-white transition-colors"
            >
              {isPlayingSound ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#E76F51] animate-pulse" />
                  <span className="text-[#E76F51]">Playing {spotlightPet.name}'s Happy Bark...</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#2E7D4E]" />
                  <span>Hear {spotlightPet.name}'s Greeting</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column Details */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#2E7D4E]/10 text-[#2E7D4E] text-xs font-semibold">
                  {spotlightPet.breed}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E76F51]/10 text-[#E76F51] text-xs font-semibold">
                  {spotlightPet.age} old
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#2F3437] text-xs font-semibold">
                  {spotlightPet.location}
                </span>
              </div>

              {/* Title & Story */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#2F3437] mb-3">
                {spotlightPet.storyHeading || `Meet ${spotlightPet.name}`}
              </h3>
              <p className="text-[#6B7280] text-base leading-relaxed mb-6">
                {spotlightPet.description}
              </p>

              {/* Personality Traits */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-[#6B7280] tracking-wider mb-2.5">
                  Temperament & Traits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {spotlightPet.temperamentTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs font-medium text-[#2F3437]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Health Status */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF8F4] border border-[#E7E5E4] mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-[#2F3437]">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Vaccinated</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#2F3437]">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Microchipped</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#2F3437]">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Spayed/Neutered</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#E7E5E4]">
              <button
                onClick={() => onSelectPet(spotlightPet)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#2E7D4E] text-white font-semibold text-sm shadow-md hover:bg-[#1F6B3E] transition-colors flex items-center justify-center gap-2"
              >
                <span>Adopt {spotlightPet.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectPet(spotlightPet)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-[#E7E5E4] bg-white text-[#2F3437] font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                View Full Profile & Photos
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
