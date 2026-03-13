// src/pages/freelancer/RevisionsView.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExclamationTriangleIcon, CloudArrowUpIcon, 
  PaperClipIcon, ArrowPathIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function RevisionsView() {
  const [files, setFiles] = useState([]);
  
  // Mock Data from Customer's Revision Request
  const REVISION_DATA = {
    id: 'ORD-9044',
    title: 'Mobile App UI (Adobe XD)',
    client: 'TechCorp',
    feedback: "The screens look amazing! However, could we change the primary button color on the Login screen to match our exact brand hex (#4F46E5)? Also, the font size on the Settings page feels a bit too small. Please upload the revised XD files.",
    deadline: 'Tomorrow, 5:00 PM'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to re-deliver files to customer
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="mb-8">
          <Link to="/freelancer/projects" className="text-sm font-bold text-[#6882DD] hover:text-[#882FF6] transition-colors mb-2 inline-block">
            &larr; Back to Job Queue
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">Revision Requested</h1>
        </div>

        {/* FEEDBACK BLOCK */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FBC835]/10 border-2 border-[#FBC835]/30 rounded-[2rem] p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <ExclamationTriangleIcon className="w-8 h-8 text-[#A67B00]" />
            <div>
              <h2 className="text-lg font-black text-[#A67B00] leading-none">Client Feedback</h2>
              <p className="text-sm font-bold text-[#A67B00]/70 mt-1 uppercase tracking-wider">{REVISION_DATA.client} • {REVISION_DATA.id}</p>
            </div>
          </div>
          <p className="text-[#0F172A] font-medium leading-relaxed text-lg bg-white/50 p-5 rounded-xl border border-[#FBC835]/20">
            "{REVISION_DATA.feedback}"
          </p>
          <div className="mt-4 flex items-center justify-between font-bold text-sm">
            <span className="text-[#A67B00]">New Deadline: {REVISION_DATA.deadline}</span>
          </div>
        </motion.div>

        {/* RE-UPLOAD FORM */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] overflow-hidden">
          <div className="bg-[#F8FAFC] p-6 border-b border-[#EBF4FA]">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <ArrowPathIcon className="w-5 h-5 text-[#882FF6]" /> Submit Revised Files
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Simplified Dropzone */}
            <div className="w-full border-2 border-dashed border-[#6882DD]/40 rounded-[1.5rem] bg-[#EBF4FA]/30 hover:bg-[#EBF4FA]/60 transition-colors flex flex-col items-center justify-center p-8 cursor-pointer">
              <CloudArrowUpIcon className="w-8 h-8 text-[#882FF6] mb-3" />
              <p className="text-[#0F172A] font-bold">Upload Fixed Files (.xd, .zip)</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                <PaperClipIcon className="w-4 h-4 text-[#6882DD]" /> Revision Notes
              </label>
              <textarea 
                rows="4"
                placeholder="Explain the changes you made based on their feedback..."
                className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-[1rem] focus:border-[#882FF6] focus:ring-4 focus:ring-[#882FF6]/10 outline-none text-[#0F172A] font-medium bg-[#F8FAFC] focus:bg-white resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
              Deliver Revision
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}