import {
  AdoptionStory,
  AdoptionEvent,
  TeamMember,
  FAQItem,
  AdoptionTip,
  RecentlyAdoptedItem,
  GalleryImage
} from '../types';

export const ADOPTION_STORIES: AdoptionStory[] = [
  {
    id: 'story-1',
    petName: 'Buster',
    ownerName: 'Sarah & Marcus Vance',
    petType: 'dog',
    petImageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    beforeImageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80',
    ownerImageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    review: 'Adopting Buster through Paw Haven was the smoothest and most compassionate experience. He completes our home and brings endless joy every morning!',
    location: 'Austin, TX',
    adoptionDate: 'March 2026'
  },
  {
    id: 'story-2',
    petName: 'Cleo & Pip',
    ownerName: 'Elena Rostova',
    petType: 'cat',
    petImageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80',
    ownerImageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    review: 'I adopted a bonded pair of shelter cats. Paw Haven provided medical records, transition guides, and checked in after week 1. Absolutely incredible team!',
    location: 'Round Rock, TX',
    adoptionDate: 'January 2026'
  },
  {
    id: 'story-3',
    petName: 'Barnaby Jr.',
    ownerName: 'David Chen',
    petType: 'rabbit',
    petImageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80',
    ownerImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    review: 'Never knew how sweet a rescue bunny could be! The volunteer staff taught me about proper bunny care and nutrition. Thank you Paw Haven!',
    location: 'Georgetown, TX',
    adoptionDate: 'May 2026'
  }
];

export const ADOPTION_EVENTS: AdoptionEvent[] = [
  {
    id: 'event-1',
    title: 'Paws in the Park Adoption Fair',
    date: 'Saturday, Aug 15, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'Zilker Park Central Lawn',
    address: '2100 Barton Springs Rd, Austin, TX',
    description: 'Meet over 40 rescue dogs, cats, and small pets! Free adoption kits, vet Q&A booth, and family agility games.',
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
    tag: 'Outdoor Festival'
  },
  {
    id: 'event-2',
    title: 'Senior Pets & Coffee Morning',
    date: 'Sunday, Aug 23, 2026',
    time: '9:00 AM - 12:00 PM',
    location: 'Paw Haven Downtown Cafe',
    address: '124 Haven Lane, Austin, TX',
    description: 'Enjoy handcrafted artisan coffee while meeting our serene senior dogs and gentle adult cats looking for a peaceful home.',
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80',
    tag: 'Special Spotlight'
  },
  {
    id: 'event-3',
    title: 'Feline Meet-and-Greet Social',
    date: 'Saturday, Sept 5, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Eastside Cat Lounge',
    address: '890 East 6th St, Austin, TX',
    description: 'Relax in our cozy cat lounge. Play with our gentle kittens and affectionate adults in an open, cage-free room.',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    tag: 'Cat Social'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Evelyn Harper, DVM',
    role: 'Lead Veterinarian',
    bio: 'Over 12 years of shelter medicine experience ensuring every rescue receives full health checks, vaccines, and dental care.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    favoriteAnimalMemory: 'Watching our blind retriever Max find a loving family with three young kids.'
  },
  {
    id: 'team-2',
    name: 'Marcus Sterling',
    role: 'Adoption Coordinator',
    bio: 'Matches pets with family lifestyles based on temperament assessment and home compatibility.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    favoriteAnimalMemory: 'Unboxing 12 rescued puppies and finding forever homes for all of them in one weekend.'
  },
  {
    id: 'team-3',
    name: 'Chloe Bennett',
    role: 'Foster & Volunteer Manager',
    bio: 'Coordinates 80+ foster families across Central Texas, providing training, medical supplies, and support.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    favoriteAnimalMemory: 'Nurturing a shy feral mother cat until she purred on my lap for the first time.'
  },
  {
    id: 'team-4',
    name: 'Julian Vance',
    role: 'Pet Behavioral Specialist',
    bio: 'Certified positive-reinforcement trainer helping shelter pets build confidence, obedience, and social skills.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    favoriteAnimalMemory: 'Teaching anxious Huskies to relax with puzzle toys and calming music.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is included in the Paw Haven adoption fee?',
    answer: 'Every adoption includes comprehensive veterinary examination, complete age-appropriate vaccinations, spay/neuter surgery, microchip registration with lifetime updates, flea/tick preventative treatment, deworming, a starter food bag, and lifetime post-adoption behavioral support.',
    category: 'adoption'
  },
  {
    id: 'faq-2',
    question: 'How long does the adoption process take?',
    answer: 'Most adoptions take 2 to 4 business days from submitting your application to bringing your new companion home. This allows our adoption team to review your application, schedule a friendly meet-and-greet, and conduct a brief virtual or in-person home visit.',
    category: 'adoption'
  },
  {
    id: 'faq-3',
    question: 'Can I adopt if I live in an apartment or rent?',
    answer: 'Yes! We welcome apartment residents and renters. We simply require confirmation that your landlord or building management allows pets, along with any breed or weight restrictions they may enforce.',
    category: 'adoption'
  },
  {
    id: 'faq-4',
    question: 'What if the pet does not adjust to my home?',
    answer: 'We offer a 30-day trial period with full behavioral counseling and guidance. If despite all efforts the pet is not a good fit, we take the pet back into our care with open arms and help you find a companion better suited to your lifestyle.',
    category: 'care'
  },
  {
    id: 'faq-5',
    question: 'How are donations used at Paw Haven?',
    answer: '100% of public donations directly fund emergency veterinary care, high-nutrition food, warm bedding, spay/neuter surgeries, and rescue transportation. Paw Haven maintains full financial transparency.',
    category: 'donation'
  },
  {
    id: 'faq-6',
    question: 'Are children allowed at meet-and-greets?',
    answer: 'Absolutely! In fact, we strongly encourage all household members (including current friendly dogs) to attend meet-and-greets so we can observe how everyone interacts in a calm environment.',
    category: 'general'
  }
];

