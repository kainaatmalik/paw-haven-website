import React from 'react';
import { FilterState, PetType, PetAge, PetSize, PetGender, EnergyLevel } from '../types';
import { Search, Filter, X, Check, Dog, Cat, Bird } from 'lucide-react';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResults: number;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults,
}) => {
  const animalTypes: { id: 'all' | PetType; label: string; icon?: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Pets' },
    { id: 'dog', label: 'Dogs', icon: Dog },
    { id: 'cat', label: 'Cats', icon: Cat },
    { id: 'rabbit', label: 'Rabbits' },
    { id: 'bird', label: 'Birds', icon: Bird },
  ];

  const ageGroups: { id: 'all' | PetAge; label: string }[] = [
    { id: 'all', label: 'All Ages' },
    { id: 'puppy_kitten', label: 'Baby / Kitten (<1 yr)' },
    { id: 'young', label: 'Young (1-3 yrs)' },
    { id: 'adult', label: 'Adult (3-7 yrs)' },
    { id: 'senior', label: 'Senior (7+ yrs)' },
  ];

  const sizes: { id: 'all' | PetSize; label: string }[] = [
    { id: 'all', label: 'All Sizes' },
    { id: 'small', label: 'Small (< 20 lbs)' },
    { id: 'medium', label: 'Medium (20-50 lbs)' },
    { id: 'large', label: 'Large (50+ lbs)' },
  ];

  const genders: { id: 'all' | PetGender; label: string }[] = [
    { id: 'all', label: 'Any Gender' },
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
  ];

  const energyLevels: { id: 'all' | EnergyLevel; label: string }[] = [
    { id: 'all', label: 'Any Energy' },
    { id: 'low', label: 'Low / Calm' },
    { id: 'moderate', label: 'Moderate' },
    { id: 'high', label: 'High / Active' },
  ];

  const locations = [
    'All Locations',
    'Downtown Haven',
    'Eastside Shelter',
    'Foster Network',
  ];

  // Count active filters
  const activeCount =
    (filters.searchQuery ? 1 : 0) +
    (filters.type !== 'all' ? 1 : 0) +
    (filters.ageGroup !== 'all' ? 1 : 0) +
    (filters.size !== 'all' ? 1 : 0) +
    (filters.gender !== 'all' ? 1 : 0) +
    (filters.energyLevel !== 'all' ? 1 : 0) +
    (filters.goodWithKidsOnly ? 1 : 0) +
    (filters.goodWithPetsOnly ? 1 : 0) +
    (filters.location !== 'All Locations' ? 1 : 0);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E4] shadow-sm mb-12">
      
      {/* Search Input Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6">
        
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search by name, breed, or keyword (e.g. Golden, Tabby, Milo)..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FAF8F4] border border-[#E7E5E4] text-[#2F3437] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E] focus:bg-white text-sm transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#2F3437]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Location Dropdown */}
        <div className="w-full md:w-56">
          <select
            value={filters.location}
            onChange={(e) => onFilterChange({ location: e.target.value })}
            className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8F4] border border-[#E7E5E4] text-[#2F3437] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D4E] focus:bg-white transition-all cursor-pointer"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Type Selector Tabs / Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-[#E7E5E4]">
        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mr-2">
          Pet Type:
        </span>
        {animalTypes.map((typeObj) => {
          const isActive = filters.type === typeObj.id;
          const IconComp = typeObj.icon;
          return (
            <button
              key={typeObj.id}
              onClick={() => onFilterChange({ type: typeObj.id })}
              className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E] ${
                isActive
                  ? 'bg-[#2E7D4E] text-white shadow-xs'
                  : 'bg-[#FAF8F4] text-[#2F3437] border border-[#E7E5E4] hover:bg-[#2E7D4E]/10 hover:border-[#2E7D4E]/30'
              }`}
            >
              {IconComp && <IconComp className="w-3.5 h-3.5" />}
              <span>{typeObj.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dropdown Filters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
        
        {/* Age Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6B7280] mb-1">Age</label>
          <select
            value={filters.ageGroup}
            onChange={(e) => onFilterChange({ ageGroup: e.target.value as 'all' | PetAge })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs font-medium text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
          >
            {ageGroups.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        {/* Size Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6B7280] mb-1">Size</label>
          <select
            value={filters.size}
            onChange={(e) => onFilterChange({ size: e.target.value as 'all' | PetSize })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs font-medium text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
          >
            {sizes.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6B7280] mb-1">Gender</label>
          <select
            value={filters.gender}
            onChange={(e) => onFilterChange({ gender: e.target.value as 'all' | PetGender })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs font-medium text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
          >
            {genders.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </div>

        {/* Energy Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6B7280] mb-1">Energy Level</label>
          <select
            value={filters.energyLevel}
            onChange={(e) => onFilterChange({ energyLevel: e.target.value as 'all' | EnergyLevel })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs font-medium text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
          >
            {energyLevels.map((en) => (
              <option key={en.id} value={en.id}>
                {en.label}
              </option>
            ))}
          </select>
        </div>

        {/* Toggle Badges for Compatibility */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-end gap-2">
          <button
            onClick={() => onFilterChange({ goodWithKidsOnly: !filters.goodWithKidsOnly })}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1 transition-all ${
              filters.goodWithKidsOnly
                ? 'bg-[#10B981]/20 border-[#10B981] text-[#2F3437]'
                : 'bg-[#FAF8F4] border-[#E7E5E4] text-[#6B7280]'
            }`}
          >
            {filters.goodWithKidsOnly && <Check className="w-3.5 h-3.5 text-[#2E7D4E]" />}
            <span>Kids Friendly</span>
          </button>

          <button
            onClick={() => onFilterChange({ goodWithPetsOnly: !filters.goodWithPetsOnly })}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1 transition-all ${
              filters.goodWithPetsOnly
                ? 'bg-[#10B981]/20 border-[#10B981] text-[#2F3437]'
                : 'bg-[#FAF8F4] border-[#E7E5E4] text-[#6B7280]'
            }`}
          >
            {filters.goodWithPetsOnly && <Check className="w-3.5 h-3.5 text-[#2E7D4E]" />}
            <span>Pets Friendly</span>
          </button>
        </div>

      </div>

      {/* Filter Summary & Reset Action Bar */}
      <div className="flex items-center justify-between text-xs text-[#6B7280] pt-2">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#2E7D4E]" />
          <span>
            Showing <strong className="text-[#2F3437]">{totalResults}</strong> companions
          </span>
          {activeCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-[#E76F51]/15 text-[#E76F51] font-semibold">
              {activeCount} active filter{activeCount > 1 ? 's' : ''}
            </span>
          )}
        </div>

        {activeCount > 0 && (
          <button
            onClick={onResetFilters}
            className="text-[#E76F51] font-medium hover:underline flex items-center gap-1 focus:outline-none"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

    </div>
  );
};
