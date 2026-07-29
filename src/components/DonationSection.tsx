import React, { useState } from 'react';
import { Heart, Sparkles, Check, Gift, ShieldCheck } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly');
  const [selectedTier, setSelectedTier] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donated, setDonated] = useState(false);

  const donationTiers = [
    {
      amount: 25,
      title: 'Nutritional Food',
      desc: 'Provides high-nutrition kibble & fresh treats for 2 rescue pets for 1 month.',
      tag: 'Most Popular',
    },
    {
      amount: 50,
      title: 'Medical Care',
      desc: 'Covers vaccinations, microchip, flea preventative, and wellness checks.',
      tag: 'High Impact',
    },
    {
      amount: 100,
      title: 'Shelter Support',
      desc: 'Funds warm orthopedic beds, heating/cooling, and emergency surgery fund.',
      tag: 'Champion Sponsor',
    },
  ];

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonated(true);
  };

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;

  return (
    <section id="donate" className="py-24 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[32px] border border-[#E7E5E4] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Side Illustration / Image */}
          <div className="lg:col-span-5 relative bg-[#2E7D4E] p-8 sm:p-12 text-white flex flex-col justify-between min-h-[400px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80')" }} />
            
            <div className="relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white inline-block mb-4">
                100% Tax Deductible
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4">
                Every Dollar Sustains a Second Chance
              </h2>
              <p className="text-sm text-white/90 leading-relaxed mb-6">
                Paw Haven relies on generous community donations to fund emergency life-saving surgeries, specialized puppy formulas, and shelter repairs.
              </p>
            </div>

            <div className="relative z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />
                <div className="text-xs">
                  <div className="font-semibold">Financial Integrity</div>
                  <div className="text-white/80">94 cents of every dollar directly funds animal care.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Donation Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            {donated ? (
              <div className="py-12 text-center my-auto animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2F3437] mb-2">
                  Thank You for Your Generosity!
                </h3>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto mb-6 leading-relaxed">
                  Your <strong>${activeAmount} {frequency}</strong> donation has been received. A tax receipt has been emailed to your account. You are a hero to our animals!
                </p>
                <button
                  onClick={() => setDonated(false)}
                  className="px-6 py-2.5 rounded-2xl bg-[#2E7D4E] text-white font-medium text-xs hover:bg-[#1F6B3E]"
                >
                  Make Another Donation
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-6">
                
                {/* Frequency Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#2F3437]">Choose Gift Frequency</span>
                  <div className="bg-[#FAF8F4] p-1 rounded-2xl border border-[#E7E5E4] flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        frequency === 'monthly'
                          ? 'bg-[#2E7D4E] text-white shadow-xs'
                          : 'text-[#6B7280] hover:text-[#2F3437]'
                      }`}
                    >
                      Monthly Impact
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        frequency === 'one-time'
                          ? 'bg-[#2E7D4E] text-white shadow-xs'
                          : 'text-[#6B7280] hover:text-[#2F3437]'
                      }`}
                    >
                      One-Time
                    </button>
                  </div>
                </div>

                {/* Tiers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {donationTiers.map((tier) => {
                    const isSelected = selectedTier === tier.amount && !customAmount;
                    return (
                      <button
                        type="button"
                        key={tier.amount}
                        onClick={() => {
                          setSelectedTier(tier.amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'border-[#2E7D4E] bg-[#2E7D4E]/10 ring-2 ring-[#2E7D4E]/20'
                            : 'border-[#E7E5E4] bg-[#FAF8F4] hover:bg-white'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#E76F51] block mb-1">
                          {tier.tag}
                        </span>
                        <div className="text-xl font-bold text-[#2F3437] mb-1">
                          ${tier.amount}
                        </div>
                        <h4 className="text-xs font-semibold text-[#2F3437] mb-1">{tier.title}</h4>
                        <p className="text-[11px] text-[#6B7280] leading-tight">{tier.desc}</p>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">
                    Or Enter Custom Amount ($)
                  </label>
                  <input
                    type="number"
                    min="5"
                    placeholder="Enter custom dollar amount..."
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F4] border border-[#E7E5E4] text-sm text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#2E7D4E] text-white font-semibold text-base shadow-md shadow-[#2E7D4E]/20 hover:bg-[#1F6B3E] transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span>Donate ${activeAmount} {frequency === 'monthly' ? '/ Month' : 'Now'}</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