export const ADOPTION_TIPS: AdoptionTip[] = [
  {
    id: 'tip-1',
    title: 'The 3-3-3 Rule of Rescue Pets',
    tip: '3 days to decompress, 3 weeks to learn your routine, and 3 months to feel completely at home.',
    category: 'Transition Guide',
    iconName: 'HeartHandshake'
  },
  {
    id: 'tip-2',
    title: 'Prepare a Quiet Sanctuary',
    tip: 'Set up a dedicated quiet corner with a cozy bed, water bowl, and familiar toys before bringing your new pet home.',
    category: 'Home Setup',
    iconName: 'Home'
  },
  {
    id: 'tip-3',
    title: 'Positive Reinforcement Builds Trust',
    tip: 'Reward calm, gentle behaviors with high-value treats and soft praise rather than scolding mistakes.',
    category: 'Behavior & Love',
    iconName: 'Sparkles'
  },
  {
    id: 'tip-4',
    title: 'Consistent Daily Schedules',
    tip: 'Feeding and walking your dog or cat at the same times every day helps reduce anxiety rapidly.',
    category: 'Daily Routine',
    iconName: 'Clock'
  }
];

export const RECENTLY_ADOPTED_NOTIFICATIONS: RecentlyAdoptedItem[] = [
  {
    id: 'rec-1',
    petName: 'Bella',
    breed: 'French Bulldog Mix',
    location: 'Austin, TX',
    timeAgo: '15 minutes ago',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rec-2',
    petName: 'Simba',
    breed: 'Orange Maine Coon Mix',
    location: 'Round Rock, TX',
    timeAgo: '1 hour ago',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rec-3',
    petName: 'Teddy',
    breed: 'Poodle & Terrier Mix',
    location: 'Cedar Park, TX',
    timeAgo: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=200&q=80'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Golden Hour Trail Walk',
    category: 'dog',
    url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
    caption: 'Milo enjoying a golden hour trail walk before finding his forever home.'
  },
  {
    id: 'gal-2',
    title: 'Sunny Window Cuddles',
    category: 'cat',
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    caption: 'Willow soaking in warm morning rays in the shelter cat lounge.'
  },
  {
    id: 'gal-3',
    title: 'Bunny Hop in the Garden',
    category: 'rabbit',
    url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    caption: 'Clover discovering dandelion greens during playtime.'
  },
  {
    id: 'gal-4',
    title: 'Cheery Cockatiel Whistles',
    category: 'bird',
    url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
    caption: 'Jasper singing tunes during afternoon social hour.'
  },
  {
    id: 'gal-5',
    title: 'Puppy Socialization Hour',
    category: 'shelter',
    url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    caption: 'Volunteers spending outdoor play sessions with rescue puppies.'
  },
  {
    id: 'gal-6',
    title: 'Peaceful Senior Nap',
    category: 'dog',
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    caption: 'Barnaby taking a peaceful snooze on an orthopedic pillow.'
  }
];
