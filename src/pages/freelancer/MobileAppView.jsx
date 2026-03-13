// src/pages/freelancer/MobileAppView.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, ChatBubbleLeftRightIcon, BanknotesIcon, UserIcon,
  BellIcon, ArrowUpTrayIcon, CheckCircleIcon, ArrowPathIcon,
  PaperAirplaneIcon, PencilSquareIcon
} from '@heroicons/react/24/outline';

export default function MobileAppView() {
  const [activeTab, setActiveTab] = useState('home');
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  // MOCK DATA FOR MOBILE EXPERIENCE
  const FREELANCER = { name: 'Alex', role: 'MERN Stack Dev', description: 'Specializing in high-conversion SaaS platforms and secure backends.' };
  const WALLET = { available: 1450.00, pending: 850.00 };
  const ACTIVE_JOB = { id: 'ORD-9012', title: 'E-Commerce Backend Build', client: 'David Smith', progress: 80, status: 'Revision Requested' };
  const CHATS = [
    { id: 1, client: 'David Smith', lastMsg: 'Can you update the Stripe keys?', time: '2m ago', unread: 1 },
    { id: 2, client: 'Marketing Inc.', lastMsg: 'The logo looks great, thanks!', time: '1h ago', unread: 0 }
  ];

  return (
    // 'max-w-md mx-auto' simulates a mobile phone screen if viewed on desktop
    <div className="max-w-md mx-auto h-screen bg-[#EBF4FA] flex flex-col font-sans relative overflow-hidden shadow-2xl sm:rounded-[2.5rem] sm:h-[850px] sm:my-10 border-[8px] border-[#0F172A]">
      
      {/* MOBILE HEADER */}
      <div className="bg-white px-5 pt-12 pb-4 flex justify-between items-center shadow-sm z-10 relative">
        <div>
          <h1 className="text-xl font-black text-[#0F172A]">
            {activeTab === 'home' && `Hi, ${FREELANCER.name} 🚀`}
            {activeTab === 'chat' && 'Messages'}
            {activeTab === 'wallet' && 'My Wallet'}
            {activeTab === 'profile' && 'Profile'}
          </h1>
        </div>
        <button className="relative p-2 bg-[#EBF4FA] rounded-full text-[#0F172A]">
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FFB400] rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* SCROLLABLE CONTENT AREA */}
      <div className="flex-grow overflow-y-auto pb-24 px-5 pt-6 hide-scrollbar">
        <AnimatePresence mode="wait">
          
          {/* --- 1. HOME TAB (Task Progress & Deliveries) --- */}
          {activeTab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <h2 className="text-sm font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Active Project</h2>
              
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#EBF4FA] mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black bg-[#A259FF]/10 text-[#A259FF] px-2 py-1 rounded-md uppercase tracking-wide">
                      {ACTIVE_JOB.status}
                    </span>
                    <h3 className="font-bold text-[#0F172A] mt-2 leading-tight">{ACTIVE_JOB.title}</h3>
                    <p className="text-xs text-[#64748B] mt-1 font-medium">{ACTIVE_JOB.client}</p>
                  </div>
                  <span className="text-lg font-black text-[#00A86B]">{ACTIVE_JOB.progress}%</span>
                </div>

                <div className="w-full bg-[#EBF4FA] rounded-full h-2 mb-6">
                  <div className="bg-gradient-to-r from-[#0078FF] to-[#A259FF] h-full rounded-full" style={{ width: `${ACTIVE_JOB.progress}%` }}></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-[#EBF4FA] text-[#0078FF] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
                    <ArrowPathIcon className="w-4 h-4" /> Update Progress
                  </button>
                  <button onClick={() => setShowDeliveryModal(true)} className="py-3 bg-[#0F172A] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md">
                    <ArrowUpTrayIcon className="w-4 h-4" /> Deliver / Revise
                  </button>
                </div>
              </div>

              <h2 className="text-sm font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setActiveTab('chat')} className="bg-white p-4 rounded-3xl shadow-sm border border-[#EBF4FA] flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#0078FF]" />
                  <span className="text-xs font-bold text-[#0F172A]">Message Client</span>
                </button>
                <button onClick={() => setActiveTab('wallet')} className="bg-white p-4 rounded-3xl shadow-sm border border-[#EBF4FA] flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
                  <BanknotesIcon className="w-8 h-8 text-[#00A86B]" />
                  <span className="text-xs font-bold text-[#0F172A]">Redeem Funds</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* --- 2. CHAT TAB (Communication for corrections) --- */}
          {activeTab === 'chat' && (
            <motion.div key="chat" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-3">
              {CHATS.map(chat => (
                <div key={chat.id} className="bg-white p-4 rounded-2xl shadow-sm border border-[#EBF4FA] flex items-center gap-4 active:bg-[#F8FAFC]">
                  <div className="w-12 h-12 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {chat.client.charAt(0)}
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-bold text-[#0F172A] truncate">{chat.client}</h3>
                      <span className="text-[10px] font-bold text-[#94A3B8]">{chat.time}</span>
                    </div>
                    <p className={`text-xs truncate ${chat.unread ? 'font-bold text-[#0F172A]' : 'text-[#64748B]'}`}>{chat.lastMsg}</p>
                  </div>
                  {chat.unread > 0 && <span className="w-5 h-5 bg-[#A259FF] text-white text-[10px] font-bold rounded-full flex items-center justify-center">{chat.unread}</span>}
                </div>
              ))}
            </motion.div>
          )}

          {/* --- 3. WALLET TAB (Earnings & Withdrawals) --- */}
          {activeTab === 'wallet' && (
            <motion.div key="wallet" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <div className="bg-[#0F172A] rounded-3xl p-6 shadow-xl relative overflow-hidden mb-6 border border-[#1E293B]">
                <div className="absolute top-[-50%] right-[-20%] w-40 h-40 bg-[#00A86B]/30 rounded-full blur-[40px] pointer-events-none"></div>
                <p className="text-[#94A3B8] text-xs font-bold uppercase tracking-wider mb-1">Available for Withdrawal</p>
                <h2 className="text-4xl font-black text-white mb-6">${WALLET.available.toFixed(2)}</h2>
                <button className="w-full py-3.5 bg-[#00A86B] text-white font-bold rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                  <BanknotesIcon className="w-5 h-5" /> Withdraw to Bank
                </button>
              </div>

              <div className="bg-white p-5 rounded-3xl shadow-sm border border-[#EBF4FA] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#FFB400]/10 rounded-xl"><ClockIcon className="w-6 h-6 text-[#FFB400]" /></div>
                  <div>
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Pending Clearance</p>
                    <p className="text-lg font-black text-[#0F172A]">${WALLET.pending.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- 4. PROFILE TAB (Edit Gig Description) --- */}
          {activeTab === 'profile' && (
            <motion.div key="profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-black text-3xl mb-3 relative">
                  AV
                  <button className="absolute bottom-0 right-0 bg-[#A259FF] p-1.5 rounded-full border-2 border-white"><PencilSquareIcon className="w-4 h-4 text-white"/></button>
                </div>
                <h2 className="text-xl font-black text-[#0F172A]">{FREELANCER.name}</h2>
                <p className="text-sm text-[#0078FF] font-bold">{FREELANCER.role}</p>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-[#EBF4FA] p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-[#0F172A] text-sm">Gig Description & Bio</h3>
                  <button className="text-[#0078FF] text-xs font-bold">Edit</button>
                </div>
                <textarea 
                  className="w-full text-sm text-[#64748B] font-medium bg-[#F8FAFC] border border-[#EBF4FA] rounded-xl p-3 outline-none focus:border-[#A259FF]" 
                  rows="4" 
                  defaultValue={FREELANCER.description}
                />
                <button className="w-full py-3 mt-4 bg-[#0F172A] text-white font-bold rounded-xl active:scale-95 transition-transform">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-[#EBF4FA] px-6 py-4 flex justify-between items-center z-20 pb-8 sm:pb-4 rounded-b-[2.5rem]">
        {[
          { id: 'home', icon: HomeIcon, label: 'Home' },
          { id: 'chat', icon: ChatBubbleLeftRightIcon, label: 'Chat' },
          { id: 'wallet', icon: BanknotesIcon, label: 'Wallet' },
          { id: 'profile', icon: UserIcon, label: 'Profile' },
        ].map((tab) => (
          <button 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === tab.id ? 'text-[#A259FF]' : 'text-[#94A3B8] hover:text-[#0F172A]'}`}
          >
            <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'fill-[#A259FF]/10' : ''}`} />
            <span className={`text-[10px] font-bold ${activeTab === tab.id ? 'opacity-100' : 'opacity-0'}`}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* DELIVERY MODAL POPUP */}
      <AnimatePresence>
        {showDeliveryModal && (
          <div className="absolute inset-0 z-50 flex flex-col justify-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-sm" onClick={() => setShowDeliveryModal(false)} />
            
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', bounce: 0, duration: 0.4 }} className="relative bg-white rounded-t-[2rem] p-6 shadow-2xl h-[70%] flex flex-col">
              <div className="w-12 h-1.5 bg-[#E2E8F0] rounded-full mx-auto mb-6"></div>
              
              <h2 className="text-xl font-black text-[#0F172A] mb-4">Upload Delivery</h2>
              <p className="text-sm text-[#64748B] mb-4">Attach your final files or revisions for the client to review.</p>
              
              <div className="border-2 border-dashed border-[#A259FF]/30 bg-[#A259FF]/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center mb-4 flex-grow">
                <ArrowUpTrayIcon className="w-10 h-10 text-[#A259FF] mb-2" />
                <p className="text-sm font-bold text-[#0F172A]">Tap to select files from device</p>
                <p className="text-xs text-[#64748B] mt-1">.zip, .pdf, .jpg up to 50MB</p>
              </div>

              <textarea placeholder="Add a message for the client..." className="w-full text-sm font-medium bg-[#F8FAFC] border border-[#EBF4FA] rounded-xl p-4 outline-none focus:border-[#0078FF] mb-4 resize-none" rows="2" />

              <button onClick={() => setShowDeliveryModal(false)} className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
                <PaperAirplaneIcon className="w-5 h-5" /> Send to Client
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}