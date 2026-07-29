import React from 'react';
import { TEAM_MEMBERS } from '../data/content';
import { Heart, Smile } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-[#E7E5E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            👥 Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            The People Behind Every Happy Tail
          </h2>
          <p className="text-base text-[#6B7280]">
            Our passionate team is dedicated to giving every rescue animal the care, compassion and second chance they deserve.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF8F4] rounded-[24px] border border-[#E7E5E4] p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-md">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-base font-semibold text-[#2F3437] mb-0.5">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-[#E76F51] block mb-3">
                  {member.role}
                </span>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Memory Callout */}
              <div className="pt-3 border-t border-[#E7E5E4] bg-white rounded-xl p-3 text-[11px] text-[#2F3437] italic text-left">
                <span className="font-semibold text-[#2E7D4E] not-italic block mb-0.5">Favorite Memory:</span>
                "{member.favoriteAnimalMemory}"
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
