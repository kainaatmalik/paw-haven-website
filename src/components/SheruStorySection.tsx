import React from 'react';
import { PawPrint, Heart, Sparkles, Award, ArrowRight, Gift, Cookie, Tag } from 'lucide-react';
import sheruImage from '../assets/images/sheru_photo_exact_1785363490622.jpg';

interface SheruStorySectionProps {
  onExplorePets?: () => void;
}

export const SheruStorySection: React.FC<SheruStorySectionProps> = ({ onExplorePets }) => {
  return (
    <section id="sheru-story" className="py-24 bg-[#FFF9F2] relative overflow-hidden border-y border-[#E7E5E4]/70">
      {/* Decorative background paw prints / accents */}
      <div className="absolute top-10 left-8 opacity-10 pointer-events-none text-[#2E7D4E]">
        <PawPrint className="w-28 h-28 -rotate-12" />
      </div>
      <div className="absolute bottom-10 right-8 opacity-10 pointer-events-none text-[#E76F51]">
        <PawPrint className="w-36 h-36 rotate-12" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            🐱 Rescue Story
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3437] tracking-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Every Rescue Has a Story
          </h2>
          
          {/* Paw print divider accent */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#E7E5E4]" />
            <PawPrint className="w-5 h-5 text-[#E76F51]" />
            <div className="h-px w-12 bg-[#E7E5E4]" />
          </div>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed font-normal">
            Before helping hundreds of rescue animals find loving homes, I'd like to introduce the one who inspired Paw Haven.
          </p>
        </div>

        {/* Premium Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Featured Image of Sheru */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] group">
              
              {/* Decorative Frame Glow & Accent */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#E76F51]/20 via-[#F59E0B]/20 to-[#2E7D4E]/20 rounded-[36px] blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo Container */}
              <div className="relative rounded-[32px] overflow-hidden bg-white shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src={sheruImage}
                  alt="Sheru, the rescue orange tabby cat who inspired Paw Haven"
                  className="w-full h-auto object-cover rounded-[28px] max-h-[540px] w-full"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#E7E5E4]">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-xs font-bold text-[#2F3437]">The Original Inspiration</span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Sheru</h3>
                      <p className="text-xs opacity-90 font-medium">Founder's Companion • Rescued 2021</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E76F51] text-white text-[11px] font-bold tracking-wide shadow-xs">
                      Forever Loved ❤️
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Chip */}
              <div className="absolute -bottom-4 -right-2 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#E7E5E4] flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-[#2E7D4E]/15 text-[#2E7D4E] flex items-center justify-center font-bold">
                  🐾
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3437]">1,000+ Pets Inspired</div>
                  <div className="text-[10px] text-[#6B7280]">By Sheru's Journey</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Text, Profile Card & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Story Heading */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2F3437] mb-6 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span>Meet Sheru</span>
              <span className="text-sm font-semibold text-[#E76F51] bg-[#E76F51]/10 px-3 py-1 rounded-full border border-[#E76F51]/20">
                Our Mascot
              </span>
            </h3>

            {/* Heartfelt First-Person Narrative */}
            <div className="space-y-4 text-base text-[#4B5563] leading-relaxed font-normal mb-8">
              <p className="font-medium text-[#2F3437]">
                Before helping hundreds of rescue animals find loving homes, I'd like to introduce someone very special to me.
              </p>
              
              <p>
                Sheru was rescued as a tiny kitten—frightened, hungry and completely alone. Despite his difficult start, he never stopped trusting people. With patience, love and a safe home, he grew into the affectionate, playful orange cat who completely changed my life.
              </p>

              <p>
                Watching Sheru transform from a frightened rescue into a confident, happy companion reminded me that rescue animals are not broken—they simply need someone willing to give them a chance.
              </p>

              <p className="text-[#2F3437] font-medium italic border-l-4 border-[#2E7D4E] pl-4 py-1 bg-[#2E7D4E]/5 rounded-r-xl">
                His journey inspired Paw Haven and represents the hope that every rescue deserves the opportunity to find a family that will love them forever.
              </p>
            </div>

            {/* Profile Card */}
            <div className="w-full bg-white rounded-3xl p-6 border border-[#E7E5E4] shadow-md mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F59E0B]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E5E4]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E76F51]/15 text-[#E76F51] flex items-center justify-center font-bold">
                    <PawPrint className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2F3437]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Sheru's Rescue Profile
                    </h4>
                    <span className="text-xs text-[#6B7280]">Official Paw Haven Mascot</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-xs font-bold border border-[#10B981]/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>Forever Home Found ❤️</span>
                </span>
              </div>

              {/* Profile Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                {/* Name */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4]">
                  <Tag className="w-4 h-4 text-[#2E7D4E]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Name</span>
                    <span className="font-semibold text-[#2F3437] text-sm">Sheru</span>
                  </div>
                </div>

                {/* Breed */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4]">
                  <PawPrint className="w-4 h-4 text-[#E76F51]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Breed</span>
                    <span className="font-semibold text-[#2F3437] text-sm">Domestic Shorthair (Orange Tabby)</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4]">
                  <Award className="w-4 h-4 text-[#F59E0B]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Status</span>
                    <span className="font-semibold text-[#2F3437] text-sm">Rescue Success Story</span>
                  </div>
                </div>

                {/* Favourite Toy */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4]">
                  <Gift className="w-4 h-4 text-[#E76F51]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Favourite Toy</span>
                    <span className="font-semibold text-[#2F3437] text-sm">Feather Wand</span>
                  </div>
                </div>

                {/* Favourite Treat */}
                <div className="sm:col-span-2 flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4]">
                  <Cookie className="w-4 h-4 text-[#F59E0B]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Favourite Treat</span>
                    <span className="font-semibold text-[#2F3437] text-sm">Churu Creamy Treats</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={onExplorePets}
              className="px-8 py-4 rounded-2xl bg-[#2E7D4E] text-white font-bold text-base shadow-lg shadow-[#2E7D4E]/25 hover:bg-[#1F6B3E] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Meet More Rescue Pets</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
