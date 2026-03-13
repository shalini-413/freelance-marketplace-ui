// src/pages/freelancer/UploadDeliver.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon, DocumentIcon, XMarkIcon, 
  CheckCircleIcon, PaperClipIcon, ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function UploadDeliver() {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ORDER_DATA = {
    id: 'ORD-9012',
    title: 'E-Commerce Backend Build (MERN)',
    client: 'David Smith',
    dueDate: 'Today, 11:59 PM',
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const mockFile = { name: 'mern-backend-final-v1.zip', size: '18.4 MB' };
    if (files.length === 0) {
      setFiles([...files, mockFile]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // --- SUCCESS SCREEN (Mobile Optimized) ---
  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#EBF4FA] px-4 font-sans selection:bg-[#A259FF]/20">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-sm sm:shadow-[0_15px_40px_rgba(15,23,42,0.06)] text-center max-w-md w-full border-2 border-[#EBF4FA]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#00A86B]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A86B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2 tracking-tight">Delivery Sent!</h2>
          <p className="text-sm sm:text-base text-[#64748B] font-medium mb-6 sm:mb-8 leading-relaxed">
            Your work has been securely delivered to <strong className="text-[#0F172A]">{ORDER_DATA.client}</strong>. You will be notified once they approve it and release the funds.
          </p>
          <Link to="/freelancer/projects" className="flex items-center justify-center w-full py-3.5 sm:py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-xl sm:rounded-2xl shadow-md transition-colors active:scale-95">
            Return to Queue
          </Link>
        </motion.div>
      </div>
    );
  }

  // --- MAIN UPLOAD SCREEN ---
  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        
        {/* HEADER - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <Link to="/freelancer/project/details" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0078FF] hover:text-[#A259FF] transition-colors mb-4 sm:mb-6 active:scale-95">
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Back to Job Queue
          </Link>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-2 sm:mb-3">Submit Delivery</h1>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-white border border-[#EBF4FA] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-black text-[#94A3B8] uppercase tracking-wider">{ORDER_DATA.id}</span>
            <p className="text-xs sm:text-[15px] text-[#64748B] font-medium">Delivering to <strong className="text-[#0F172A]">{ORDER_DATA.client}</strong></p>
          </div>
        </div>

        {/* MAIN CARD */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl sm:rounded-[2rem] shadow-sm sm:shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] overflow-hidden">
          
          <div className="bg-[#F8FAFC] p-4 sm:p-6 border-b border-[#EBF4FA] flex justify-between items-center">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A] truncate pr-4">{ORDER_DATA.title}</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            
            {/* DROPZONE - Mobile Optimized Sizing */}
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2 sm:mb-3">Upload Final Files</label>
              <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
                onClick={handleFileDrop} 
                className="w-full border-2 border-dashed border-[#0078FF]/40 rounded-2xl sm:rounded-[1.5rem] bg-[#EBF4FA]/30 hover:bg-[#EBF4FA]/60 transition-colors flex flex-col items-center justify-center p-6 sm:p-10 cursor-pointer group active:bg-[#EBF4FA]"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CloudArrowUpIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#A259FF]" />
                </div>
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1 text-center">Tap to attach files</p>
                <p className="text-[#64748B] text-xs sm:text-sm font-medium text-center">(Simulates adding a .zip file)</p>
              </div>

              {/* UPLOADED FILE ITEM */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-white border-2 border-[#EBF4FA] rounded-xl sm:rounded-[1rem]">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-[#A259FF]/10 rounded-lg flex-shrink-0"><DocumentIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#A259FF]" /></div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">{file.name}</p>
                          <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8]">{file.size}</p>
                        </div>
                      </div>
                      <button type="button" onClick={() => setFiles(files.filter((_, i) => i !== index))} className="p-2 text-[#94A3B8] hover:text-red-500 hover:bg-red-50 active:bg-red-100 rounded-lg transition-colors flex-shrink-0">
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TEXTAREA */}
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2 sm:mb-3 flex items-center gap-2">
                <PaperClipIcon className="w-4 h-4 text-[#0078FF]" /> Delivery Message
              </label>
              <textarea 
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a quick message for the client..."
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border-2 border-[#EBF4FA] rounded-xl sm:rounded-[1rem] focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium text-sm sm:text-base transition-all bg-[#F8FAFC] focus:bg-white resize-none"
                required
              ></textarea>
            </div>

            {/* SUBMIT BUTTON - Full width on mobile, right-aligned on desktop */}
            <div className="pt-4 sm:pt-6 border-t border-[#EBF4FA] flex justify-end">
              <button 
                type="submit" 
                disabled={isSubmitting || files.length === 0}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-white text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2 transition-all shadow-md active:scale-95 ${
                  isSubmitting || files.length === 0 
                  ? 'bg-[#CBD5E1] cursor-not-allowed shadow-none' 
                  : 'bg-[#A259FF] hover:bg-[#0078FF] shadow-[0_10px_25px_rgba(162,89,255,0.3)]'
                }`}
              >
                {isSubmitting ? 'Sending to Customer...' : 'Deliver Final Work'}
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
}