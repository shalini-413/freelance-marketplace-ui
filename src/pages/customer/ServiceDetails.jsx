// src/pages/customer/ServiceDetails.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon, CheckBadgeIcon, ClockIcon, 
  ArrowPathIcon, DocumentTextIcon, ShieldCheckIcon, CodeBracketIcon
} from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';

const SERVICE_DATA = {
  id: 3,
  type: 'mern',
  title: 'Full-Stack MERN E-Commerce Build',
  author: 'Alex Vance',
  authorRole: 'Senior Full-Stack Developer',
  price: '$850',
  deliveryTime: '14 Days',
  revisions: '3 Revisions',
  rating: '5.0',
  reviews: 44,
  img: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]',
  description: "I will build a highly scalable, secure, and blazing-fast e-commerce platform using MongoDB, Express, React, and Node.js. This includes a custom admin dashboard, payment gateway integration (Stripe/Razorpay), and fully responsive UI.",
  features: [
    'Custom React UI (No generic templates)',
    'Secure Node.js & Express API',
    'MongoDB Database Architecture',
    'User Authentication & Authorization',
    'Stripe Payment Integration',
    'Admin Dashboard for Orders'
  ]
};

export default function ServiceDetails() {
  const { id } = useParams(); // Grabs the ID from the URL (e.g., /service/3)
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <p className="text-sm font-bold text-[#64748B]">
          <Link to="/customer/dashboard" className="hover:text-[#882FF6]">Dashboard</Link> 
          <span className="mx-2">/</span> 
          <Link to="/services/mern" className="hover:text-[#882FF6]">Freelance Services</Link> 
          <span className="mx-2">/</span> 
          <span className="text-[#0F172A]">MERN Stack</span>
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT SIDE: Service Details */}
          <div className="lg:w-2/3 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] border border-[#EBF4FA]">
              <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight mb-4">
                {SERVICE_DATA.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-bold">AV</div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A] flex items-center gap-1">
                      {SERVICE_DATA.author} <CheckBadgeIcon className="w-4 h-4 text-[#882FF6]" />
                    </p>
                    <p className="text-xs font-medium text-[#64748B]">{SERVICE_DATA.authorRole}</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-[#EBF4FA]"></div>
                <div className="flex items-center gap-1.5">
                  <StarIcon className="w-5 h-5 text-[#FBC835] fill-current" />
                  <span className="font-bold text-[#0F172A]">{SERVICE_DATA.rating}</span>
                  <span className="text-[#94A3B8] font-medium">({SERVICE_DATA.reviews} reviews)</span>
                </div>
              </div>

              {/* Service Hero Image */}
              <div className={`w-full aspect-video rounded-2xl ${SERVICE_DATA.img} flex items-center justify-center relative overflow-hidden shadow-inner`}>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                <CodeBracketIcon className="w-24 h-24 text-white/20 relative z-10" />
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border border-[#EBF4FA] overflow-hidden">
              <div className="flex border-b border-[#EBF4FA]">
                <button onClick={() => setActiveTab('description')} className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === 'description' ? 'text-[#882FF6] border-b-2 border-[#882FF6] bg-[#882FF6]/5' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]/50'}`}>About This Service</button>
                <button onClick={() => setActiveTab('reviews')} className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === 'reviews' ? 'text-[#882FF6] border-b-2 border-[#882FF6] bg-[#882FF6]/5' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]/50'}`}>Client Reviews</button>
              </div>
              
              <div className="p-6 sm:p-8">
                {activeTab === 'description' && (
                  <div className="space-y-6 text-[#475569] leading-relaxed">
                    <p className="font-medium">{SERVICE_DATA.description}</p>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-4">What's Included:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICE_DATA.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckBadgeIcon className="w-5 h-5 text-[#00A86B] flex-shrink-0 mt-0.5" />
                            <span className="font-medium text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Sticky Pricing Box (Checkout) */}
          <div className="lg:w-1/3">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(15,23,42,0.06)] border-2 border-[#EBF4FA] sticky top-28">
              
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-black text-[#0F172A]">Project Scope</h2>
                <span className="text-3xl font-black text-[#882FF6]">{SERVICE_DATA.price}</span>
              </div>
              
              <p className="text-sm font-medium text-[#64748B] mb-6">
                Full-stack MERN build including database design, API creation, and frontend UI delivery.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm font-bold text-[#0F172A] p-3 bg-[#EBF4FA]/50 rounded-xl">
                  <div className="flex items-center gap-2"><ClockIcon className="w-5 h-5 text-[#6882DD]" /> Delivery Time</div>
                  <span>{SERVICE_DATA.deliveryTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-[#0F172A] p-3 bg-[#EBF4FA]/50 rounded-xl">
                  <div className="flex items-center gap-2"><ArrowPathIcon className="w-5 h-5 text-[#6882DD]" /> Revisions</div>
                  <span>{SERVICE_DATA.revisions}</span>
                </div>
              </div>

              {/* FIXED LINK TO CHECKOUT */}
              <Link to="/customer/checkout" className="w-full py-4 bg-[#882FF6] hover:bg-[#6882DD] text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(136,47,246,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 mb-4">
                Continue to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#94A3B8]">
                <ShieldCheckIcon className="w-4 h-4 text-[#00A86B]" />
                Payments are securely held in escrow.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}