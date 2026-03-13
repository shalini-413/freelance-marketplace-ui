// src/components/common/Header.jsx
import { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { 
  Bars3Icon, XMarkIcon, BellIcon, MagnifyingGlassIcon,
  UserIcon, Cog8ToothIcon, ArrowRightOnRectangleIcon,
  ChevronDownIcon, ChatBubbleLeftEllipsisIcon,
  QuestionMarkCircleIcon, CreditCardIcon 
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_NOTIFICATIONS = [
  { id: 1, type: 'system', title: 'Update Ready', text: 'You have new activity on your account.', time: '1h ago', unread: true },
];

const CATEGORIES = [
  { name: 'Platform Templates & Notebooks', path: '/platform-assets' },
  { name: 'Hire: MERN Stack Devs', path: '/services/mern' },
  { name: 'Hire: Adobe XD Designers', path: '/services/xd' },
  { name: 'Hire: Illustrator Experts', path: '/services/illustrator' },
];

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const categoryRef = useRef(null);

  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) setIsNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
      if (categoryRef.current && !categoryRef.current.contains(event.target)) setIsCategoryOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  };

  const markAllRead = () => setNotifications(notifications.map(n => ({ ...n, unread: false })));

  // 1. STRICT ROLE-BASED LINKS
  const navLinks = user?.role === 'freelancer' ? [
    { name: 'Dashboard', path: '/freelancer/dashboard' },
    { name: 'My Jobs Queue', path: '/freelancer/projects' },
    { name: 'Earnings', path: '/freelancer/earnings' },
  ] : user?.role === 'customer' ? [
    { name: 'Dashboard', path: '/customer/dashboard' },
    { name: 'My Assets & Orders', path: '/customer/orders' },
  ] : [];

  // 2. SMART LOGO ROUTING
  const homePath = user?.role === 'freelancer' ? '/freelancer/dashboard' 
                 : user?.role === 'customer' ? '/customer/dashboard' 
                 : '/login';

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#EBF4FA] shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-8">
            
            {/* LOGO */}
            <Link to={homePath} className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-sm rounded-br-sm bg-[#0F172A] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform shadow-sm">
                 <div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#6F91C6]"></div>
                 <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#FCDA24] rounded-full"></div>
              </div>
              <span className="text-[28px] font-black text-[#0F172A] tracking-tighter">
                par<span className="text-[#64748B] font-serif italic font-light">taken.</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            {user && (
              <nav className="hidden md:flex items-center space-x-2">
                
                {/* 3. CONDITIONAL EXPLORE DROPDOWN (Hidden from Freelancers) */}
                {user.role === 'customer' && (
                  <div className="relative" ref={categoryRef}>
                    <button 
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)} 
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-[14px] font-bold transition-all duration-200 ${
                        isCategoryOpen 
                          ? 'text-[#882FF6] bg-[#EBF4FA]' 
                          : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]'
                      }`}
                    >
                      Explore 
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180 text-[#882FF6]' : 'text-[#94A3B8]'}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isCategoryOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: 10 }} 
                          className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-[0_10px_40px_rgba(15,23,42,0.1)] border border-[#EBF4FA] overflow-hidden z-50 py-2"
                        >
                          {CATEGORIES.map((cat, index) => {
                            const isCurrentPage = location.pathname.includes(cat.path);
                            return (
                              <Link 
                                key={cat.name} 
                                to={cat.path} 
                                onClick={() => setIsCategoryOpen(false)} 
                                className={`block px-5 py-3 text-[14px] font-bold transition-colors ${
                                  index !== CATEGORIES.length - 1 ? 'border-b border-[#EBF4FA]' : ''
                                } ${
                                  isCurrentPage 
                                    ? 'text-[#882FF6] bg-[#882FF6]/5 hover:bg-[#882FF6]/10' 
                                    : 'text-[#475569] hover:bg-[#EBF4FA] hover:text-[#0F172A]'
                                }`}
                              >
                                {cat.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Role-Specific Links */}
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.path} className={`relative px-4 py-2 rounded-xl text-[14px] font-bold transition-all ${location.pathname.includes(link.path) ? 'text-[#0F172A] bg-[#EBF4FA]' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]'}`}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <div className="relative group hidden lg:block">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                  <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-[#EBF4FA]/60 hover:bg-[#EBF4FA] border border-transparent focus:bg-white focus:border-[#882FF6] focus:ring-4 focus:ring-[#882FF6]/20 rounded-xl text-[14px] font-medium transition-all w-48 outline-none text-[#0F172A] placeholder-[#94A3B8]" />
                </div>
                <span className="h-6 w-px bg-[#EBF4FA] mx-2"></span> 
                
                {/* Chat Link */}
                <Link 
                  to={user.role === 'freelancer' ? '/freelancer/chat' : '/customer/chat'} 
                  className="relative p-2 text-[#64748B] hover:bg-[#EBF4FA] hover:text-[#0F172A] rounded-xl transition-all"
                >
                  <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#00A86B] rounded-full border-2 border-white"></span>
                </Link>

                {/* Notifications Dropdown */}
                <div className="relative" ref={notifRef}>
                  <button onClick={() => setIsNotifOpen(!isNotifOpen)} className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${isNotifOpen ? 'bg-[#EBF4FA] text-[#0F172A]' : 'text-[#64748B] hover:bg-[#EBF4FA] hover:text-[#0F172A]'}`}>
                    <div className="relative">
                      <BellIcon className="h-5 w-5" />
                      {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FBC835] rounded-full border-2 border-white"></span>}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isNotifOpen && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-80 bg-white rounded-[20px] shadow-[0_10px_40px_rgba(15,23,42,0.1)] border border-[#EBF4FA] overflow-hidden z-50 text-left">
                         <div className="flex justify-between items-center px-5 py-4 border-b border-[#EBF4FA] bg-[#EBF4FA]/30">
                           <h3 className="font-bold text-[#0F172A]">Notifications</h3>
                           {unreadCount > 0 && <button onClick={markAllRead} className="text-xs font-semibold text-[#882FF6] hover:text-[#6882DD]">Mark all read</button>}
                         </div>
                         <div className="max-h-[60vh] overflow-y-auto">
                              {notifications.map((note) => (
                                <div key={note.id} className={`p-4 border-b border-[#F8FAFC] hover:bg-[#F8FAFC] cursor-pointer flex gap-3 transition-colors ${note.unread ? 'bg-[#882FF6]/5' : ''}`}>
                                  <div className="w-2 h-2 bg-[#882FF6] rounded-full mt-2 flex-shrink-0" style={{ opacity: note.unread ? 1 : 0 }}></div>
                                  <div>
                                    <h4 className={`text-sm ${note.unread ? 'font-bold text-[#0F172A]' : 'font-semibold text-[#475569]'}`}>{note.title}</h4>
                                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{note.text}</p>
                                  </div>
                                </div>
                              ))}
                         </div>
                         <div className="p-3 bg-[#EBF4FA]/30 border-t border-[#EBF4FA] text-center">
                           <Link to="/notifications" onClick={() => setIsNotifOpen(false)} className="text-xs font-bold text-[#882FF6] hover:text-[#0F172A] transition-colors">View All Activity</Link>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Profile Dropdown */}
                <div className="relative ml-2" ref={profileRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2.5 p-1 pl-3 pr-1 rounded-full border border-transparent hover:bg-[#EBF4FA] transition-all">
                    <span className="text-[14px] font-bold text-[#0F172A] hidden lg:block">{user.name || 'User'}</span>
                    <div className="w-9 h-9 bg-[#0F172A] text-white font-bold rounded-full flex items-center justify-center text-sm shadow-sm">
                      {user.role === 'freelancer' ? 'AV' : 'DV'}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-64 bg-white rounded-[20px] shadow-[0_10px_40px_rgba(15,23,42,0.1)] border border-[#EBF4FA] overflow-hidden z-50 text-left">
                        <div className="px-5 py-4 border-b border-[#EBF4FA] bg-[#EBF4FA]/30">
                          <p className="text-sm font-bold text-[#0F172A]">{user.name || 'User'}</p>
                          <p className="text-xs font-bold text-[#882FF6] uppercase tracking-wider">{user.role}</p>
                        </div>
                        
                        <div className="p-2 space-y-1">
                          <Link to="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:bg-[#EBF4FA] hover:text-[#0F172A]">
                            <UserIcon className="w-5 h-5"/> Profile Settings
                          </Link>

                          {/* Customer Only Links */}
                          {user.role === 'customer' && (
                            <Link to="/customer/payments" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:bg-[#EBF4FA] hover:text-[#0F172A]">
                              <CreditCardIcon className="w-5 h-5"/> Payment History
                            </Link>
                          )}

                          {/* Common Links */}
                          <Link to="/help" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:bg-[#EBF4FA] hover:text-[#0F172A]">
                            <QuestionMarkCircleIcon className="w-5 h-5"/> Help & Support
                          </Link>
                        </div>

                        <div className="p-2 border-t border-[#EBF4FA]">
                          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50"><ArrowRightOnRectangleIcon className="w-5 h-5"/> Sign out</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[#64748B] hover:text-[#0F172A] font-bold px-4 py-2">Sign in</Link>
                <Link to="/signup" className="px-6 py-2.5 bg-[#882FF6] hover:bg-[#6882DD] text-white rounded-xl font-bold shadow-md">Get Started</Link>
              </>
            )}
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-xl text-[#0F172A] hover:bg-[#EBF4FA] border border-transparent">
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-[#EBF4FA] shadow-xl absolute w-full left-0 overflow-hidden">
             <div className="p-4">
                
                {(!user || user.role === 'customer') && (
                  <>
                    <p className="px-4 text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2 mt-2">Explore</p>
                    {CATEGORIES.map((cat) => {
                      const isCurrentPage = location.pathname.includes(cat.path);
                      return (
                        <Link 
                          key={cat.name} 
                          to={cat.path} 
                          onClick={() => setIsMobileMenuOpen(false)} 
                          className={`block py-3 px-4 rounded-xl font-bold transition-colors ${
                            isCurrentPage ? 'text-[#882FF6] bg-[#882FF6]/5' : 'text-[#475569] hover:bg-[#EBF4FA]'
                          }`}
                        >
                          {cat.name}
                        </Link>
                      );
                    })}
                    <div className="border-t border-[#EBF4FA] my-4"></div>
                  </>
                )}

                {user ? (
                  <>
                    <p className="px-4 text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2 mt-2">My Account</p>
                    {navLinks.map((link) => (
                      <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl text-[15px] font-bold transition-all ${location.pathname.includes(link.path) ? 'text-[#0F172A] bg-[#EBF4FA]' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]'}`}>{link.name}</Link>
                    ))}
                    {user.role === 'customer' && (
                      <Link to="/customer/payments" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-[15px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]">Payment History</Link>
                    )}
                    <Link to="/help" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-[15px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF4FA]">Help & Support</Link>
                    
                    <button onClick={handleLogout} className="w-full text-left px-4 py-3 rounded-xl text-[15px] font-bold text-red-600 hover:bg-red-50 mt-2">Sign out</button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 mt-4">
                    <Link to="/login" className="block w-full py-3 text-center rounded-xl bg-[#EBF4FA] font-bold text-[#0F172A]">Sign In</Link>
                    <Link to="/signup" className="block w-full py-3 text-center rounded-xl bg-[#882FF6] font-bold text-white">Get Started</Link>
                  </div>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}