// src/pages/freelancer/ProjectDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon, ClockIcon, DocumentTextIcon, ArrowDownTrayIcon, 
  CodeBracketIcon, CheckBadgeIcon, PhoneIcon, VideoCameraIcon, 
  ChatBubbleLeftRightIcon, ArrowLeftIcon, ArrowTopRightOnSquareIcon,
  BanknotesIcon, ArrowPathIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ProjectDetails() {
  const PROJECT = {
    id: 'ORD-9012', 
    type: 'MERN Stack', 
    title: 'E-Commerce Backend Build', 
    client: 'David Smith', 
    due: 'Today, 11:59 PM', 
    payout: '$850.00', 
    status: 'In Progress',
    description: "Hi! I need a highly secure backend for my new e-commerce store. It needs to handle user authentication (JWT), product inventory management, and Stripe payment webhooks. I have attached the database schema diagram for reference.",
    requirements: [
      'Implement JWT Authentication & Role Guards',
      'Create CRUD endpoints for Products & Users',
      'Integrate Stripe Payment Intents API',
      'Deploy final build to Render or Heroku'
    ],
    attachments: [
      { name: 'db-schema-v2.pdf', size: '2.4 MB' }, 
      { name: 'stripe-api-keys.txt', size: '12 KB' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="mb-6 sm:mb-10">
          <Link to="/freelancer/projects" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#64748B] hover:text-[#0078FF] transition-colors mb-4 sm:mb-5 active:scale-95">
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Back to Jobs
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="bg-[#0078FF]/10 text-[#0078FF] border border-[#0078FF]/20 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {PROJECT.type}
                </span>
                <span className="bg-white text-[#64748B] border border-[#E2E8F0] text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {PROJECT.id}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                {PROJECT.title}
              </h1>
            </div>
            
            {/* Quick Status Pill */}
            <div className="bg-white p-3 sm:p-4 rounded-[1rem] sm:rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-3 sm:gap-4 md:min-w-[200px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB400]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB400]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Deadline</p>
                <p className="text-sm sm:text-base font-black text-[#0F172A] leading-tight">{PROJECT.due}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* ================= MAIN CONTENT (LEFT) ================= */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Brief & Requirements Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-[#E2E8F0] shadow-sm overflow-hidden p-5 sm:p-8">
              <h2 className="text-lg sm:text-xl font-black text-[#0F172A] mb-4 sm:mb-5">Client Brief</h2>
              
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 relative">
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-3xl sm:text-4xl text-[#CBD5E1] font-serif leading-none rotate-180 opacity-50">"</div>
                <p className="text-[#475569] font-medium leading-relaxed relative z-10 pl-6 sm:pl-8 text-sm sm:text-base">
                  {PROJECT.description}
                </p>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#0F172A] mb-4 sm:mb-5">Deliverables</h3>
              <ul className="space-y-2 sm:space-y-3">
                {PROJECT.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4 bg-white border border-[#E2E8F0] rounded-xl p-3 sm:p-4 transition-colors hover:border-[#CBD5E1]">
                    <CheckBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A86B] flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-[13px] sm:text-[15px] text-[#0F172A] leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Attachments Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-[#E2E8F0] bg-[#F8FAFC]/50">
                <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-wider">Reference Files</h3>
              </div>
              <div className="p-5 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {PROJECT.attachments.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#0078FF]/40 hover:shadow-sm transition-all cursor-pointer group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 sm:p-2.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] group-hover:bg-[#0078FF]/5 group-hover:border-[#0078FF]/20 transition-colors flex-shrink-0">
                          <DocumentTextIcon className="w-5 h-5 text-[#64748B] group-hover:text-[#0078FF]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#0F172A] truncate">{file.name}</p>
                          <p className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8]">{file.size}</p>
                        </div>
                      </div>
                      <ArrowDownTrayIcon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#0F172A] flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= SIDEBAR (RIGHT) ================= */}
          {/* FIX: Placed sticky behavior on this wrapper container instead of the child cards */}
          <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-28 self-start">
            
            {/* Action Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-[#E2E8F0] shadow-sm overflow-hidden">
              
              {/* Client Info Header */}
              <div className="p-5 sm:p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]/50 flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0F172A] text-white rounded-[14px] flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
                  {PROJECT.client.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Client</p>
                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg truncate">{PROJECT.client}</h3>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="p-5 sm:p-6 space-y-5 sm:space-y-6">
                
                {/* Financials Box */}
                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm border border-[#E2E8F0]"><BanknotesIcon className="w-5 h-5 text-[#00A86B]" /></div>
                    <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Expected Payout</p>
                  </div>
                  <p className="text-lg sm:text-xl font-black text-[#0F172A]">{PROJECT.payout}</p>
                </div>

                {/* Primary Buttons */}
                <div className="space-y-3 pt-2">
                  <Link to="/freelancer/task/tracker" className="w-full py-3.5 sm:py-4 bg-white border-2 border-[#E2E8F0] text-[#0F172A] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95">
                    <ArrowPathIcon className="w-5 h-5" /> Manage Tasks
                  </Link>
                  <Link to="/freelancer/upload" className="w-full py-3.5 sm:py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
                    <CodeBracketIcon className="w-5 h-5" /> Deliver Project
                  </Link>
                </div>

              </div>
            </motion.div>

            {/* Professional Collaboration Hub */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]/50">
                <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-wider">Collaboration Hub</h3>
              </div>
              
              <div className="p-5 sm:p-6">
                
                {/* CSS Grid for perfectly responsive buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 mb-5">
                  <Link to="/freelancer/chat" className="sm:col-span-2 lg:col-span-1 xl:col-span-2 py-3.5 px-4 bg-[#0078FF] hover:bg-[#0060CC] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 sm:h-6"/> Open Chat
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-3 sm:col-span-1 lg:col-span-1 xl:col-span-1">
                    <button className="py-3.5 bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0078FF] hover:border-[#0078FF]/30 hover:bg-[#0078FF]/5 rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95">
                      <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6"/>
                    </button>
                    <button className="py-3.5 bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#00A86B] hover:border-[#00A86B]/30 hover:bg-[#00A86B]/5 rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95">
                      <VideoCameraIcon className="w-5 h-5 sm:w-6 sm:h-6"/>
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#A259FF]/10 border border-[#A259FF]/20 flex items-center justify-center text-[#A259FF] flex-shrink-0">
                        <DocumentTextIcon className="w-5 h-5"/>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">Transcripts</p>
                        <p className="text-[10px] sm:text-[11px] font-bold text-[#64748B]">Cloud synced</p>
                      </div>
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#94A3B8] group-hover:text-[#A259FF] transition-colors mr-1"/>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}