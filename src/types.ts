export type PetType = 'dog' | 'cat' | 'rabbit' | 'bird';
export type PetAge = 'puppy_kitten' | 'young' | 'adult' | 'senior';
export type PetSize = 'small' | 'medium' | 'large';
export type PetGender = 'male' | 'female';
export type EnergyLevel = 'low' | 'moderate' | 'high';

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed: string;
  age: string; // e.g. "2 years", "6 months"
  ageGroup: PetAge;
  gender: PetGender;
  size: PetSize;
  energyLevel: EnergyLevel;
  goodWithKids: boolean;
  goodWithPets: boolean;
  location: string; // e.g., "Downtown Haven", "Eastside Shelter", "Foster Network"
  imageUrl: string;
  additionalImages?: string[];
  description: string;
  personality: string;
  favouriteToy: string;
  favouriteFood: string;
  temperamentTags: string[];
  vaccinated: boolean;
  microchipped: boolean;
  spayedNeutered: boolean;
  medicalNotes?: string;
  isSpotlight?: boolean;
  storyHeading?: string;
  dateAdded: string;
}

export interface FilterState {
  searchQuery: string;
  type: 'all' | PetType;
  ageGroup: 'all' | PetAge;
  size: 'all' | PetSize;
  gender: 'all' | PetGender;
  energyLevel: 'all' | EnergyLevel;
  goodWithKidsOnly: boolean;
  goodWithPetsOnly: boolean;
  location: string;
}

export interface AdoptionStory {
  id: string;
  petName: string;
  ownerName: string;
  petType: PetType;
  petImageUrl: string;
  beforeImageUrl?: string;
  ownerImageUrl: string;
  review: string;
  location: string;
  adoptionDate: string;
}

export interface AdoptionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  favoriteAnimalMemory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'adoption' | 'care' | 'donation' | 'general';
}

export interface AdoptionTip {
  id: string;
  title: string;
  tip: string;
  category: string;
  iconName: string;
}

export interface RecentlyAdoptedItem {
  id: string;
  petName: string;
  breed: string;
  location: string;
  timeAgo: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'dog' | 'cat' | 'rabbit' | 'bird' | 'shelter';
  url: string;
  caption: string;
}
