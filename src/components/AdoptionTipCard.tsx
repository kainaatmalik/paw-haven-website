import React, { useState } from 'react';
import { ADOPTION_TIPS } from '../data/content';
import { Lightbulb, RefreshCw, HeartHandshake, Home, Sparkles, Clock } from 'lucide-react';

export const AdoptionTipCard: React.FC = () => {
  const [tipIdx, setTipIdx] = useState(0);

  const iconsMap: Record<string, React.FC<{ className?: string }>> = {
    HeartHandshake,
    Home,
    Sparkles,
    Clock,
  };

  const tip = ADOPTION_TIPS[tipIdx];
  const IconComp = iconsMap[tip.iconName] || Lightbulb;

  const cycleTip = () => {
    setTipIdx((prev) => (prev + 1) % ADOPTION_TIPS.length);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs max-w-4xl mx-auto my-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#F59E0B]" />

      <div className="flex items-start gap-4 pl-2">
        <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/20 text-[#2F3437] flex items-center justify-center shrink-0">
          <IconComp className="w-6 h-6 text-[#F59E0B]" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E76F51] bg-[#E76F51]/10 px-2.5 py-0.5 rounded-full">
              Today's Adoption Tip • {tip.category}
            </span>
          </div>
          <h4 className="text-base font-semibold text-[#2F3437] mb-1">
            {tip.title}
          </h4>
          <p className="text-xs text-[#6B7280] leading-relaxed max-w-2xl">
            {tip.tip}
          </p>
        </div>
      </div>

      <button
        onClick={cycleTip}
        className="px-4 py-2 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-[#2F3437] hover:bg-[#2E7D4E] hover:text-white hover:border-[#2E7D4E] text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0 self-end sm:self-center"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Next Tip</span>
      </button>
    </div>
  );
};
