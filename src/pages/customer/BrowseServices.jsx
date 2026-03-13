// src/pages/customer/BrowseServices.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon,
  CheckBadgeIcon, BookOpenIcon, CodeBracketIcon, PaintBrushIcon
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'assets', label: 'Platform Templates & Notebooks' },
  { id: 'mern', label: 'MERN Stack Devs' },
  { id: 'xd', label: 'Adobe XD Designers' },
  { id: 'illustrator', label: 'Illustrator Experts' },
];

// Mock Data strictly aligned with your categories
const LISTINGS = [
  { id: 1, type: 'assets', title: 'Creative Dark Mode Notebook', author: 'Partaken Official', price: '$29', rating: '5.0', reviews: 142, img: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]', verified: true },
  { id: 2, type: 'assets', title: 'SaaS Admin Architecture', author: 'Partaken Official', price: '$89', rating: '4.9', reviews: 85, img: 'bg-gradient-to-br from-[#882FF6] to-[#6882DD]', verified: true },
  { id: 3, type: 'mern', title: 'Full-Stack MERN E-Commerce Build', author: 'Alex Vance', price: '$850', rating: '5.0', reviews: 44, img: 'bg-[#0F172A]', verified: false },
  { id: 4, type: 'xd', title: 'Premium Mobile App UI (Adobe XD)', author: 'Sarah UI', price: '$400', rating: '4.8', reviews: 112, img: 'bg-[#6882DD]', verified: false },
  { id: 5, type: 'mern', title: 'Custom React & Node Web App', author: 'David Smith', price: '$600', rating: '4.7', reviews: 29, img: 'bg-[#EBF4FA]', verified: false },
  { id: 6, type: 'illustrator', title: 'Custom Vector Graphics & Branding', author: 'Max Art', price: '$150', rating: '4.9', reviews: 210, img: 'bg-[#00A86B]', verified: false },
];

export default function BrowseServices() {
  const location = useLocation();
  
  // Intelligent matching of URL to the correct category tab
  const getInitialTab = () => {
    if (location.pathname.includes('platform-assets')) return 'assets';
    if (location.pathname.includes('mern')) return 'mern';
    if (location.pathname.includes('xd')) return 'xd';
    if (location.pathname.includes('illustrator')) return 'illustrator';
    return 'all';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  // Automatically update the tab if the user clicks a different category link from the nav
  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname]);

  const filteredListings = LISTINGS.filter(listing => 
    (activeTab === 'all' || listing.type === activeTab)
  );

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      
      {/* HEADER AREA (Search & Filter removed) */}
      <div className="bg-white border-b border-[#EBF4FA] pt-10 pb-8 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-2">
            Explore & Hire
          </h1>
          <p className="text-[#64748B] font-medium">Browse platform assets and top-tier freelancers specifically for your needs.</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* TABS */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-[14px] transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-[#882FF6] text-white shadow-[0_4px_15px_rgba(136,47,246,0.25)]' 
                : 'bg-white text-[#64748B] hover:text-[#0F172A] border border-[#EBF4FA] hover:border-[#6882DD]/30 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRID LISTINGS */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredListings.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] overflow-hidden group hover:shadow-[0_15px_40px_rgba(136,47,246,0.08)] hover:border-[#882FF6]/30 transition-all duration-300 flex flex-col"
              >
                {/* Image Placeholder & Badges */}
                <div className={`h-48 w-full ${item.img} relative overflow-hidden`}>
                  {item.type === 'assets' && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                      <BookOpenIcon className="w-4 h-4 text-[#882FF6]" />
                      <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-wider">Official Asset</span>
                    </div>
                  )}
                  {item.type === 'mern' && (
                    <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                      <CodeBracketIcon className="w-4 h-4 text-[#FBC835]" />
                      <span className="text-[10px] font-black text-white uppercase tracking-wider">MERN Pro</span>
                    </div>
                  )}
                  {item.type === 'illustrator' && (
                    <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                      <PaintBrushIcon className="w-4 h-4 text-[#00A86B]" />
                      <span className="text-[10px] font-black text-white uppercase tracking-wider">Design Pro</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-1.5 mb-2">
                    <p className="text-xs font-bold text-[#64748B]">{item.author}</p>
                    {item.verified && <CheckBadgeIcon className="w-4 h-4 text-[#882FF6]" />}
                  </div>
                  
                  <h3 className="font-bold text-[#0F172A] text-lg leading-snug group-hover:text-[#882FF6] transition-colors line-clamp-2 mb-3">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mb-4 mt-auto">
                    <StarIcon className="w-4 h-4 text-[#FBC835] fill-current" />
                    <span className="text-sm font-bold text-[#0F172A]">{item.rating}</span>
                    <span className="text-sm font-medium text-[#94A3B8]">({item.reviews})</span>
                  </div>

                  <div className="pt-4 border-t border-[#EBF4FA] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#94A3B8] uppercase block">Starting at</span>
                      <span className="text-lg font-black text-[#0F172A]">{item.price}</span>
                    </div>
                    <Link to={`/service/${item.id}`} className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${item.type === 'assets' ? 'bg-[#EBF4FA] text-[#0F172A] hover:bg-[#6882DD]/20' : 'bg-[#882FF6] text-white hover:bg-[#6882DD]'}`}>
                      {item.type === 'assets' ? 'View Asset' : 'Hire Me'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredListings.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-[#0F172A]">No results found</h3>
            <p className="text-[#64748B] mt-2 font-medium">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}