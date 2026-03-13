import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpenIcon, CodeBracketIcon, PaintBrushIcon, 
  ArrowRightIcon, ClockIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const TABS = [
  { id: 'active', label: 'Active Freelance Jobs' },
  { id: 'assets', label: 'My Platform Assets' },
  { id: 'completed', label: 'Completed' },
];

const MOCK_ORDERS = [
  { id: 'ORD-9012', type: 'mern', title: 'Full-Stack MERN E-Commerce Build', freelancer: 'Alex Vance', status: 'In Progress', date: 'Oct 20, 2024', amount: '$850.00', category: 'active' },
  { id: 'ORD-9044', type: 'xd', title: 'Mobile App UI (Adobe XD)', freelancer: 'Sarah UI', status: 'Reviewing', date: 'Oct 18, 2024', amount: '$400.00', category: 'active' },
  { id: 'AST-01', type: 'asset', title: 'Creative Dark Mode Notebook', freelancer: 'Platform Asset', status: 'Purchased', date: 'Oct 12, 2024', amount: '$29.00', category: 'assets' },
  { id: 'ILL-022', type: 'illustrator', title: 'Custom Vector Illustration', freelancer: 'Max Art', status: 'Delivered', date: 'Oct 05, 2024', amount: '$150.00', category: 'completed' },
];

export default function OrdersList() {
  const [activeTab, setActiveTab] = useState('active');
  const filteredOrders = MOCK_ORDERS.filter(order => order.category === activeTab);

  const getStatusColor = (status) => {
    if (status === 'In Progress') return 'bg-[#6882DD]/10 text-[#6882DD] border-[#6882DD]/20';
    if (status === 'Reviewing') return 'bg-[#FBC835]/10 text-[#A67B00] border-[#FBC835]/30';
    if (status === 'Purchased' || status === 'Delivered') return 'bg-[#00A86B]/10 text-[#00A86B] border-[#00A86B]/20';
    return 'bg-[#EBF4FA] text-[#64748B] border-[#EBF4FA]';
  };

  const getIcon = (type) => {
    if (type === 'asset') return <BookOpenIcon className="w-6 h-6 text-[#882FF6]" />;
    if (type === 'mern') return <CodeBracketIcon className="w-6 h-6 text-[#6882DD]" />;
    if (type === 'xd' || type === 'illustrator') return <PaintBrushIcon className="w-6 h-6 text-[#00A86B]" />;
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">Order Management</h1>
            <p className="text-[16px] text-[#64748B] font-medium mt-1">Track your active freelance builds and purchased templates.</p>
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar bg-white p-1.5 rounded-2xl shadow-sm border border-[#EBF4FA] w-fit max-w-full">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id 
                  ? 'bg-[#0F172A] text-white shadow-md' 
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-[#EBF4FA]/50 border-b border-[#EBF4FA] text-xs font-black text-[#94A3B8] uppercase tracking-wider">
            <div className="col-span-5">Project / Asset Details</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Amount</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          <div className="divide-y divide-[#EBF4FA]">
            <AnimatePresence mode="wait">
              {filteredOrders.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-16 text-center">
                  <ClockIcon className="w-16 h-16 text-[#94A3B8] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0F172A]">No orders found</h3>
                  <p className="text-[#64748B] mt-2 font-medium">You don't have any {activeTab} orders at the moment.</p>
                </motion.div>
              ) : (
                filteredOrders.map((order) => (
                  <motion.div 
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-[#EBF4FA]/30 transition-colors group"
                  >
                    <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                      <div className="p-3 bg-white border-2 border-[#EBF4FA] rounded-xl shadow-sm group-hover:border-[#882FF6]/30 transition-colors">
                        {getIcon(order.type)}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-wider">{order.id}</span>
                        <h3 className="text-sm font-bold text-[#0F172A] line-clamp-1 group-hover:text-[#882FF6] transition-colors">{order.title}</h3>
                        <p className="text-xs font-medium text-[#64748B] mt-0.5">by {order.freelancer}</p>
                      </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 text-sm font-bold text-[#475569]">{order.date}</div>
                    <div className="col-span-1 md:col-span-2 text-sm font-black text-[#0F172A]">{order.amount}</div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border ${getStatusColor(order.status)} uppercase tracking-wide inline-block`}>
                        {order.status}
                      </span>
                    </div>
                    
                    <div className="col-span-1 text-left md:text-right mt-4 md:mt-0">
                      {order.category === 'assets' ? (
                        <button className="px-5 py-2.5 bg-[#0F172A] text-white text-xs font-bold rounded-xl hover:bg-[#1E293B] shadow-md transition-all active:scale-95">
                          Download
                        </button>
                      ) : (
                        <Link to="/customer/order/details" className="inline-flex p-2.5 bg-[#EBF4FA] border border-transparent text-[#6882DD] rounded-xl hover:border-[#6882DD]/30 hover:text-[#882FF6] transition-colors shadow-sm">
                          <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}