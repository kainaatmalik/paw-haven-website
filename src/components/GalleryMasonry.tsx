import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/content';
import { GalleryImage } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryMasonry: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'dog', label: 'Dogs' },
    { id: 'cat', label: 'Cats' },
    { id: 'rabbit', label: 'Rabbits' },
    { id: 'bird', label: 'Birds' },
    { id: 'shelter', label: 'Shelter Life' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIdx(index);
  };

  const nextImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F4] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            📸 Happy Tails Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
            Happy Tails Gallery
          </h2>
          <p className="text-base text-[#6B7280]">
            Every wagging tail, gentle purr and joyful reunion tells the story of a second chance. Explore some of the beautiful moments shared by our rescue animals and their forever families.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#2E7D4E] text-white shadow-xs'
                  : 'bg-white border border-[#E7E5E4] text-[#2F3437] hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden bg-white border border-[#E7E5E4] shadow-xs group cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-semibold">{img.title}</h4>
                  <Maximize2 className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <p className="text-xs text-white/80 line-clamp-2">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && filteredImages[lightboxIdx] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredImages[lightboxIdx].url}
              alt={filteredImages[lightboxIdx].title}
              className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold mb-1">{filteredImages[lightboxIdx].title}</h3>
              <p className="text-sm text-white/80 max-w-lg">{filteredImages[lightboxIdx].caption}</p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};
