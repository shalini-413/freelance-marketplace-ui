// src/pages/freelancer/EarningsWallet.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownTrayIcon, BanknotesIcon, 
  ShieldCheckIcon, ArrowPathIcon, CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function EarningsWallet() {
  const [isCleared, setIsCleared] = useState(false);

  // Read from our "fake database" when the component loads
  useEffect(() => {
    if (localStorage.getItem('demo_payment_cleared') === 'true') {
      setIsCleared(true);
    }
  }, []);

  // Dynamic Math! If cleared, $850 moves from pending to available
  const availableBalance = isCleared ? "1,450.00" : "600.00";
  const pendingBalance = isCleared ? "450.00" : "1,300.00"; 
  const totalEarned = "12,840.00"; // All-time stays the same

  const TRANSACTIONS = [
    { id: 'TXN-901', type: 'MERN Stack', job: 'E-Commerce Backend Build', client: 'David Smith', date: 'Today', amount: '+$850.00', status: isCleared ? 'Cleared' : 'Pending' },
    { id: 'TXN-902', type: 'Notebook', job: 'Enhance: Dark Mode Notebook', client: 'Sarah L.', date: 'Oct 18, 2024', amount: '+$50.00', status: 'Pending' },
    { id: 'TXN-903', type: 'Adobe XD', job: 'Fintech App UI Design', client: 'TechCorp', date: 'Oct 20, 2024', amount: '+$400.00', status: 'Pending' },
    { id: 'TXN-904', type: 'Withdrawal', job: 'Bank Transfer', client: 'Chase Bank ****4451', date: 'Oct 01, 2024', amount: '-$1,200.00', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#882FF6]/20 selection:text-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">Earnings & Wallet</h1>
            <p className="text-[16px] text-[#64748B] font-medium mt-1">Manage your cleared funds and track pending escrows.</p>
          </div>
          {/* A handy reset button for demo purposes */}
          <button 
            onClick={() => { localStorage.removeItem('demo_payment_cleared'); window.location.reload(); }} 
            className="text-xs font-bold text-[#6882DD] hover:underline"
          >
            Reset Demo Data
          </button>
        </div>

        {/* TOP KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-[#882FF6] to-[#6882DD] p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-white/20 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <BanknotesIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 font-bold text-xs uppercase tracking-wider mb-1">Available for Withdrawal</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">${availableBalance}</h2>
              <button className="mt-8 w-full py-3.5 bg-white text-[#882FF6] hover:bg-[#EBF4FA] font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                Withdraw Funds <ArrowDownTrayIcon className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] flex flex-col justify-center">
            <div className="w-12 h-12 bg-[#FBC835]/10 rounded-xl flex items-center justify-center mb-4">
              <ArrowPathIcon className="w-6 h-6 text-[#A67B00]" />
            </div>
            <p className="text-[#94A3B8] font-bold text-xs uppercase tracking-wider mb-1">Pending Clearance (Escrow)</p>
            <h2 className="text-3xl font-black text-[#0F172A]">${pendingBalance}</h2>
            <p className="text-xs font-bold text-[#64748B] mt-3">Funds clear automatically once the customer approves the delivery.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] flex flex-col justify-center">
            <div className="w-12 h-12 bg-[#00A86B]/10 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-6 h-6 text-[#00A86B]" />
            </div>
            <p className="text-[#94A3B8] font-bold text-xs uppercase tracking-wider mb-1">Net Earned (All Time)</p>
            <h2 className="text-3xl font-black text-[#0F172A]">${totalEarned}</h2>
            <p className="text-xs font-bold text-[#64748B] mt-3 flex items-center gap-1">
              <CheckCircleIcon className="w-4 h-4 text-[#00A86B]"/> 100% Success Rate
            </p>
          </motion.div>
        </div>

        {/* TRANSACTIONS TABLE */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-[#EBF4FA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F8FAFC]">
            <h2 className="text-xl font-black text-[#0F172A]">Transaction History</h2>
            <button className="text-sm font-bold text-[#6882DD] hover:text-[#882FF6] transition-colors border border-[#6882DD]/30 px-4 py-2 rounded-lg bg-white">
              Download CSV
            </button>
          </div>
          
          <div className="divide-y divide-[#EBF4FA]">
            {TRANSACTIONS.map((txn, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 sm:p-8 items-center hover:bg-[#EBF4FA]/30 transition-colors">
                
                <div className="col-span-1 sm:col-span-5 flex flex-col justify-center">
                  <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-wider mb-0.5">{txn.id} • {txn.type}</span>
                  <h3 className="text-sm font-bold text-[#0F172A]">{txn.job}</h3>
                  <p className="text-xs font-medium text-[#64748B] mt-0.5">{txn.client}</p>
                </div>
                <div className="col-span-1 sm:col-span-3 text-sm font-bold text-[#475569]">{txn.date}</div>
                <div className="col-span-1 sm:col-span-2">
                  <span className={`text-lg font-black ${txn.amount.includes('+') ? 'text-[#00A86B]' : 'text-[#0F172A]'}`}>{txn.amount}</span>
                </div>
                <div className="col-span-1 sm:col-span-2 text-left sm:text-right">
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border uppercase tracking-wide inline-block ${
                    txn.status === 'Cleared' || txn.status === 'Completed' ? 'bg-[#00A86B]/10 text-[#00A86B] border-[#00A86B]/20' : 
                    'bg-[#FBC835]/10 text-[#A67B00] border-[#FBC835]/30'
                  }`}>
                    {txn.status}
                  </span>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}