// src/pages/customer/Dashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';
import { 
  SparklesIcon, ExclamationCircleIcon, BookOpenIcon, 
  CodeBracketIcon, ChatBubbleLeftEllipsisIcon, ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const actionItems = [
  { id: 1, title: 'Enhancement Ready', desc: 'The Freelancer has delivered your requested notebook enhancement.', time: '1 hour ago', urgent: false },
];

const purchasedTemplates = [
  { id: 'AST-01', title: 'Creative Dark Mode Notebook', type: 'Digital Notebook', purchased: 'Oct 12' },
  { id: 'AST-02', title: 'SaaS Admin Architecture', type: 'Custom Template', purchased: 'Oct 15' },
];

const customOrders = [
  { id: 'ORD-9012', title: 'Full-Stack MERN Application', freelancer: 'Alex Vance', status: 'In Review', progress: 100 },
  { id: 'ORD-9044', title: 'Mobile App UI (Adobe XD)', freelancer: 'Sarah UI', status: 'In Progress', progress: 45 },
];

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* HERO BANNER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-[#882FF6] to-[#6882DD] rounded-[2rem] p-8 sm:p-10 mb-8 text-white shadow-[0_10px_30px_rgba(136,47,246,0.2)] relative overflow-hidden flex flex-col sm:flex-row items-center justify-between">
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10 text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 flex items-center justify-center sm:justify-start gap-3">
              Welcome back, David! <SparklesIcon className="w-8 h-8 text-[#FBC835]" />
            </h1>
            <p className="text-white/90 font-medium text-lg">Manage your purchased templates and active custom projects.</p>
          </div>
          <div className="relative z-10 flex gap-4">
            <Link to="/platform-assets" className="px-6 py-3.5 bg-white text-[#882FF6] font-bold rounded-xl shadow-lg hover:bg-[#EBF4FA] transition-colors active:scale-95 flex items-center gap-2">
              Browse Platform Assets
            </Link>
          </div>
        </motion.div>

{/* --- CUSTOM REQUEST BANNER --- */}
<div className="bg-[#0F172A] p-6 sm:p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden group mb-10 border border-[#1E293B]">
  {/* Fancy Background Glow Effect */}
  <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-[#882FF6]/30 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#882FF6]/50 transition-colors duration-500"></div>
  
  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <h2 className="text-2xl font-black text-white mb-2">Need a custom build?</h2>
      <p className="text-[#94A3B8] font-medium max-w-md">
        Describe your exact requirements for MERN or Adobe XD and get matched directly with a top-tier freelancer.
      </p>
    </div>
    
    <Link 
      to="/customer/request" 
      className="inline-flex items-center gap-2 px-8 py-4 bg-[#882FF6] hover:bg-[#6882DD] text-white font-bold rounded-xl shadow-[0_10px_25px_rgba(136,47,246,0.3)] transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
    >
      <PlusIcon className="w-5 h-5 font-bold" /> Post a Custom Request
    </Link>
  </div>
</div>
{/* ------------------------------- */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            
            {/* PLATFORM ASSETS (NOTEBOOKS/TEMPLATES) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.04)] p-6 sm:p-8 border-t-4 border-[#0F172A]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black text-[#0F172A] flex items-center gap-2">
                  <BookOpenIcon className="w-6 h-6 text-[#882FF6]" /> My Purchased Templates & Notebooks
                </h2>
              </div>
              <div className="space-y-4">
                {purchasedTemplates.map((asset) => (
                  <div key={asset.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border-2 border-[#EBF4FA] bg-white gap-4 transition-colors hover:border-[#882FF6]/30">
                    <div>
                      <span className="text-[11px] font-bold text-white bg-[#0F172A] px-2.5 py-1 rounded-md uppercase tracking-wider">{asset.type}</span>
                      <h3 className="font-bold text-[#0F172A] mt-2 text-lg">{asset.title}</h3>
                    </div>
                    {/* Triggers a request to freelancers for enhancements */}
                    <button className="px-5 py-3 bg-[#882FF6] text-white text-sm font-bold rounded-xl hover:bg-[#6882DD] transition-all shadow-md active:scale-95 whitespace-nowrap">
                      Request Enhancement
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ACTIVE CUSTOM PROJECTS (MERN/XD) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border-t-4 border-[#6882DD]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black text-[#0F172A] flex items-center gap-2">
                  <CodeBracketIcon className="w-6 h-6 text-[#6882DD]" /> Active Freelance Jobs
                </h2>
                <Link to="/customer/orders" className="text-sm font-bold text-[#882FF6] hover:text-[#6882DD] transition-colors">Manage All</Link>
              </div>
              
              <div className="space-y-4">
                {customOrders.map((order, i) => (
                  <div key={i} className="p-5 border-2 border-[#EBF4FA] rounded-2xl hover:border-[#6882DD]/30 transition-all duration-300 group cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">{order.id}</span>
                        <h3 className="font-bold text-[#0F172A] mt-0.5 group-hover:text-[#6882DD] transition-colors">{order.title}</h3>
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-lg ${order.status === 'In Review' ? 'bg-[#FBC835]/20 text-[#A67B00]' : 'bg-[#6882DD]/15 text-[#6882DD]'}`}>{order.status}</span>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <p className="text-sm text-[#64748B] font-medium flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-[#EBF4FA] flex items-center justify-center text-[10px] text-[#0F172A] font-bold">{order.freelancer.charAt(0)}</span>{order.freelancer}</p>
                      <div className="w-1/3 min-w-[100px]">
                        <div className="flex justify-between text-[10px] font-bold text-[#64748B] mb-1.5"><span>Progress</span><span className="text-[#0F172A]">{order.progress}%</span></div>
                        <div className="w-full bg-[#EBF4FA] rounded-full h-2 overflow-hidden"><div className={`h-full rounded-full ${order.progress === 100 ? 'bg-[#00A86B]' : 'bg-gradient-to-r from-[#6882DD] to-[#882FF6]'}`} style={{ width: `${order.progress}%` }}></div></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            
            {/* Needs Attention Widget */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.04)] p-6 sm:p-8 border-t-4 border-[#FBC835]">
              <h2 className="text-xl font-black text-[#0F172A] mb-5 flex items-center gap-2">
                <ExclamationCircleIcon className="w-6 h-6 text-[#FBC835]" /> Needs Attention
              </h2>
              <div className="space-y-4">
                {actionItems.map((item) => (
                  <div key={item.id} className="p-5 rounded-2xl bg-[#FBC835]/10 border border-[#FBC835]/30">
                    <h3 className="font-bold text-[#A67B00]">{item.title}</h3>
                    <p className="text-sm text-[#475569] mt-1 font-medium">{item.desc}</p>
                    <button className="mt-4 px-4 py-2.5 w-full rounded-xl text-sm font-bold bg-[#FBC835] text-[#0F172A] hover:bg-[#E5B52A] transition-colors shadow-sm">Review Now</button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Inbox */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.04)] p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black text-[#0F172A] flex items-center gap-2">
                  <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-[#6882DD]" /> Inbox
                </h2>
              </div>
              <div className="space-y-2">
                <div className="p-4 rounded-2xl cursor-pointer transition-all bg-[#882FF6]/5 border border-[#882FF6]/20 hover:bg-[#882FF6]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-xs font-bold">AV</div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold text-[#0F172A]">Alex Vance</h4>
                        <span className="w-2 h-2 rounded-full bg-[#882FF6]"></span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm line-clamp-2 text-[#0F172A] font-medium">Hey David! I just deployed the Node.js backend. Let me know what you think.</p>
                </div>
              </div>
              <Link to="/customer/chat" className="mt-4 w-full py-3 border-2 border-[#EBF4FA] text-[#0F172A] font-bold rounded-xl hover:bg-[#EBF4FA] transition-colors flex items-center justify-center gap-2">
                Open Message Center <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}