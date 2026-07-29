import React from 'react';
import { PawPrint } from 'lucide-react';

interface BrandDividerProps {
  className?: string;
  variant?: 'paw' | 'line' | 'dots';
}

export const BrandDivider: React.FC<BrandDividerProps> = ({ className = '', variant = 'paw' }) => {
  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-2 py-6 opacity-30 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D4E]" />
        <span className="w-2 h-2 rounded-full bg-[#2E7D4E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D4E]" />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-dashed border-[#2E7D4E]/15" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-[#FAF8F4] px-4 text-[#2E7D4E]/40 flex items-center gap-2 text-xs font-medium">
          <PawPrint className="w-4 h-4 text-[#2E7D4E]/40" />
        </span>
      </div>
    </div>
  );
};
