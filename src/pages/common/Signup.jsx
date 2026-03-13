// src/pages/common/Signup.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [role, setRole] = useState('freelancer');
  const [isLoading, setIsLoading] = useState(false);
  const password = watch('password', '');

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('tempSignupEmail', data.email);
      navigate('/verification');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-full flex bg-white font-sans overflow-hidden selection:bg-[#6F91C6]/30">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-[55%] relative flex-col items-center bg-[#F8FAFC] p-10 xl:p-16 overflow-hidden border-r border-[#E2E8F0]">
        <div className="relative z-10 w-full max-w-[500px] h-full flex flex-col">
          <div className="mb-auto">
            <Link to="/" className="flex items-center gap-2.5 w-fit group">
              <div className="relative w-10 h-10 rounded-tr-[18px] rounded-bl-[18px] rounded-tl-md rounded-br-md bg-[#0F172A] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-md">
                 <div className="w-4 h-4 rounded-full border-[2.5px] border-[#6F91C6]"></div>
                 <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-[#FCDA24] rounded-full"></div>
              </div>
              <span className="text-[30px] font-black text-[#0F172A] tracking-tighter">
                par<span className="text-[#64748B] font-serif italic font-light">taken.</span>
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-6 w-full mt-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-[38px] xl:text-[42px] font-bold text-[#0F172A] mb-3 leading-[1.1] tracking-tight">
                Start your journey <br/><span className="text-[#6F91C6]">with us today.</span>
              </h1>
              <p className="text-[15px] text-[#475569] leading-relaxed max-w-[420px]">
                Create your account to unlock premium opportunities, connect with top professionals, and build your creative empire.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full bg-white rounded-[24px] p-3 shadow-sm border border-[#E2E8F0]">
              <div className="w-full aspect-[16/9] bg-[#ECEFF2] rounded-[16px] overflow-hidden relative">
                <img src="/signup-image.jpg" alt="Signup" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
          <div className="mt-auto"></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[45%] h-full flex flex-col items-center justify-center p-6 sm:p-12 relative z-20 bg-white overflow-y-auto scrollbar-hide">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[400px] my-auto">
          <Link to="/" className="lg:hidden flex items-center justify-start gap-2 mb-8">
            <div className="relative w-9 h-9 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-sm rounded-br-sm bg-[#0F172A] flex items-center justify-center transform -rotate-12 shadow-sm">
               <div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#6F91C6]"></div>
               <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#FCDA24] rounded-full"></div>
            </div>
            <span className="text-[28px] font-black text-[#0F172A] tracking-tighter">
              par<span className="text-[#64748B] font-serif italic font-light">taken.</span>
            </span>
          </Link>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#0F172A]">Create Account</h2>
            <p className="mt-1.5 text-[15px] text-[#64748B]">Fill in your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex p-1 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              {['freelancer', 'customer'].map((type) => (
                <button key={type} type="button" onClick={() => setRole(type)} className={`flex-1 py-2 text-[14px] font-semibold rounded-lg capitalize transition-all ${role === type ? 'bg-white text-[#0F172A] shadow-sm border border-[#E2E8F0]/50' : 'text-[#64748B] hover:text-[#0F172A]'}`}>{type}</button>
              ))}
            </div>
            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#334155]">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#6F91C6]/30 focus:border-[#6F91C6] outline-none transition-all bg-[#F8FAFC] focus:bg-white text-[#0F172A] text-[14px]" placeholder="John Doe" {...register('name', { required: 'Name required' })} />
            </div>
            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#334155]">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#6F91C6]/30 focus:border-[#6F91C6] outline-none transition-all bg-[#F8FAFC] focus:bg-white text-[#0F172A] text-[14px]" placeholder="email@example.com" {...register('email', { required: 'Email required' })} />
            </div>
            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#334155]">Password</label>
              <input type="password" className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#6F91C6]/30 focus:border-[#6F91C6] outline-none transition-all bg-[#F8FAFC] focus:bg-white text-[#0F172A] text-[14px]" placeholder="••••••••" {...register('password', { required: 'Password required' })} />
            </div>

            <button type="submit" disabled={isLoading} className={`w-full py-3.5 px-4 mt-4 rounded-xl text-white font-semibold text-[15px] transition-all duration-200 active:scale-[0.98] ${isLoading ? 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed' : 'bg-[#6F91C6] hover:bg-[#5b78a8] shadow-[0_8px_20px_rgba(111,145,198,0.25)]'}`}>
              {isLoading ? 'Creating...' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-6 text-center text-[14px] text-[#64748B]">
            Already have an account? <Link to="/login" className="text-[#6F91C6] font-semibold hover:text-[#5b78a8] transition-colors">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;