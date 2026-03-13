import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeBracketIcon, PaintBrushIcon, WrenchScrewdriverIcon, 
  ClockIcon, ArrowUpTrayIcon, UserIcon 
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const JOBS = [
  { id: 'ORD-9012', category: 'priority', type: 'MERN Stack', title: 'E-Commerce Backend Build', client: 'David Smith', due: 'Today', status: 'In Progress', progress: 95, payout: '$850' },
  { id: 'ORD-9044', category: 'priority', type: 'Adobe XD', title: 'Fintech App UI Design', client: 'TechCorp', due: 'Oct 24', status: 'Reviewing', progress: 40, payout: '$400' },
  { id: 'ENH-088', category: 'enhancement', type: 'Notebook Edit', title: 'Enhance: Dark Mode Notebook', client: 'Sarah L.', due: 'Oct 22', status: 'Just Assigned', progress: 0, payout: '$50' },
];

export default function MyProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredJobs = JOBS.filter(job => activeFilter === 'all' || job.category === activeFilter);

  const getStatusColor = (status) => {
    if (status === 'In Progress') return 'bg-[#6882DD]/10 text-[#6882DD] border-[#6882DD]/20';
    if (status === 'Reviewing') return 'bg-[#FBC835]/10 text-[#A67B00] border-[#FBC835]/30';
    return 'bg-[#EBF4FA] text-[#64748B] border-[#EBF4FA]';
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">My Jobs Queue</h1>
            <p className="text-[16px] text-[#64748B] font-medium mt-1">Manage your priorities, enhancements, and side jobs.</p>
          </div>
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={job.id} 
                className={`bg-white rounded-[2rem] border-2 shadow-sm p-6 sm:p-8 flex flex-col lg:flex-row gap-6 justify-between transition-all hover:shadow-[0_10px_40px_rgba(15,23,42,0.04)] ${
                  job.category === 'priority' ? 'border-[#6882DD]/30 hover:border-[#6882DD]' : 'border-[#882FF6]/30 hover:border-[#882FF6]'
                }`}
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-wider">{job.id}</span>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-lg border ${getStatusColor(job.status)} uppercase tracking-wide`}>{job.status}</span>
                  </div>
                  
                  {/* --- THIS IS THE FIX --- */}
                  {/* Wrapping the title in a Link component so it navigates to the details page */}
                  <Link to="/freelancer/project/details" className="inline-block group">
                    <h2 className="text-2xl font-black text-[#0F172A] mb-3 group-hover:text-[#882FF6] transition-colors cursor-pointer">
                      {job.title}
                    </h2>
                  </Link>
                  {/* ----------------------- */}
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#64748B]">
                    <span className="flex items-center gap-1.5 text-[#0F172A] font-bold bg-[#EBF4FA] px-3 py-1 rounded-lg">{job.type}</span>
                    <span className="flex items-center gap-1.5 border border-[#EBF4FA] px-3 py-1 rounded-lg"><UserIcon className="w-4 h-4 text-[#882FF6]"/> {job.client}</span>
                  </div>
                </div>

                <div className="lg:w-80 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#EBF4FA] pt-6 lg:pt-0 lg:pl-8">
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-[#64748B] mb-2"><span>Completion</span><span className="text-[#0F172A]">{job.progress}%</span></div>
                    <div className="w-full bg-[#EBF4FA] rounded-full h-2.5 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#6882DD] to-[#882FF6]" style={{ width: `${job.progress}%` }}></div></div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#F8FAFC] px-4 py-3 rounded-xl border border-[#EBF4FA] min-w-[90px] text-center">
                      <span className="text-[10px] font-bold text-[#94A3B8] uppercase block leading-none mb-1">Payout</span>
                      <span className="text-xl font-black text-[#0F172A] leading-none block">{job.payout}</span>
                    </div>
                    
                    {/* The Deliver button also links to the upload page */}
                    <Link to="/freelancer/upload" className="flex-grow py-3.5 px-4 bg-[#0078FF] text-white text-sm font-bold rounded-xl hover:bg-[#1E293B] shadow-md flex items-center justify-center gap-2 transition-all active:scale-95">
                      Deliver <ArrowUpTrayIcon className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}