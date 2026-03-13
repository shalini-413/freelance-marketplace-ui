import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-[#64748B] py-8 border-t border-[#EBF4FA] mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] font-medium">
        
        <div className="flex items-center gap-2">
          {/* EXACT LOGO FROM LOGIN.JSX */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-sm rounded-br-sm bg-[#0F172A] flex items-center justify-center transform -rotate-12 shadow-sm group-hover:rotate-0 transition-transform">
               <div className="w-3 h-3 rounded-full border-[2px] border-[#6F91C6]"></div>
               <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#FCDA24] rounded-full"></div>
            </div>
            <span className="text-[24px] font-black text-[#0F172A] tracking-tighter">
              par<span className="text-[#64748B] font-serif italic font-light">taken.</span>
            </span>
          </Link>
          <span className="ml-4 border-l border-[#EBF4FA] pl-4">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-[#882FF6] transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-[#882FF6] transition-colors">Privacy</Link>
          <Link to="/help" className="hover:text-[#882FF6] transition-colors">Support</Link>
        </div>
        
      </div>
    </footer>
  );
}