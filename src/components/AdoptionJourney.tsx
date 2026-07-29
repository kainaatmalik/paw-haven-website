import React, { useState } from 'react';
import { Search, Heart, FileCheck, Home, Smile, ArrowRight } from 'lucide-react';

export const AdoptionJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 1,
      title: 'Browse Companions',
      short: 'Search online profiles & filters',
      icon: Search,
      color: 'text-[#2E7D4E]',
      bg: 'bg-[#2E7D4E]/10',
      description:
        'Explore detailed pet profiles with high-resolution photos, temperament tags, medical history, and quick compatibility metrics to find your ideal match.',
    },
    {
      step: 2,
      title: 'Meet & Greet',
      short: 'Visit shelter or foster home',
      icon: Heart,
      color: 'text-[#E76F51]',
      bg: 'bg-[#E76F51]/10',
      description:
        'Schedule a calm, one-on-one session at our shelter or cozy foster lounge. Bring family members and existing pets to test mutual affection.',
    },
    {
      step: 3,
      title: 'Simple Application',
      short: 'Submit quick online form',
      icon: FileCheck,
      color: 'text-[#F59E0B]',
      bg: 'bg-[#F59E0B]/15',
      description:
        'Fill out our transparent, non-intrusive adoption form to share information about your home routine, landlord permission (if renting), and care plans.',
    },
    {
      step: 4,
      title: 'Friendly Home Visit',
      short: 'Virtual or in-person walk-through',
      icon: Home,
      color: 'text-[#10B981]',
      bg: 'bg-[#10B981]/15',
      description:
        'A quick, friendly consultation to ensure your living space is safely prepared (fencing checks, safe toxic-plant removal, and cozy bedding setup).',
    },
    {
      step: 5,
      title: 'Forever Family',
      short: 'Welcome home & ongoing support',
      icon: Smile,
      color: 'text-[#2E7D4E]',
      bg: 'bg-[#2E7D4E]/10',
      description:
        'Finalize microchip registration and adoption papers, receive your starter kit, and take your new best friend home with full 24/7 post-adoption support!',
    },
  ];

  return (
    <section id="journey" className="py-24 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            🏡 Adoption Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            Your Seamless Adoption Journey
          </h2>
          <p className="text-base text-[#6B7280]">
            From your initial search to the moment they curl up on your rug, we make adoption smooth, joyful, and transparent.
          </p>
        </div>

        {/* Desktop Connected Cards Row with Curved Line */}
        <div className="relative mb-12 hidden lg:block">
          
          {/* Curved SVG Line in Background */}
          <svg className="absolute top-1/2 left-10 right-10 -translate-y-1/2 w-[90%] h-8 text-[#E7E5E4] z-0 pointer-events-none" fill="none">
            <path
              d="M 10 16 Q 250 30 500 16 T 1000 16"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`bg-white rounded-3xl p-6 border text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E] ${
                    isSelected
                      ? 'border-[#2E7D4E] shadow-lg scale-105 ring-2 ring-[#2E7D4E]/20'
                      : 'border-[#E7E5E4] hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-bold text-base`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#2F3437] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] line-clamp-2">
                    {item.short}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Stacked Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mb-8">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`bg-white rounded-2xl p-5 border text-left transition-all ${
                  isSelected ? 'border-[#2E7D4E] shadow-md ring-1 ring-[#2E7D4E]' : 'border-[#E7E5E4]'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#E76F51] uppercase tracking-wider block">
                      Step {item.step}
                    </span>
                    <h3 className="text-sm font-semibold text-[#2F3437]">{item.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-[#6B7280]">{item.description}</p>
              </button>
            );
          })}
        </div>

        {/* Active Step Highlight Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E4] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-2xl ${steps[activeStep].bg} ${steps[activeStep].color} flex items-center justify-center shrink-0`}>
              <span className="text-lg font-bold">{steps[activeStep].step}</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#2F3437] mb-1">
                Step {steps[activeStep].step}: {steps[activeStep].title}
              </h4>
              <p className="text-sm text-[#6B7280] max-w-2xl leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="px-5 py-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#2E7D4E]/10 text-[#2E7D4E] font-medium text-xs flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Next Step</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
