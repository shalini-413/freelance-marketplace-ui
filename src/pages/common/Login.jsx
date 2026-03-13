// src/pages/common/Login.jsx
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [role, setRole] = useState('freelancer');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      login(role, data);
      navigate(`/${role}/dashboard`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-full flex bg-white font-sans overflow-hidden selection:bg-[#6F91C6]/30">
      {/* LEFT SIDE: Image Panel */}
      <div className="hidden lg:flex lg:w-[55%] relative flex-col items-center bg-[#F8FAFC] p-10 xl:p-16 overflow-hidden border-r border-[#E2E8F0]">
        <div className="relative z-10 w-full max-w-[580px] h-full flex flex-col">
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
          <div className="flex flex-col gap-8 w-full mt-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-[40px] xl:text-[46px] font-bold text-[#0F172A] mb-2 leading-[1.1] tracking-tight">
              Explore Creative Notebooks <br/><span className="text-[#6F91C6]">& Web Designs.</span>
              </h1>
              <p className="text-[16px] text-[#475569] leading-relaxed max-w-[420px]">
              Buy beautifully crafted notebooks and powerful website designs created by talented freelancers — all in one places.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full bg-white rounded-[24px] p-3 shadow-sm border border-[#E2E8F0]">
              <div className="w-full aspect-[18/12] bg-[#ECEFF2] rounded-[16px] overflow-hidden relative">
                <img src="/login-image.jpg" alt="Workspace" className="w-full h-full object-cover  object-[center_10%]" />
              </div>
            </motion.div>
          </div>
          <div className="mt-auto"></div>
        </div>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className="w-full lg:w-[45%] h-full flex flex-col items-center justify-center p-6 sm:p-12 relative z-20 bg-white">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[400px]">
          <Link to="/" className="lg:hidden flex items-center justify-start gap-2 mb-10">
            <div className="relative w-9 h-9 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-sm rounded-br-sm bg-[#0F172A] flex items-center justify-center transform -rotate-12 shadow-sm">
               <div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#6F91C6]"></div>
               <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#FCDA24] rounded-full"></div>
            </div>
            <span className="text-[28px] font-black text-[#0F172A] tracking-tighter">
              par<span className="text-[#64748B] font-serif italic font-light">taken.</span>
            </span>
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#0F172A]">Welcome back</h2>
            <p className="mt-1.5 text-[15px] text-[#64748B]">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex p-1 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              {['freelancer', 'customer'].map((type) => (
                <button key={type} type="button" onClick={() => setRole(type)} className={`flex-1 py-2.5 text-[14px] font-semibold rounded-lg capitalize transition-all ${role === type ? 'bg-white text-[#0F172A] shadow-sm border border-[#E2E8F0]/50' : 'text-[#64748B] hover:text-[#0F172A]'}`}>
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[14px] font-medium text-[#334155]">Email</label>
              <input type="email" className="w-full px-4 py-3.5 border border-[#E2E8F0] rounded-xl focus:ring-4 focus:ring-[#6F91C6]/20 focus:border-[#6F91C6] outline-none transition-all bg-[#F8FAFC] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] text-[15px] shadow-sm" placeholder="Enter your email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }})} />
              <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[13px] text-red-500 ml-1">{errors.email.message}</motion.p>}</AnimatePresence>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[14px] font-medium text-[#334155]">Password</label>
              <input type="password" className="w-full px-4 py-3.5 border border-[#E2E8F0] rounded-xl focus:ring-4 focus:ring-[#6F91C6]/20 focus:border-[#6F91C6] outline-none transition-all bg-[#F8FAFC] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] text-[15px] shadow-sm" placeholder="••••••••" {...register('password', { required: 'Password is required' })} />
              <AnimatePresence>{errors.password && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[13px] text-red-500 ml-1">{errors.password.message}</motion.p>}</AnimatePresence>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] text-[#6F91C6] border-[#CBD5E1] rounded focus:ring-[#6F91C6]/30 transition-all cursor-pointer accent-[#6F91C6]" />
                <span className="text-[14px] text-[#64748B] group-hover:text-[#0F172A] transition-colors font-medium">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-[14px] text-[#64748B] hover:text-[#6F91C6] font-semibold transition-colors">Forgot password?</Link>
            </div>

            <button type="submit" disabled={isLoading} className={`w-full py-3.5 px-4 mt-6 rounded-xl font-semibold text-[15px] transition-all duration-200 active:scale-[0.98] tracking-wide ${isLoading ? 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed' : 'bg-[#6F91C6] hover:bg-[#5b78a8] text-white shadow-[0_8px_20px_rgba(111,145,198,0.25)]'}`}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p className="mt-8 text-center text-[15px] text-[#64748B]">
            Don't have an account? <Link to="/signup" className="text-[#6F91C6] font-semibold hover:text-[#5b78a8] transition-colors">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;