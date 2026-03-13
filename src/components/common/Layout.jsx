// src/components/common/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const isChatView = location.pathname.includes('/chat');

  return (
    <div className="min-h-screen flex flex-col bg-[#EBF4FA] font-sans antialiased selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <Header />
      
      {/* On mobile chat, we lock the height. On desktop, we allow normal document flow */}
      <main className={`flex-grow flex flex-col relative z-10 ${isChatView ? 'h-[calc(100vh-80px)] md:h-auto overflow-hidden md:overflow-visible' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.2 }} 
          className="flex-grow flex flex-col h-full"
        >
          {children}
        </motion.div>
      </main>
      
      {/* Footer is hidden ONLY on mobile chat view. Visible on Desktop and all other pages. */}
      <div className={isChatView ? 'hidden md:block' : 'block'}>
        <Footer />
      </div>
    </div>
  );
}