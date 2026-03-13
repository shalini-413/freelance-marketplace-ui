// src/pages/customer/CustomRequest.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PaperAirplaneIcon, DocumentPlusIcon,
  CurrencyDollarIcon, CalendarDaysIcon, CodeBracketIcon
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

export default function CustomRequest() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/customer/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="mb-8">
          <Link to="/customer/dashboard" className="text-sm font-bold text-[#6882DD] hover:text-[#882FF6] transition-colors mb-2 inline-block">
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">Post a Custom Request</h1>
          <p className="text-[16px] text-[#64748B] font-medium mt-1">
            Need a custom MERN app or specific UI design? Describe it here to get matched with a top freelancer.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] overflow-hidden">
          
          <div className="bg-[#F8FAFC] p-6 border-b border-[#EBF4FA] flex items-center gap-3">
            <DocumentPlusIcon className="w-6 h-6 text-[#882FF6]" />
            <h2 className="text-lg font-bold text-[#0F172A]">Project Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0F172A]">Project Title</label>
                <input type="text" placeholder="e.g., Build a Real Estate SaaS Platform" required className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-[1rem] focus:border-[#882FF6] focus:ring-4 focus:ring-[#882FF6]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#F8FAFC] focus:bg-white" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0F172A]">Category Focus</label>
                <div className="relative">
                  <CodeBracketIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6882DD]" />
                  <select required className="w-full pl-12 pr-5 py-4 border-2 border-[#EBF4FA] rounded-[1rem] focus:border-[#882FF6] focus:ring-4 focus:ring-[#882FF6]/10 outline-none text-[#0F172A] font-bold transition-all bg-[#F8FAFC] focus:bg-white appearance-none cursor-pointer">
                    <option value="">Select a category...</option>
                    <option value="mern">MERN Stack Development</option>
                    <option value="xd">Adobe XD UI/UX Design</option>
                    <option value="illustrator">Illustrator Branding/Vectors</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#0F172A]">Detailed Description</label>
              <textarea rows="6" placeholder="Describe the features, pages, or designs you need. Be as specific as possible so freelancers can give you an accurate quote." required className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-[1rem] focus:border-[#882FF6] focus:ring-4 focus:ring-[#882FF6]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#F8FAFC] focus:bg-white resize-none"></textarea>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0F172A]">Estimated Budget (USD)</label>
                <div className="relative">
                  <CurrencyDollarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />
                  <input type="number" placeholder="e.g., 1500" required min="5" className="w-full pl-12 pr-5 py-4 border-2 border-[#EBF4FA] rounded-[1rem] focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/10 outline-none text-[#0F172A] font-bold transition-all bg-[#F8FAFC] focus:bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0F172A]">Desired Delivery Date</label>
                <div className="relative">
                  <CalendarDaysIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FBC835]" />
                  <input type="date" required className="w-full pl-12 pr-5 py-4 border-2 border-[#EBF4FA] rounded-[1rem] focus:border-[#FBC835] focus:ring-4 focus:ring-[#FBC835]/10 outline-none text-[#0F172A] font-bold transition-all bg-[#F8FAFC] focus:bg-white cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-[#EBF4FA] flex justify-end">
              <button type="submit" disabled={isSubmitting} className={`px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-2 transition-all shadow-md active:scale-95 ${isSubmitting ? 'bg-[#CBD5E1] cursor-not-allowed shadow-none' : 'bg-[#0F172A] hover:bg-[#1E293B]'}`}>
                {isSubmitting ? 'Posting Request...' : 'Submit to Freelancers'} <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
}