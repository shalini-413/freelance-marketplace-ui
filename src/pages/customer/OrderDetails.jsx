// src/pages/customer/OrderDetails.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircleIcon, DocumentArrowDownIcon, ArrowPathIcon, ShieldCheckIcon, 
  ClockIcon, PhoneIcon, VideoCameraIcon, ChatBubbleLeftRightIcon, DocumentTextIcon,
  ArrowTopRightOnSquareIcon, ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function OrderDetails() {
  const [isApproved, setIsApproved] = useState(false);
  useEffect(() => { if (localStorage.getItem('demo_payment_cleared') === 'true') { setIsApproved(true); } }, []);

  const ORDER = {
    id: 'ORD-9012', 
    title: 'Full-Stack MERN E-Commerce Build', 
    freelancer: 'Alex Vance', 
    amount: '$850.00',
    deliveryMessage: "Hi David! I have successfully deployed the backend to your staging server. I've also attached the complete source code and database schemas.",
    files: [{ name: 'mern-backend-final-v1.zip', size: '18.4 MB' }]
  };

  const TASKS = [
    { id: 1, text: 'Initialize React App & Node Server', done: true },
    { id: 2, text: 'Configure MongoDB Schema', done: true },
    { id: 3, text: 'Build JWT Authentication endpoints', done: true },
    { id: 4, text: 'Integrate Stripe Payment Gateway', done: true },
    { id: 5, text: 'Finalize Admin Dashboard UI', done: true },
  ];
  const progress = Math.round((TASKS.filter(t => t.done).length / TASKS.length) * 100) || 0;

  const handleApprove = () => { setIsApproved(true); localStorage.setItem('demo_payment_cleared', 'true'); };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        
        {/* ================= PAGE HEADER (Responsive) ================= */}
        <div className="mb-8">
          <Link to="/customer/orders" className="inline-flex items-center gap-2 text-sm font-bold text-[#64748B] hover:text-[#0078FF] transition-colors mb-4 p-2 -ml-2 rounded-xl hover:bg-white shadow-sm border border-transparent hover:border-[#E2E8F0] active:scale-95">
            <ArrowLeftIcon className="w-4 h-4" /> Back to Orders
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="bg-white text-[#64748B] border border-[#E2E8F0] text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {ORDER.id}
                </span>
                <p className="text-[12px] sm:text-[14px] text-[#64748B] font-bold">
                  Freelancer: <strong className="text-[#0F172A]">{ORDER.freelancer}</strong>
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                {ORDER.title}
              </h1>
            </div>
            
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-row md:flex-col justify-between items-center md:items-end">
              <p className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0 md:mb-1">Escrow Amount</p>
              <p className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-none">{ORDER.amount}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* ================= MAIN CONTENT ================= */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Live Tracker */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[1.5rem] border border-[#E2E8F0] shadow-sm p-5 sm:p-8">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-[#0F172A] flex items-center gap-2">
                    <ArrowPathIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0078FF]" /> Live Progress Tracker
                  </h2>
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#00A86B]">{progress}%</span>
              </div>
              <div className="w-full bg-[#E2E8F0] rounded-full h-2 sm:h-2.5 mb-6 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0078FF] to-[#A259FF] h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="space-y-3">
                {TASKS.map(task => (
                  <div key={task.id} className={`flex items-start sm:items-center justify-between p-3 sm:p-4 rounded-xl border-2 transition-all ${task.done ? 'bg-[#00A86B]/5 border-[#00A86B]/20' : 'bg-[#F8FAFC] border-[#E2E8F0]'}`}>
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${task.done ? 'bg-[#00A86B] border-[#00A86B]' : 'bg-white border-[#CBD5E1]'}`}>
                        {task.done && <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                      </div>
                      <span className={`font-bold text-[14px] sm:text-[15px] leading-tight sm:leading-normal ${task.done ? 'text-[#0F172A]' : 'text-[#64748B]'}`}>{task.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Delivery Review Block */}
            <AnimatePresence mode="wait">
              {!isApproved ? (
                <motion.div key="review" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: 0.2 }} className="bg-white rounded-[1.5rem] border-2 border-[#A259FF]/30 shadow-[0_10px_30px_rgba(162,89,255,0.08)] overflow-hidden">
                  <div className="bg-[#A259FF]/5 p-5 sm:p-6 border-b border-[#A259FF]/10">
                    <h2 className="text-lg sm:text-xl font-black text-[#0F172A] mb-1">Review Delivery</h2>
                    <p className="text-xs sm:text-sm font-bold text-[#A259FF] leading-snug">{ORDER.freelancer} has submitted the work for your approval.</p>
                  </div>
                  <div className="p-5 sm:p-6 space-y-6 sm:space-y-8">
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2 sm:mb-3">Message from {ORDER.freelancer}</p>
                      <p className="text-[#0F172A] font-medium leading-relaxed p-4 sm:p-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-sm sm:text-base">"{ORDER.deliveryMessage}"</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2 sm:mb-3">Delivered Files</p>
                      <div className="space-y-3">
                        {ORDER.files.map((file, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#0078FF]/40 hover:shadow-sm transition-all cursor-pointer group gap-3 sm:gap-0">
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                              <div className="p-2 sm:p-2.5 bg-[#F8FAFC] rounded-lg group-hover:bg-[#0078FF]/5 transition-colors">
                                <DocumentArrowDownIcon className="w-5 h-5 text-[#0078FF]" />
                              </div>
                              <div className="flex-grow min-w-0">
                                <p className="text-sm font-bold text-[#0F172A] truncate">{file.name}</p>
                                <p className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8]">{file.size}</p>
                              </div>
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-[#0078FF] w-full sm:w-auto text-right sm:text-left">Download</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button onClick={handleApprove} className="w-full py-4 bg-[#00A86B] hover:bg-[#008f5a] text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base">
                      <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" /> Approve & Release Funds
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[1.5rem] border border-[#E2E8F0] shadow-sm p-8 sm:p-10 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#00A86B]/10 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                    <CheckCircleIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A86B]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-3">Project Completed!</h2>
                  <p className="text-sm sm:text-base text-[#64748B] font-medium mb-0 max-w-md mx-auto leading-relaxed">You approved the delivery. The funds have been securely released from escrow.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =========================================
              FREELANCER COMMUNICATION (Responsive)
              ========================================= */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[1.5rem] border border-[#E2E8F0] shadow-sm overflow-hidden sticky top-28">
              <div className="p-5 sm:p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]/50">
                <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Collaboration Hub</h3>
              </div>
              
              <div className="p-5 sm:p-6">
                
                {/* Desktop: Side-by-side, Mobile: Stacked Primary + Grid secondary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 mb-5">
                  <Link to="/customer/chat" className="sm:col-span-2 lg:col-span-1 xl:col-span-2 py-3.5 px-4 bg-[#0078FF] hover:bg-[#0060CC] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95">
                    <ChatBubbleLeftRightIcon className="w-5 h-5"/> Open Chat
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-3 sm:col-span-1 lg:col-span-1 xl:col-span-1">
                    <button className="py-3.5 bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0078FF] hover:border-[#0078FF]/30 hover:bg-[#0078FF]/5 rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95">
                      <PhoneIcon className="w-5 h-5"/>
                    </button>
                    <button className="py-3.5 bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#00A86B] hover:border-[#00A86B]/30 hover:bg-[#00A86B]/5 rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95">
                      <VideoCameraIcon className="w-5 h-5"/>
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#A259FF]/10 border border-[#A259FF]/20 flex items-center justify-center text-[#A259FF]">
                        <DocumentTextIcon className="w-5 h-5"/>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">Meeting Transcripts</p>
                        <p className="text-[10px] font-bold text-[#64748B]">Cloud synced</p>
                      </div>
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#94A3B8] group-hover:text-[#A259FF] transition-colors mr-1"/>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* ========================================= */}

        </div>
      </div>
    </div>
  );
}