import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const FarewellSection: React.FC = () => {
  return (
    <section className="bg-[#FAF8F4] border-t border-[#E7E5E4]/60 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Coral Heart Accent */}
        <div className="w-10 h-10 rounded-full bg-[#E76F51]/10 border border-[#E76F51]/20 flex items-center justify-center text-[#E76F51] mb-5 shadow-xs">
          <Heart className="w-5 h-5 fill-current" />
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2F3437] tracking-tight mb-4">
          Every adoption begins with hope.
        </h2>

        {/* Supporting Text */}
        <p className="text-base text-[#6B7280] leading-relaxed max-w-xl mx-auto mb-6 font-normal">
          Thank you for believing that every paw deserves a forever home. Whether you&apos;re ready to adopt, volunteer or simply spread awareness, every act of kindness helps create another happy ending.
        </p>

        {/* Italic Farewell Line */}
        <p className="text-sm sm:text-base italic font-serif text-[#2E7D4E] tracking-wide opacity-90">
          &ldquo;Because every rescued paw deserves a place to call home.&rdquo;
        </p>
      </motion.div>
    </section>
  );
};
