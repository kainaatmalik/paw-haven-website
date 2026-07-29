import React, { useState, useEffect } from 'react';
import { RECENTLY_ADOPTED_NOTIFICATIONS } from '../data/content';
import { Heart, X, Sparkles } from 'lucide-react';

export const RecentlyAdoptedToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Cycle every 15 seconds
    const cycleInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENTLY_ADOPTED_NOTIFICATIONS.length);
        setVisible(true);
      }, 500);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  if (!visible) return null;

  const item = RECENTLY_ADOPTED_NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm bg-white rounded-2xl border border-[#E7E5E4] shadow-xl p-3.5 flex items-center gap-3 animate-slideIn transition-all">
      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E7E5E4]">
        <img src={item.imageUrl} alt={item.petName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2E7D4E]">
          <Sparkles className="w-3 h-3 text-[#F59E0B]" />
          <span>Recently Adopted Forever!</span>
        </div>
        <p className="text-xs font-semibold text-[#2F3437] truncate">
          {item.petName} <span className="font-normal text-[#6B7280]">({item.breed})</span>
        </p>
        <span className="text-[10px] text-[#6B7280] block">
          Adopted in {item.location} • {item.timeAgo}
        </span>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-gray-400 hover:text-gray-600 p-1"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
