import React, { useState } from 'react';
import { ADOPTION_STORIES } from '../data/content';
import { Heart, Quote, MapPin, Sparkles } from 'lucide-react';

export const HappyTails: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState<Record<string, boolean>>({});

  const toggleBeforeAfter = (storyId: string) => {
    setShowBeforeAfter((prev) => ({ ...prev, [storyId]: !prev[storyId] }));
  };

  return (
    <section id="stories" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            ❤️ Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            Happy Tails & Heartwarming Updates
          </h2>
          <p className="text-base text-[#6B7280]">
            Read real adoption stories from families in Central Texas who found their missing piece through Paw Haven.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADOPTION_STORIES.map((story) => {
            const isShowingBefore = showBeforeAfter[story.id];
            const displayImg = isShowingBefore && story.beforeImageUrl ? story.beforeImageUrl : story.petImageUrl;

            return (
              <div
                key={story.id}
                className="bg-[#FAF8F4] rounded-[28px] border border-[#E7E5E4] p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 relative group"
              >
                {/* Speech Bubble Tail SVG Accent */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#FAF8F4] border-b border-r border-[#E7E5E4] transform rotate-45 pointer-events-none hidden sm:block" />

                <div>
                  {/* Pet Photo & Owner Avatar */}
                  <div className="relative mb-6">
                    <div className="h-56 rounded-2xl overflow-hidden border border-[#E7E5E4]">
                      <img
                        src={displayImg}
                        alt={story.petName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Owner Avatar Overlap */}
                    <div className="absolute -bottom-4 right-4 w-14 h-14 rounded-full border-4 border-[#FAF8F4] overflow-hidden shadow-md">
                      <img
                        src={story.ownerImageUrl}
                        alt={story.ownerName}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Before/After Toggle Pill if available */}
                    {story.beforeImageUrl && (
                      <button
                        onClick={() => toggleBeforeAfter(story.id)}
                        className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold hover:bg-black/80 transition-colors"
                      >
                        {isShowingBefore ? 'Showing Rescue Day 1' : 'Click for Day 1 Photo'}
                      </button>
                    )}
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-[#E76F51]/40 mb-2" />

                  {/* Review Quote */}
                  <p className="text-sm text-[#2F3437] leading-relaxed italic mb-6">
                    "{story.review}"
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#2F3437]">
                      {story.petName} & {story.ownerName}
                    </h4>
                    <span className="text-xs text-[#6B7280]">
                      Adopted in {story.location} ({story.adoptionDate})
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#2E7D4E]/15 text-[#2E7D4E] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 fill-current" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
