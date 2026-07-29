import React, { useState, useMemo, useEffect } from 'react';
import { Pet, FilterState } from './types';
import { PETS_DATA } from './data/pets';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { PetSpotlight } from './components/PetSpotlight';
import { SearchFilters } from './components/SearchFilters';
import { PetGrid } from './components/PetGrid';
import { PetModal } from './components/PetModal';
import { AdoptionTipCard } from './components/AdoptionTipCard';
import { WhyAdopt } from './components/WhyAdopt';
import { AdoptionJourney } from './components/AdoptionJourney';
import { SheruStorySection } from './components/SheruStorySection';
import { HappyTails } from './components/HappyTails';
import { EventsSection } from './components/EventsSection';
import { TeamSection } from './components/TeamSection';
import { DonationSection } from './components/DonationSection';
import { VolunteerSection } from './components/VolunteerSection';
import { GalleryMasonry } from './components/GalleryMasonry';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FarewellSection } from './components/FarewellSection';
import { Footer } from './components/Footer';
import { RecentlyAdoptedToast } from './components/RecentlyAdoptedToast';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { BackToTop } from './components/BackToTop';
import { BrandDivider } from './components/BrandDivider';

const initialFilterState: FilterState = {
  searchQuery: '',
  type: 'all',
  ageGroup: 'all',
  size: 'all',
  gender: 'all',
  energyLevel: 'all',
  goodWithKidsOnly: false,
  goodWithPetsOnly: false,
  location: 'All Locations',
};

export default function App() {
  // Favorites persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('paw_haven_favorites');
      return saved ? JSON.parse(saved) : ['milo-golden'];
    } catch {
      return ['milo-golden'];
    }
  });

  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('paw_haven_favorites', JSON.stringify(favorites));
    } catch {
      // Ignore
    }
  }, [favorites]);

  const toggleFavorite = (petId: string) => {
    setFavorites((prev) =>
      prev.includes(petId) ? prev.filter((id) => id !== petId) : [...prev, petId]
    );
  };

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters(initialFilterState);
  };

  const scrollToAdopt = () => {
    const el = document.getElementById('adopt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter Algorithm
  const filteredPets = useMemo(() => {
    return PETS_DATA.filter((pet) => {
      // Type
      if (filters.type !== 'all' && pet.type !== filters.type) return false;

      // Age Group
      if (filters.ageGroup !== 'all' && pet.ageGroup !== filters.ageGroup) return false;

      // Size
      if (filters.size !== 'all' && pet.size !== filters.size) return false;

      // Gender
      if (filters.gender !== 'all' && pet.gender !== filters.gender) return false;

      // Energy
      if (filters.energyLevel !== 'all' && pet.energyLevel !== filters.energyLevel) return false;

      // Kids & Pets
      if (filters.goodWithKidsOnly && !pet.goodWithKids) return false;
      if (filters.goodWithPetsOnly && !pet.goodWithPets) return false;

      // Location
      if (filters.location !== 'All Locations' && pet.location !== filters.location) return false;

      // Search Query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = pet.name.toLowerCase().includes(query);
        const matchesBreed = pet.breed.toLowerCase().includes(query);
        const matchesDesc = pet.description.toLowerCase().includes(query);
        const matchesTags = pet.temperamentTags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesBreed && !matchesDesc && !matchesTags) return false;
      }

      return true;
    });
  }, [filters]);

  const spotlightPet = useMemo(() => {
    return PETS_DATA.find((p) => p.isSpotlight) || PETS_DATA[0];
  }, []);

  const favoritePetsList = useMemo(() => {
    return PETS_DATA.filter((p) => favorites.includes(p.id));
  }, [favorites]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#2F3437] font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar
        favoriteCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onNavigateToAdopt={scrollToAdopt}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={scrollToAdopt}
          onHowItWorksClick={scrollToJourney}
        />

        {/* Trust Bar */}
        <TrustBar />

        {/* Pet of the Week Spotlight */}
        <PetSpotlight
          spotlightPet={spotlightPet}
          onSelectPet={setSelectedPet}
          isFavorite={favorites.includes(spotlightPet.id)}
          onToggleFavorite={toggleFavorite}
        />

        <BrandDivider className="max-w-4xl mx-auto px-4" />

        {/* Featured Adoptable Pets & Filter System Section */}
        <section id="adopt" className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-wide text-[#2E7D4E] bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
              🐾 Featured Pets
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3437] tracking-tight mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-base text-[#6B7280]">
              Every animal is vaccinated, microchipped, veterinarian-certified, and ready for a loving home.
            </p>
          </div>

          {/* Filters Bar */}
          <SearchFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            totalResults={filteredPets.length}
          />

          {/* Pets Grid */}
          <PetGrid
            pets={filteredPets}
            onSelectPet={setSelectedPet}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onResetFilters={handleResetFilters}
          />

          {/* Today's Adoption Tip Card */}
          <AdoptionTipCard />
        </section>

        {/* Why Adopt Section */}
        <WhyAdopt />

        <BrandDivider className="max-w-4xl mx-auto px-4" />

        {/* Adoption Journey (How It Works) */}
        <AdoptionJourney />

        {/* Every Rescue Has a Story - Sheru's Story */}
        <SheruStorySection onExplorePets={scrollToAdopt} />

        {/* Happy Tails (Testimonials) */}
        <HappyTails />

        <BrandDivider className="max-w-4xl mx-auto px-4" />

        {/* Upcoming Adoption Events */}
        <EventsSection />

        {/* Meet the Team */}
        <TeamSection />

        {/* Donation Section */}
        <DonationSection />

        {/* Volunteer Section */}
        <VolunteerSection />

        {/* Gallery Masonry */}
        <GalleryMasonry />

        <BrandDivider className="max-w-4xl mx-auto px-4" />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact & Interactive Location Map */}
        <ContactSection pets={PETS_DATA} />

        {/* Heartfelt Farewell Closing Section */}
        <FarewellSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pet Profile Modal */}
      <PetModal
        pet={selectedPet}
        onClose={() => setSelectedPet(null)}
        isFavorite={selectedPet ? favorites.includes(selectedPet.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Favorites Saved Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoritePetsList}
        onSelectPet={(pet) => {
          setIsFavoritesOpen(false);
          setSelectedPet(pet);
        }}
        onRemoveFavorite={toggleFavorite}
      />

      {/* Non-intrusive Recently Adopted Notification Toast */}
      <RecentlyAdoptedToast />

      {/* Back to Top Floating Button */}
      <BackToTop />
    </div>
  );
}
