// src/pages/common/Verification.jsx
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Verification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value) element.nextSibling.focus();
  };

  const handleSubmit = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) return;
    setIsLoading(true);
    setTimeout(() => { navigate('/login'); setIsLoading(false); }, 1000);
  };

  useEffect(() => { document.querySelector('input')?.focus(); }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8FAFC] font-sans selection:bg-[#28B480]/30 p-4 relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#28B480] rounded-full mix-blend-multiply blur-[150px] opacity-[0.06]"></div>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[440px] bg-white rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-[#E2E8F0] p-8 sm:p-10 mb-20 text-center">
          <div className="mx-auto w-12 h-12 bg-[#28B480]/10 rounded-full flex items-center justify-center mb-5">
            <svg className="w-6 h-6 text-[#28B480]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Check your email</h2>
          <p className="text-[15px] text-[#64748B] mb-8">We've sent a 6-digit code to your email.</p>

          <div className="flex justify-between gap-2 mb-8">
            {otp.map((_, index) => (
              <input key={index} type="text" maxLength="1" value={otp[index]} onChange={(e) => handleChange(e.target, index)} onKeyDown={(e) => e.key === 'Backspace' && !otp[index] && e.target.previousSibling?.focus()}
                className="w-11 h-12 sm:w-12 sm:h-14 text-center border border-[#E2E8F0] rounded-xl focus:border-[#28B480] focus:ring-4 focus:ring-[#28B480]/20 outline-none text-xl font-bold text-[#0F172A] transition-all bg-[#F8FAFC] focus:bg-white shadow-sm"
              />
            ))}
          </div>

          <button onClick={handleSubmit} disabled={isLoading || otp.join('').length !== 6} className={`w-full py-3.5 px-4 rounded-xl text-white font-semibold text-[15px] transition-all duration-200 active:scale-[0.98] ${isLoading || otp.join('').length !== 6 ? 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed' : 'bg-[#28B480] hover:bg-[#239c6f] shadow-[0_8px_20px_rgba(40,180,128,0.25)]'}`}>
            {isLoading ? 'Verifying...' : 'Verify Account'}
          </button>

          <p className="mt-8 text-[15px] text-[#64748B]">
            Didn't receive the code? <button className="text-[#28B480] font-semibold hover:text-[#239c6f] transition-colors">Resend</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Verification;