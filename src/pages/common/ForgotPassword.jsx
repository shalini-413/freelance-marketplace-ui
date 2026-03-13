// src/pages/common/ForgotPassword.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ForgotPassword() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('tempResetEmail', data.email);
      navigate('/verification');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8FAFC] font-sans selection:bg-[#8269A5]/30 p-4 relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#8269A5] rounded-full mix-blend-multiply blur-[150px] opacity-[0.08]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-sm rounded-br-sm bg-[#0F172A] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform shadow-sm">
             <div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#6F91C6]"></div>
             <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#FCDA24] rounded-full"></div>
          </div>
          <span className="text-[26px] font-black text-[#0F172A] tracking-tighter">par<span className="text-[#64748B] font-serif italic font-light">taken.</span></span>
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[440px] bg-white rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-[#E2E8F0] p-8 sm:p-10 mb-20">
          <div className="mb-8 text-center">
            <div className="mx-auto w-12 h-12 bg-[#8269A5]/10 rounded-full flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-[#8269A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A]">Reset Password</h2>
            <p className="mt-2 text-[15px] text-[#64748B]">Enter your email and we'll send a recovery link.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-[14px] font-medium text-[#334155]">Email Address</label>
              <input type="email" className="w-full px-4 py-3.5 border border-[#E2E8F0] rounded-xl focus:ring-4 focus:ring-[#8269A5]/20 focus:border-[#8269A5] outline-none transition-all bg-[#F8FAFC] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] text-[15px] shadow-sm" placeholder="Enter your email" {...register('email', { required: 'Email is required' })} />
            </div>

            <button type="submit" disabled={isLoading} className={`w-full py-3.5 px-4 mt-4 rounded-xl text-white font-semibold text-[15px] transition-all duration-200 active:scale-[0.98] ${isLoading ? 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed' : 'bg-[#8269A5] hover:bg-[#6c558c] shadow-[0_8px_20px_rgba(130,105,165,0.25)]'}`}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <p className="mt-8 text-center text-[15px]">
            <Link to="/login" className="text-[#64748B] font-semibold hover:text-[#0F172A] transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ForgotPassword;