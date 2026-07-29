import React from 'react';
import { Pet } from '../types';
import { PetCard } from './PetCard';
import { SearchX, RefreshCw } from 'lucide-react';

interface PetGridProps {
  pets: Pet[];
  onSelectPet: (pet: Pet) => void;
  favorites: string[];
  onToggleFavorite: (petId: string) => void;
  onResetFilters: () => void;
}

export const PetGrid: React.FC<PetGridProps> = ({
  pets,
  onSelectPet,
  favorites,
  onToggleFavorite,
  onResetFilters,
}) => {
  if (pets.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-[#E7E5E4] max-w-xl mx-auto my-8 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#E76F51]/10 text-[#E76F51] flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-[#2F3437] mb-2">
          No companions matched your exact filters
        </h3>
        <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
          Try broadening your age, size, or location filters! Our shelter receives new rescue animals every day who may be your perfect match.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2E7D4E] text-white font-medium text-sm shadow-sm hover:bg-[#1F6B3E] transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div id="pet-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          onSelectPet={onSelectPet}
          isFavorite={favorites.includes(pet.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
