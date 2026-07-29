import React from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Award, Smile } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onHowItWorksClick,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Organic Shapes */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#2E7D4E]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-[#E76F51]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#F59E0B]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-6 border border-[#F59E0B]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>★ Pet of the Week: Milo • Vet Approved</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F3437] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Helping every paw <br className="hidden sm:inline" />
              <span className="text-[#2E7D4E]">find a forever</span> home.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-md font-normal">
              Every rescue deserves a second chance, and every family deserves a loyal companion. Discover loving dogs and cats waiting to find a forever home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreClick}
                className="px-8 py-4 rounded-2xl bg-[#2E7D4E] text-white font-bold text-base shadow-lg shadow-[#2E7D4E]/20 hover:bg-[#1F6B3E] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Meet Your New Best Friend</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onHowItWorksClick}
                className="px-8 py-4 rounded-2xl font-bold text-base border border-[#E7E5E4] bg-white text-[#2F3437] transition-colors hover:bg-[#FAF8F4] flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>How Adoption Works</span>
              </button>
            </div>

            {/* Trust Bar Built into Hero */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-[#E7E5E4] w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block">Process</span>
                  <span className="text-sm font-semibold text-[#2F3437]">Vet Approved</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#E7E5E4]" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E76F51]/15 text-[#E76F51] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E76F51] uppercase tracking-wider block">Support</span>
                  <span className="text-sm font-semibold text-[#2F3437]">Lifetime Care</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#E7E5E4]" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#2E7D4E]/15 text-[#2E7D4E] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2E7D4E] uppercase tracking-wider block">Status</span>
                  <span className="text-sm font-semibold text-[#2F3437]">Fully Vaccinated</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Organic SVG & Image Collage */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            {/* Organic Background Shape SVG */}
            <div className="absolute w-[120%] h-[120%] opacity-20 -z-10 translate-x-6 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2E7D4E" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.2,-0.5C85.3,14.6,80.1,29.3,72.4,43.2C64.7,57.1,54.5,70.3,41,77.5C27.5,84.7,10.7,85.9,-5.3,82.8C-21.3,79.7,-36.5,72.4,-50,62.2C-63.5,52,-75.3,38.9,-81.4,23.8C-87.5,8.7,-87.9,-8.5,-82.9,-24.1C-77.9,-39.7,-67.5,-53.7,-54.1,-60.9C-40.7,-68.1,-24.3,-68.5,-8.4,-73.6C7.5,-78.7,24.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="relative w-full max-w-[500px] h-[460px] sm:h-[500px]">
              
              {/* Main Hero Pet Card (Milo) */}
              <div className="absolute top-0 right-0 w-[82%] h-[90%] rounded-[32px] overflow-hidden shadow-2xl bg-[#E7E5E4] border-8 border-white transition-transform duration-500 hover:scale-[1.01]">
                <div
                  className="w-full h-full bg-cover bg-center flex flex-col justify-end p-6 sm:p-8 text-white relative"
                  style={{
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%), url('https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800')",
                  }}
                >
                  <div className="flex justify-between items-end relative z-10">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Milo</h3>
                      <p className="opacity-90 text-xs sm:text-sm font-medium">Golden Retriever • 2 Years</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-semibold text-white border border-white/30">
                      Adoptable
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card 1 - Success Rate */}
              <div className="absolute -bottom-2 left-0 sm:left-2 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-[#E7E5E4] z-20 animate-bounce-subtle">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#E76F51] text-white shadow-sm">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2F3437]" style={{ fontFamily: 'Poppins, sans-serif' }}>98%</div>
                  <div className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">Success Rate</div>
                </div>
              </div>
              
              {/* Floating Stat Card 2 - Happy Tails */}
              <div className="absolute top-8 -left-4 sm:-left-8 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-[#E7E5E4] rotate-3 z-20">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#F59E0B] text-white shadow-sm">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2F3437]" style={{ fontFamily: 'Poppins, sans-serif' }}>250+</div>
                  <div className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">Happy Tails</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
