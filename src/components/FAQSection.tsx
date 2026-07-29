import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'adoption', label: 'Adoption Process' },
    { id: 'care', label: 'Post-Adoption Care' },
    { id: 'donation', label: 'Donations & Fees' },
    { id: 'general', label: 'General Info' },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-t border-[#E7E5E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            ❓ Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#6B7280]">
            Everything you need to know about adoption requirements, health checks, fees, and home transitions.
          </p>
        </div>

        {/* Search & Category Bar */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search questions (e.g. fees, apartment, timeline, vaccine)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FAF8F4] border border-[#E7E5E4] text-sm text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-[#2E7D4E] text-white shadow-xs'
                    : 'bg-[#FAF8F4] border border-[#E7E5E4] text-[#2F3437] hover:bg-gray-100'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-[#FAF8F4] rounded-2xl text-xs text-[#6B7280]">
              No questions matched your search query. Try searching for "adoption" or "vaccine".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FAF8F4] rounded-2xl border border-[#E7E5E4] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E]"
                  >
                    <span className="text-base font-semibold text-[#2F3437]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E7E5E4] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#2E7D4E] text-white border-[#2E7D4E]' : 'text-[#6B7280]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-[#6B7280] leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
