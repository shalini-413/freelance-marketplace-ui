// src/pages/freelancer/Dashboard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BriefcaseIcon, BanknotesIcon, ChartBarIcon, 
  CheckCircleIcon, PaperAirplaneIcon, ArrowRightIcon,
  UserIcon, ArrowUpTrayIcon, CodeBracketIcon, PaintBrushIcon, WrenchScrewdriverIcon, PlusIcon,
  CloudArrowUpIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, ArrowPathIcon,
  SquaresPlusIcon, ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ACTIVE_JOBS = [
  { id: 'ORD-9012', category: 'priority', type: 'MERN Stack', title: 'E-Commerce Backend Build', client: 'David Smith', due: 'Today', status: 'In Progress', progress: 95, payout: '$850' },
  { id: 'ILL-022', category: 'side', type: 'Illustrator', title: 'Vector Branding Assets', client: 'Marketing Inc.', due: 'Oct 28', status: 'In Progress', progress: 10, payout: '$120' },
];

const ADOBE_APPS = [
  { name: 'Photoshop', icon: 'Ps', color: 'bg-[#31A8FF]/10 text-[#31A8FF] border-[#31A8FF]/20 hover:bg-[#31A8FF] hover:text-white hover:border-[#31A8FF]' },
  { name: 'Illustrator', icon: 'Ai', color: 'bg-[#FF9A00]/10 text-[#FF9A00] border-[#FF9A00]/20 hover:bg-[#FF9A00] hover:text-white hover:border-[#FF9A00]' },
  { name: 'InDesign', icon: 'Id', color: 'bg-[#FF3366]/10 text-[#FF3366] border-[#FF3366]/20 hover:bg-[#FF3366] hover:text-white hover:border-[#FF3366]' },
  { name: 'Adobe XD', icon: 'Xd', color: 'bg-[#FF61F6]/10 text-[#FF61F6] border-[#FF61F6]/20 hover:bg-[#FF61F6] hover:text-white hover:border-[#FF61F6]' },
];

const MS_APPS = [
  { name: 'Word', icon: 'W', color: 'bg-[#2B579A]/10 text-[#2B579A] border-[#2B579A]/20 hover:bg-[#2B579A] hover:text-white hover:border-[#2B579A]' },
  { name: 'Excel', icon: 'X', color: 'bg-[#217346]/10 text-[#217346] border-[#217346]/20 hover:bg-[#217346] hover:text-white hover:border-[#217346]' },
  { name: 'PowerPoint', icon: 'P', color: 'bg-[#B7472A]/10 text-[#B7472A] border-[#B7472A]/20 hover:bg-[#B7472A] hover:text-white hover:border-[#B7472A]' },
  { name: 'Copilot', icon: 'Cp', color: 'bg-[#00A4EF]/10 text-[#00A4EF] border-[#00A4EF]/20 hover:bg-[#00A4EF] hover:text-white hover:border-[#00A4EF]' },
  { name: 'Outlook', icon: 'O', color: 'bg-[#0078D7]/10 text-[#0078D7] border-[#0078D7]/20 hover:bg-[#0078D7] hover:text-white hover:border-[#0078D7]' },
];

