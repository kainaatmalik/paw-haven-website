import React from 'react';
import { Pet } from '../types';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Pet[];
  onSelectPet: (pet: Pet) => void;
  onRemoveFavorite: (petId: string) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onSelectPet,
  onRemoveFavorite,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between p-6 animate-slideLeft overflow-y-auto">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E4] mb-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-[#E76F51] text-[#E76F51]" />
              <h3 className="text-lg font-semibold text-[#2F3437]">
                Saved Companions ({favorites.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Favorites List */}
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#E76F51]/10 text-[#E76F51] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-[#2F3437] mb-1">Your favorites list is empty</p>
              <p className="text-xs text-[#6B7280]">
                Click the heart icon on any pet card to save them here for easy access!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((pet) => (
                <div
                  key={pet.id}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F4] border border-[#E7E5E4] hover:bg-white transition-colors group"
                >
                  <img
                    src={pet.imageUrl}
                    alt={pet.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[#2F3437] group-hover:text-[#2E7D4E] transition-colors">
                      {pet.name}
                    </h4>
                    <p className="text-xs text-[#6B7280]">
                      {pet.breed} • {pet.age}
                    </p>
                    <span className="text-[10px] text-[#2E7D4E] font-medium block">
                      {pet.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectPet(pet);
                      }}
                      className="p-2 rounded-xl bg-[#2E7D4E] text-white hover:bg-[#1F6B3E] text-xs font-semibold"
                      title="View Profile"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(pet.id)}
                      className="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#E7E5E4]">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl border border-[#E7E5E4] text-[#2F3437] font-semibold text-xs hover:bg-gray-50"
          >
            Continue Browsing Pets
          </button>
        </div>

      </div>
    </div>
  );
};
