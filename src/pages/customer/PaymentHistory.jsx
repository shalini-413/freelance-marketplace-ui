// src/pages/customer/PaymentHistory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownTrayIcon, 
  BanknotesIcon,
  ReceiptPercentIcon
} from '@heroicons/react/24/outline';

const TRANSACTIONS = [
  { id: 'TXN-00981', date: 'Oct 24, 2026', description: 'Full-Stack MERN E-Commerce Build (Milestone 1)', amount: '$425.00', status: 'Completed', method: '•••• 4242' },
  { id: 'TXN-00965', date: 'Oct 15, 2026', description: 'SaaS Admin Architecture Template', amount: '$89.00', status: 'Completed', method: '•••• 4242' },
  { id: 'TXN-00942', date: 'Oct 12, 2026', description: 'Creative Dark Mode Notebook', amount: '$29.00', status: 'Completed', method: 'PayPal' },
  { id: 'TXN-00910', date: 'Sep 28, 2026', description: 'Custom Logo Design (Refund)', amount: '-$150.00', status: 'Refunded', method: '•••• 4242' },
  { id: 'TXN-00899', date: 'Sep 15, 2026', description: 'Mobile App UI Wireframes', amount: '$400.00', status: 'Completed', method: '•••• 4242' },
];

export default function PaymentHistory() {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-[#00A86B]/10 text-[#00A86B] border-[#00A86B]/20';
      case 'Pending': return 'bg-[#FFB400]/10 text-[#FFB400] border-[#FFB400]/30';
      case 'Refunded': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-[#EBF4FA] text-[#64748B]';
    }
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-2">Payment History</h1>
          <p className="text-[16px] text-[#64748B] font-medium">Manage your billing details and download past invoices.</p>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm flex items-center gap-5">
            <div className="p-4 bg-[#0078FF]/10 rounded-2xl"><BanknotesIcon className="w-8 h-8 text-[#0078FF]" /></div>
            <div>
              <p className="text-3xl font-black text-[#0F172A]">$943.00</p>
              <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Total Spent</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm flex items-center gap-5">
            <div className="p-4 bg-[#00A86B]/10 rounded-2xl"><ReceiptPercentIcon className="w-8 h-8 text-[#00A86B]" /></div>
            <div>
              <p className="text-3xl font-black text-[#0F172A]">5</p>
              <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Total Invoices</p>
            </div>
          </motion.div>
        </div>

        {/* TRANSACTIONS TABLE */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-[2rem] border-2 border-[#EBF4FA] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b-2 border-[#EBF4FA]">
                  <th className="px-6 py-5 text-xs font-black text-[#94A3B8] uppercase tracking-wider">Transaction ID</th>
                  <th className="px-6 py-5 text-xs font-black text-[#94A3B8] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-5 text-xs font-black text-[#94A3B8] uppercase tracking-wider">Description</th>
                  <th className="px-6 py-5 text-xs font-black text-[#94A3B8] uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-5 text-xs font-black text-[#94A3B8] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-5 text-xs font-black text-[#94A3B8] uppercase tracking-wider text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBF4FA]">
                {TRANSACTIONS.map((txn) => (
                  <tr key={txn.id} className="hover:bg-[#F8FAFC] transition-colors group">
                    <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[#64748B]">{txn.id}</td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-[#0F172A]">{txn.date}</td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#0078FF] transition-colors line-clamp-1">{txn.description}</p>
                      <p className="text-xs text-[#94A3B8] font-medium mt-0.5">{txn.method}</p>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm font-black text-[#0F172A]">{txn.amount}</td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-wide rounded-lg border ${getStatusColor(txn.status)}`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right">
                      <button className="p-2 bg-white border-2 border-[#EBF4FA] rounded-xl text-[#0F172A] hover:text-[#0078FF] hover:border-[#0078FF]/30 hover:bg-[#0078FF]/5 transition-all active:scale-95 shadow-sm inline-flex">
                        <ArrowDownTrayIcon className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}