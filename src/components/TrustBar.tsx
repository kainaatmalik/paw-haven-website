import React from 'react';
import { Stethoscope, Syringe, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Stethoscope,
      title: 'Veterinarian Approved',
      subtitle: 'Full health check for every pet',
      color: 'text-[#2E7D4E]',
      bg: 'bg-[#2E7D4E]/10',
    },
    {
      icon: Syringe,
      title: 'Vaccinated Pets',
      subtitle: 'Up-to-date shots & microchip',
      color: 'text-[#E76F51]',
      bg: 'bg-[#E76F51]/10',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Adoption Process',
      subtitle: 'Transparent & stress-free steps',
      color: 'text-[#F59E0B]',
      bg: 'bg-[#F59E0B]/15',
    },
    {
      icon: HeartHandshake,
      title: 'Lifetime Support',
      subtitle: 'Free post-adoption advice & care',
      color: 'text-[#10B981]',
      bg: 'bg-[#10B981]/15',
    },
  ];

  return (
    <section className="py-8 bg-white border-y border-[#E7E5E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#FAF8F4] transition-colors group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2F3437] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280]">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