export default function FreelancerDashboard() {
  const [requestAccepted, setRequestAccepted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const getStatusColor = (status) => {
    if (status === 'In Progress') return 'bg-[#0078FF]/10 text-[#0078FF] border-[#0078FF]/20';
    if (status === 'Reviewing') return 'bg-[#FFB400]/10 text-[#FFB400] border-[#FFB400]/30';
    return 'bg-[#EBF4FA] text-[#64748B] border-[#EBF4FA]';
  };

  const handleSaveProgress = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10">
        
        {/* --- WELCOME BANNER --- */}
        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden group mb-8 lg:mb-10 border border-[#1E293B]">
          <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-[#A259FF]/30 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#A259FF]/50 transition-colors duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Welcome back, Alex ✨</h2>
              <p className="text-[#94A3B8] font-medium text-sm sm:text-base max-w-2xl">You have 1 priority delivery due today.</p>
            </div>
          </div>
        </div>

        {/* MOBILE-ONLY QUICK ACTIONS HUB */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 md:hidden">
          <Link to="/freelancer/earnings" className="bg-white p-4 sm:p-5 rounded-[2rem] shadow-sm border-2 border-[#EBF4FA] flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <BanknotesIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#00A86B]" />
            <span className="text-xs sm:text-sm font-bold text-[#0F172A]">My Wallet</span>
          </Link>
          <Link to="/freelancer/chat" className="bg-white p-4 sm:p-5 rounded-[2rem] shadow-sm border-2 border-[#EBF4FA] flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <ChatBubbleLeftRightIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0078FF]" />
            <span className="text-xs sm:text-sm font-bold text-[#0F172A]">Messages</span>
          </Link>
          <Link to="/profile" className="bg-white p-4 sm:p-5 rounded-[2rem] shadow-sm border-2 border-[#EBF4FA] flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <PencilSquareIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#A259FF]" />
            <span className="text-xs sm:text-sm font-bold text-[#0F172A]">Edit Profile</span>
          </Link>
          <button onClick={handleSaveProgress} disabled={isSaving} className="bg-white p-4 sm:p-5 rounded-[2rem] shadow-sm border-2 border-[#EBF4FA] flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <CloudArrowUpIcon className={`w-7 h-7 sm:w-8 sm:h-8 ${isSaving ? 'text-[#FFB400] animate-pulse' : 'text-[#0F172A]'}`} />
            <span className="text-xs sm:text-sm font-bold text-[#0F172A]">{isSaving ? 'Saving...' : 'Save Cloud'}</span>
          </button>
        </div>

        {/* =========================================
            WORKSPACE TOOLS (DESKTOP ONLY) 
            ========================================= */}
        <div className="hidden lg:block mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#0F172A] tracking-tight flex items-center gap-2">
              <SquaresPlusIcon className="w-7 h-7 text-[#0078FF]" /> Connected Workspace
            </h2>
            <span className="text-sm font-bold text-[#94A3B8] hover:text-[#0078FF] cursor-pointer transition-colors flex items-center gap-1.5">
              Manage Integrations <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </span>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            
            {/* Adobe Panel */}
            <div className="bg-white p-6 lg:p-8 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm relative overflow-hidden group hover:border-[#A259FF]/30 transition-colors">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#A259FF]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#A259FF]/10 transition-all"></div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-sm font-black text-[#64748B] uppercase tracking-wider">Creative Cloud (Adobe)</h3>
                <span className="px-2.5 py-1 bg-[#00A86B]/10 text-[#00A86B] text-[10px] font-black uppercase tracking-wider rounded-md border border-[#00A86B]/20">Active</span>
              </div>
              <div className="flex items-center justify-between gap-4 w-full relative z-10">
                {ADOBE_APPS.map((app) => (
                  <div key={app.name} className="flex flex-col items-center gap-2 group/btn cursor-pointer flex-1">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300 group-hover/btn:-translate-y-1 border ${app.color}`}>
                      {app.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] text-center transition-colors group-hover/btn:text-[#0F172A] truncate w-full px-1">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MS Panel */}
            <div className="bg-white p-6 lg:p-8 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm relative overflow-hidden group hover:border-[#0078FF]/30 transition-colors">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#0078FF]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#0078FF]/10 transition-all"></div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-sm font-black text-[#64748B] uppercase tracking-wider">Productivity (Microsoft 365)</h3>
                <span className="px-2.5 py-1 bg-[#00A86B]/10 text-[#00A86B] text-[10px] font-black uppercase tracking-wider rounded-md border border-[#00A86B]/20">Active</span>
              </div>
              <div className="flex items-center justify-between gap-4 w-full relative z-10">
                {MS_APPS.map((app) => (
                  <div key={app.name} className="flex flex-col items-center gap-2 group/btn cursor-pointer flex-1">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300 group-hover/btn:-translate-y-1 border ${app.color}`}>
                      {app.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] text-center transition-colors group-hover/btn:text-[#0F172A] truncate w-full px-1">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= STATS OVERVIEW (Hidden on mobile) ================= */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm flex items-center gap-5">
            <div className="p-4 bg-[#0078FF]/10 rounded-2xl flex-shrink-0"><BriefcaseIcon className="w-8 h-8 text-[#0078FF]" /></div>
            <div className="min-w-0">
              <p className="text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight">3</p>
              <p className="text-[11px] lg:text-xs font-bold text-[#94A3B8] uppercase tracking-wider truncate">Active Projects</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm flex items-center gap-5">
            <div className="p-4 bg-[#A259FF]/10 rounded-2xl flex-shrink-0"><BanknotesIcon className="w-8 h-8 text-[#A259FF]" /></div>
            <div className="min-w-0">
              <p className="text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight">$1,450</p>
              <p className="text-[11px] lg:text-xs font-bold text-[#94A3B8] uppercase tracking-wider truncate">Cleared Earnings</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm flex items-center gap-5">
            <div className="p-4 bg-[#00A86B]/10 rounded-2xl flex-shrink-0"><ChartBarIcon className="w-8 h-8 text-[#00A86B]" /></div>
            <div className="min-w-0">
              <p className="text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight">100%</p>
              <p className="text-[11px] lg:text-xs font-bold text-[#94A3B8] uppercase tracking-wider truncate">Job Success Score</p>
            </div>
          </div>
        </div>

        {/* ================= ACTIVE JOBS SECTION ================= */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Current Active Jobs</h2>
            <button 
              onClick={handleSaveProgress}
              disabled={isSaving}
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                isSaving ? 'bg-[#00A86B]/20 text-[#00A86B] cursor-default' : 'bg-white border-2 border-[#0078FF]/20 text-[#0078FF] hover:bg-[#0078FF]/10 hover:border-[#0078FF]/40 active:scale-95'
              }`}
            >
              {isSaving ? <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><CloudArrowUpIcon className="w-5 h-5" /></motion.div>Saving to Cloud...</> : <><CloudArrowUpIcon className="w-5 h-5" />Save Progress</>}
            </button>
          </div>
          
          <div className="space-y-6">
            {ACTIVE_JOBS.map((job) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`bg-white rounded-[2rem] border-2 shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row gap-6 justify-between transition-all hover:shadow-[0_10px_40px_rgba(15,23,42,0.04)] ${job.category === 'priority' ? 'border-[#0078FF]/30 hover:border-[#0078FF]' : 'border-[#00A86B]/30 hover:border-[#00A86B]'}`}>
                
                {/* Left Side: Info */}
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-wider">{job.id}</span>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-lg border ${getStatusColor(job.status)} uppercase tracking-wide`}>{job.status}</span>
                  </div>
                  <Link to="/freelancer/project/details" className="inline-block group mb-3">
                    <h2 className="text-xl lg:text-2xl font-black text-[#0F172A] group-hover:text-[#A259FF] transition-colors cursor-pointer leading-tight">{job.title}</h2>
                  </Link>
                  <div className="flex flex-wrap items-center gap-3 lg:gap-4 text-sm font-medium text-[#64748B]">
                    <span className="flex items-center gap-1.5 text-[#0F172A] font-bold bg-[#EBF4FA] px-3 py-1 rounded-lg">{job.type}</span>
                    <span className="flex items-center gap-1.5 border border-[#EBF4FA] px-3 py-1 rounded-lg"><UserIcon className="w-4 h-4 text-[#A259FF]"/> {job.client}</span>
                  </div>
                </div>

                {/* Right Side: Action/Progress */}
                <div className="w-full lg:w-[320px] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#EBF4FA] pt-6 lg:pt-0 lg:pl-8 mt-2 lg:mt-0">
                  <div className="mb-6">
                    <div className="flex justify-between items-end text-xs font-bold text-[#64748B] mb-2">
                      <span className="uppercase tracking-wider">Completion</span>
                      <span className="text-sm font-black text-[#0F172A] leading-none">{job.progress}%</span>
                    </div>
                    <div className="w-full bg-[#EBF4FA] rounded-full h-2.5 overflow-hidden">
                      <div className={`h-full rounded-full ${job.category === 'side' ? 'bg-[#00A86B]' : 'bg-gradient-to-r from-[#0078FF] to-[#A259FF]'}`} style={{ width: `${job.progress}%` }}></div>
                    </div>
                  </div>
                  
                  {/* Desktop Buttons */}
                  <div className="hidden md:flex items-center gap-3">
                    <div className="bg-[#F8FAFC] px-4 py-3 rounded-xl border border-[#EBF4FA] min-w-[90px] text-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-[#94A3B8] uppercase block leading-none mb-1">Payout</span>
                      <span className="text-xl font-black text-[#0F172A] leading-none block">{job.payout}</span>
                    </div>
                    <Link to="/freelancer/upload" className="flex-grow py-3.5 px-4 bg-[#0078FF] text-white text-sm font-bold rounded-xl hover:bg-[#1E293B] shadow-md flex items-center justify-center gap-2 transition-all active:scale-95">
                      Deliver <ArrowUpTrayIcon className="w-4 h-4"/>
                    </Link>
                  </div>
                  
                  {/* Mobile Buttons */}
                  <div className="grid grid-cols-2 gap-3 md:hidden">
                    <Link to="/freelancer/task/tracker" className="text-center bg-[#EBF4FA] text-[#0078FF] py-3.5 px-2 rounded-xl text-xs sm:text-sm font-bold hover:bg-[#0078FF]/20 transition-all flex items-center justify-center gap-1.5">
                      <ArrowPathIcon className="w-4 h-4" /> Tasks
                    </Link>
                    <Link to="/freelancer/upload" className="py-3.5 px-4 bg-[#0F172A] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-[#1E293B] shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95">
                      Deliver <ArrowUpTrayIcon className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}