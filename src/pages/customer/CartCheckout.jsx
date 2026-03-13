// src/pages/customer/CartCheckout.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCardIcon, ShieldCheckIcon, LockClosedIcon, 
  BuildingLibraryIcon, CheckBadgeIcon, QrCodeIcon
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

export default function CartCheckout() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'bank', or 'upi'

  // Mock Order Details mapping to your services
  const ORDER_DETAILS = {
    title: 'Full-Stack MERN E-Commerce Build',
    freelancer: 'Alex Vance',
    deliveryTime: '14 Days',
    price: 850.00,
    fee: 25.50, // 3% secure platform fee
  };

  const total = ORDER_DETAILS.price + ORDER_DETAILS.fee;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mocking the payment gateway and escrow lock
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/customer/orders'); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="mb-8">
          <Link to="/customer/services" className="text-sm font-bold text-[#0078FF] hover:text-[#A259FF] transition-colors mb-2 inline-block">
            &larr; Back to Services
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">Secure Checkout</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDE: Payment Entry */}
          <div className="lg:w-2/3 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] p-6 sm:p-8">
              <h2 className="text-xl font-black text-[#0F172A] mb-6 flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-[#A259FF]" /> Payment Method
              </h2>
              
              {/* --- 3-COLUMN PAYMENT SELECTOR --- */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center justify-center gap-2 ${paymentMethod === 'card' ? 'border-[#A259FF] bg-[#A259FF]/5 text-[#A259FF]' : 'border-[#EBF4FA] text-[#64748B] hover:border-[#0078FF]/30 hover:text-[#0F172A]'}`}
                >
                  <CreditCardIcon className="w-8 h-8" /> Credit Card
                </button>
                <button 
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center justify-center gap-2 ${paymentMethod === 'upi' ? 'border-[#A259FF] bg-[#A259FF]/5 text-[#A259FF]' : 'border-[#EBF4FA] text-[#64748B] hover:border-[#0078FF]/30 hover:text-[#0F172A]'}`}
                >
                  <QrCodeIcon className="w-8 h-8" /> UPI
                </button>
                <button 
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center justify-center gap-2 ${paymentMethod === 'bank' ? 'border-[#A259FF] bg-[#A259FF]/5 text-[#A259FF]' : 'border-[#EBF4FA] text-[#64748B] hover:border-[#0078FF]/30 hover:text-[#0F172A]'}`}
                >
                  <BuildingLibraryIcon className="w-8 h-8" /> Bank Transfer
                </button>
              </div>

              {/* --- DYNAMIC PAYMENT FORMS --- */}
              {paymentMethod === 'card' && (
                <form className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-xl focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#EBF4FA]/30 focus:bg-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-xl focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#EBF4FA]/30 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">CVC</label>
                      <input type="password" placeholder="123" maxLength="4" className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-xl focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#EBF4FA]/30 focus:bg-white" />
                    </div>
                  </div>
                </form>
              )}

              {paymentMethod === 'upi' && (
                <form className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">Enter UPI ID</label>
                    <input type="text" placeholder="username@upi" className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-xl focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#EBF4FA]/30 focus:bg-white" />
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#FFB400]/10 border border-[#FFB400]/20 rounded-xl text-sm font-medium text-[#b58000]">
                    <QrCodeIcon className="w-6 h-6 flex-shrink-0" /> 
                    <p>After clicking Pay, open your UPI app (GPay, PhonePe, Paytm) to approve the payment request.</p>
                  </div>
                </form>
              )}

              {paymentMethod === 'bank' && (
                <form className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">Account Number</label>
                    <input type="text" placeholder="000000000000" className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-xl focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#EBF4FA]/30 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">IFSC / Routing Code</label>
                    <input type="text" placeholder="ABCD0123456" className="w-full px-5 py-4 border-2 border-[#EBF4FA] rounded-xl focus:border-[#A259FF] focus:ring-4 focus:ring-[#A259FF]/10 outline-none text-[#0F172A] font-medium transition-all bg-[#EBF4FA]/30 focus:bg-white" />
                  </div>
                </form>
              )}

            </motion.div>
          </div>

          {/* RIGHT SIDE: Order Summary */}
          <div className="lg:w-1/3">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(15,23,42,0.06)] border-2 border-[#EBF4FA] p-6 sm:p-8 sticky top-28">
              <h2 className="text-xl font-black text-[#0F172A] mb-6">Order Summary</h2>
              
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#0F172A] flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs uppercase">MERN</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm line-clamp-2">{ORDER_DETAILS.title}</h3>
                  <p className="text-xs font-bold text-[#64748B] mt-1 flex items-center gap-1">
                    by {ORDER_DETAILS.freelancer} <CheckBadgeIcon className="w-3.5 h-3.5 text-[#A259FF]" />
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-y border-[#EBF4FA] py-6 mb-6">
                <div className="flex justify-between text-sm font-medium text-[#64748B]">
                  <span>Subtotal</span>
                  <span className="text-[#0F172A]">${ORDER_DETAILS.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-[#64748B]">
                  <span>Platform Fee (3%)</span>
                  <span className="text-[#0F172A]">${ORDER_DETAILS.fee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-[#64748B]">
                  <span>Delivery Time</span>
                  <span className="text-[#0F172A]">{ORDER_DETAILS.deliveryTime}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-[#0F172A]">Total</span>
                <span className="text-3xl font-black text-[#A259FF]">${total.toFixed(2)}</span>
              </div>

              <button 
                onClick={handlePayment} 
                disabled={isProcessing}
                className="w-full py-4 bg-[#A259FF] hover:bg-[#0078FF] text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(162,89,255,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 mb-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Locking in Escrow...' : `Pay $${total.toFixed(2)}`} <LockClosedIcon className="w-5 h-5" />
              </button>

              <div className="bg-[#EBF4FA]/50 p-4 rounded-xl flex items-start gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-[#00A86B] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-medium text-[#64748B] leading-relaxed">
                  Your payment is securely held in escrow. Funds are only released to the freelancer once you approve the final delivery.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}