import React, { useState } from 'react';
import { Pet } from '../types';
import {
  X,
  Heart,
  CheckCircle,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  MapPin,
  Send,
  User,
  Mail,
  Phone,
  Home,
  FileText,
  Check
} from 'lucide-react';

interface PetModalProps {
  pet: Pet | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (petId: string) => void;
}

export const PetModal: React.FC<PetModalProps> = ({
  pet,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'health' | 'gallery' | 'apply'>('overview');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [residenceType, setResidenceType] = useState('House');
  const [ownRent, setOwnRent] = useState('Own');
  const [hasOtherPets, setHasOtherPets] = useState('Yes');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!pet) return null;

  const imagesList = [pet.imageUrl, ...(pet.additionalImages || [])];
  const activeImage = selectedPhoto || pet.imageUrl;

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      setFormError('Please fill in your name, email, and phone number.');
      return;
    }
    setFormError('');
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setActiveTab('overview');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-white w-full max-w-4xl rounded-[28px] border border-[#E7E5E4] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E5E4] bg-[#FAF8F4]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#2E7D4E]" />
            <h2 className="text-xl font-semibold text-[#2F3437]">
              Meet {pet.name} <span className="text-sm font-normal text-[#6B7280]">({pet.breed})</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(pet.id)}
              className="p-2.5 rounded-full bg-white border border-[#E7E5E4] text-[#2F3437] hover:bg-gray-50 transition-colors"
              title="Favorite"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#E76F51] text-[#E76F51]' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white border border-[#E7E5E4] text-[#2F3437] hover:bg-gray-50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Tabs */}
        <div className="flex border-b border-[#E7E5E4] px-6 bg-white overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#2E7D4E] text-[#2E7D4E]'
                : 'border-transparent text-[#6B7280] hover:text-[#2F3437]'
            }`}
          >
            Overview & Personality
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'health'
                ? 'border-[#2E7D4E] text-[#2E7D4E]'
                : 'border-transparent text-[#6B7280] hover:text-[#2F3437]'
            }`}
          >
            Health & Medical Record
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'gallery'
                ? 'border-[#2E7D4E] text-[#2E7D4E]'
                : 'border-transparent text-[#6B7280] hover:text-[#2F3437]'
            }`}
          >
            Photo Gallery ({imagesList.length})
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'apply'
                ? 'border-[#E76F51] text-[#E76F51]'
                : 'border-transparent text-[#E76F51] hover:text-[#E76F51]/80 font-bold'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Apply to Adopt {pet.name}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#FAF8F4]/50">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Photo View */}
              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="h-72 rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-sm bg-white">
                  <img
                    src={activeImage}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Thumbnails */}
                {imagesList.length > 1 && (
                  <div className="flex gap-2">
                    {imagesList.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPhoto(img)}
                        className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                          activeImage === img ? 'border-[#2E7D4E] scale-105' : 'border-transparent opacity-70'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#2E7D4E] font-semibold mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Located at {pet.location}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#2F3437] mb-3">
                    About {pet.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                    {pet.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-white border border-[#E7E5E4]">
                    <div>
                      <span className="text-[11px] text-[#6B7280] block font-medium">Favourite Toy</span>
                      <span className="text-xs font-semibold text-[#2F3437]">{pet.favouriteToy}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[#6B7280] block font-medium">Favourite Food</span>
                      <span className="text-xs font-semibold text-[#2F3437]">{pet.favouriteFood}</span>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold uppercase text-[#6B7280] tracking-wider mb-2">
                    Temperament & Personality
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pet.temperamentTags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-white border border-[#E7E5E4] text-xs font-medium text-[#2F3437]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E5E4] flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('apply')}
                    className="w-full py-3.5 rounded-2xl bg-[#2E7D4E] text-white font-semibold text-sm shadow-md hover:bg-[#1F6B3E] transition-colors text-center"
                  >
                    Start Adoption Application
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HEALTH & MEDICAL */}
          {activeTab === 'health' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E7D4E]/15 text-[#2E7D4E] flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2F3437]">Veterinary Health Certificate</h3>
                    <p className="text-xs text-[#6B7280]">Inspected & certified by Paw Haven Veterinary Clinic</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F4]">
                    <span className="text-xs font-medium text-[#2F3437]">Complete Core Vaccines</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#10B981]">
                      <CheckCircle className="w-4 h-4" /> Verified
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F4]">
                    <span className="text-xs font-medium text-[#2F3437]">Microchip Registration</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#10B981]">
                      <CheckCircle className="w-4 h-4" /> Microchipped (#98514209)
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F4]">
                    <span className="text-xs font-medium text-[#2F3437]">Spayed / Neutered</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#10B981]">
                      <CheckCircle className="w-4 h-4" /> Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F4]">
                    <span className="text-xs font-medium text-[#2F3437]">Dental & Parasite Check</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#10B981]">
                      <CheckCircle className="w-4 h-4" /> Clear & Healthy
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#2E7D4E]/10 border border-[#2E7D4E]/20 text-xs text-[#2F3437] leading-relaxed">
                <strong>Paw Haven Promise:</strong> Every adopted pet receives 30 days of complimentary pet insurance coverage and a free follow-up wellness exam at any partner veterinary clinic in Central Texas.
              </div>
            </div>
          )}

          {/* TAB 3: GALLERY */}
          {activeTab === 'gallery' && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {imagesList.map((img, i) => (
                  <div key={i} className="h-60 rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-xs">
                    <img
                      src={img}
                      alt={`${pet.name} photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: APPLICATION FORM */}
          {activeTab === 'apply' && (
            <div className="max-w-xl mx-auto">
              {isSubmitted ? (
                <div className="p-8 rounded-3xl bg-white border border-[#E7E5E4] text-center shadow-md animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2F3437] mb-2">
                    Application Received!
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
                    Thank you, <strong>{applicantName}</strong>! We have logged your adoption interest for <strong>{pet.name}</strong>. Our adoption team will reach out to you within 24 hours at <strong>{applicantEmail}</strong>.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-2xl bg-[#2E7D4E] text-white font-medium text-sm hover:bg-[#1F6B3E] transition-colors"
                  >
                    Back to Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#E7E5E4] shadow-xs">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-[#2F3437]">
                      Adoption Application for {pet.name}
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      No pressure! This starts a conversation with our shelter team.
                    </p>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2F3437] mb-1">Email</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                        <input
                          type="email"
                          required
                          placeholder="jane@example.com"
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2F3437] mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                        <input
                          type="tel"
                          required
                          placeholder="(512) 555-0199"
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2F3437] mb-1">Housing Type</label>
                      <select
                        value={residenceType}
                        onChange={(e) => setResidenceType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437]"
                      >
                        <option value="House">Single Family House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Townhouse / Condo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2F3437] mb-1">Rent or Own?</label>
                      <select
                        value={ownRent}
                        onChange={(e) => setOwnRent(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437]"
                      >
                        <option value="Own">Own Home</option>
                        <option value="Rent">Rent (Pets Allowed)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3437] mb-1">
                      Tell us why {pet.name} would be a great fit for your home
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your daily routine, yard access, or household experience..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4] text-xs text-[#2F3437] focus:outline-none focus:ring-2 focus:ring-[#2E7D4E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#2E7D4E] text-white font-semibold text-sm shadow-md hover:bg-[#1F6B3E] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Adoption Request</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
