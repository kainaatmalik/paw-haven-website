import React from 'react';
import { Heart, ShieldCheck, Sparkles, Home } from 'lucide-react';

export const WhyAdopt: React.FC = () => {
  const cards = [
    {
      icon: Heart,
      title: 'Save a Second Life',
      description:
        'When you adopt from Paw Haven, you save two lives: the animal you welcome home, and the next rescue pet who fills their space in our shelter.',
      bgColor: 'bg-[#E76F51]/10',
      iconColor: 'text-[#E76F51]',
      accentColor: 'border-[#E76F51]/20',
    },
    {
      icon: ShieldCheck,
      title: 'Healthy & Vaccinated',
      description:
        'Every dog, cat, rabbit, and bird receives thorough medical checks, full vaccinations, microchipping, and spay/neuter surgery before adoption.',
      bgColor: 'bg-[#2E7D4E]/10',
      iconColor: 'text-[#2E7D4E]',
      accentColor: 'border-[#2E7D4E]/20',
    },
    {
      icon: Sparkles,
      title: 'Lifetime Love & Support',
      description:
        'Our commitment does not end at adoption. Enjoy complimentary behavioral guidance, post-adoption check-ins, and free veterinary wellness visits.',
      bgColor: 'bg-[#F59E0B]/15',
      iconColor: 'text-[#F59E0B]',
      accentColor: 'border-[#F59E0B]/30',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F4] rounded-full blur-3xl -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            💚 Why Adopt
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            The Pure Joy of Giving a Paw a Second Chance
          </h2>
          <p className="text-base text-[#6B7280]">
            Adopting is an act of love that transforms your household while supporting ethical animal rescue.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`bg-[#FAF8F4] rounded-[28px] p-8 border ${card.accentColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative overflow-hidden group`}
              >
                {/* Decorative background circle */}
                <div className={`absolute -right-8 -bottom-8 w-40 h-40 ${card.bgColor} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`} />

                <div
                  className={`w-14 h-14 rounded-2xl ${card.bgColor} ${card.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-[#2F3437] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed relative z-10">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
