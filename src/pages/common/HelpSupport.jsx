// src/pages/common/HelpSupport.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { id: 1, q: "How do I change my payment method?", a: "Navigate to your dashboard, click on 'Earnings/Wallet', and select 'Manage Methods'. From there you can add or remove cards securely using our encrypted gateway." },
  { id: 2, q: "How does the escrow system work?", a: "When a customer funds a project, the money is held securely in a neutral escrow account. It is only released to the freelancer once the work is delivered and formally approved." },
  { id: 3, q: "What if I'm not satisfied with the delivery?", a: "You can request revisions based on the package terms directly from the order page. If the issue persists and cannot be resolved, you can open a dispute through our Resolution Center for mediation." },
  { id: 4, q: "Are there any hidden fees?", a: "No. Freelancers pay a flat 10% platform fee on completed orders, and customers pay a standard 3% processing fee at checkout. Everything is transparent before you confirm." }
];

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO & SEARCH COMMAND CENTER --- */}
      <div className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-800 pt-20 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Abstract Background Textures */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            How can we help you today?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-lg text-indigo-200 mb-10"
          >
            Search our knowledge base or browse categories below.
          </motion.p>

          {/* Elevated Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="relative group max-w-2xl mx-auto"
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-xl group-hover:bg-indigo-500/30 transition-all duration-300"></div>
            <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
              <div className="pl-4 pr-2 text-indigo-500">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input 
                type="text" 
                placeholder="Ask a question or search for keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 px-2 text-lg text-gray-900 bg-transparent outline-none placeholder-gray-400 font-medium"
              />
              <button className="hidden sm:block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-md">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- QUICK ACTION CARDS (Bento Grid) --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Knowledge Base', desc: 'Step-by-step guides and platform rules.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', gradient: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50' },
            { title: 'Contact Support', desc: 'Get in touch with our 24/7 human team.', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-50' },
            { title: 'Community Forum', desc: 'Connect, share, and learn with peers.', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', gradient: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-50' }
          ].map((card, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-pointer transition-all border border-gray-100 group flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${card.gradient}`}></div>
                <svg className="w-8 h-8 text-gray-900 relative z-10" fill="url(#grad)" viewBox="0 0 24 24" stroke="currentColor">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                </svg>
              </div>
              <h3 className="font-extrabold text-gray-900 text-xl mb-2 group-hover:text-indigo-600 transition-colors">{card.title}</h3>
              <p className="text-[15px] text-gray-500 font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-3 font-medium">Find quick answers to common issues regarding payments, orders, and account management.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-indigo-100 bg-indigo-50/30' : 'border-gray-50 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)} 
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-[16px] ${isOpen ? 'text-indigo-900' : 'text-gray-900'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-indigo-200 text-indigo-700' : 'bg-gray-200 text-gray-500'}`}>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-[15px] text-gray-600 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[2rem] p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Still need help?</h3>
            <p className="text-indigo-100 font-medium">Our support agents are available to assist you via live chat.</p>
          </div>
          <button className="mt-6 sm:mt-0 px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50 font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Start Live Chat
          </button>
        </div>

      </div>
    </div>
  );
}