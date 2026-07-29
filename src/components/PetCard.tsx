import React from 'react';
import { Pet } from '../types';
import { Heart, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
  onSelectPet: (pet: Pet) => void;
  isFavorite: boolean;
  onToggleFavorite: (petId: string) => void;
}

export const PetCard: React.FC<PetCardProps> = ({
  pet,
  onSelectPet,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="group bg-white rounded-[24px] border border-[#E7E5E4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
      
      {/* Top Image Section */}
      <div className="relative h-64 overflow-hidden bg-[#FAF8F4]">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay for subtle text protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(pet.id);
          }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2F3437] hover:scale-110 shadow-sm transition-transform"
          aria-label={isFavorite ? `Remove ${pet.name} from saved` : `Save ${pet.name}`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#E76F51] text-[#E76F51]' : ''}`} />
        </button>

        {/* Location Badge Left */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#2F3437] flex items-center gap-1 shadow-xs">
          <MapPin className="w-3 h-3 text-[#2E7D4E]" />
          <span>{pet.location}</span>
        </div>

        {/* Bottom Image Badges: Health & Age */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="font-semibold text-white drop-shadow-md">
            {pet.breed}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#2E7D4E]/90 backdrop-blur-md font-medium text-[11px]">
            {pet.age}
          </span>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Pet Name & Gender/Size */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-[#2F3437] group-hover:text-[#2E7D4E] transition-colors">
              {pet.name}
            </h3>
            <span className="text-xs font-medium text-[#6B7280] capitalize">
              {pet.gender} • {pet.size}
            </span>
          </div>

          {/* Personality Short Description */}
          <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
            {pet.description}
          </p>

          {/* Quick Temperament Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {pet.temperamentTags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-[#FAF8F4] border border-[#E7E5E4] text-[11px] font-medium text-[#2F3437]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Compatibility Badges */}
          <div className="flex items-center gap-2 pt-3 border-t border-[#E7E5E4] text-[11px] text-[#6B7280]">
            {pet.goodWithKids && (
              <span className="flex items-center gap-1 text-[#2E7D4E] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> Kids Friendly
              </span>
            )}
            {pet.goodWithPets && (
              <span className="flex items-center gap-1 text-[#2E7D4E] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> Pets Friendly
              </span>
            )}
            {pet.vaccinated && (
              <span className="flex items-center gap-1 text-[#10B981] font-medium">
                • Vaccinated
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3">
          <button
            onClick={() => onSelectPet(pet)}
            className="w-full py-3 px-4 rounded-xl bg-[#2E7D4E]/10 text-[#2E7D4E] group-hover:bg-[#2E7D4E] group-hover:text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <span>Meet {pet.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
