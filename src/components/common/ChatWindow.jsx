// src/components/common/ChatWindow.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  PaperAirplaneIcon, PaperClipIcon, CheckCircleIcon,
  MagnifyingGlassIcon, ArrowLeftIcon, PhoneIcon, VideoCameraIcon 
} from '@heroicons/react/24/outline';

export default function ChatWindow({ contacts, currentUserRole }) {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const messagesEndRef = useRef(null);

  const loadInitialMessages = (contact) => {
    return [
      { id: 1, text: currentUserRole === 'customer' ? `Hello ${contact.name}! I just reviewed the brief.` : `Hi ${contact.name}! Can we discuss custom enhancements?`, sender: 'them', time: 'Yesterday, 2:30 PM' },
      { id: 2, text: currentUserRole === 'customer' ? "Yes, I will generate them securely." : "Absolutely! I can add custom branding.", sender: 'me', time: 'Yesterday, 3:15 PM' },
      { id: 3, text: contact.lastMsg, sender: 'them', time: contact.time }
    ];
  };

  useEffect(() => { if (activeContact) setMessages(loadInitialMessages(activeContact)); }, [activeContact, currentUserRole]);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isMobileChatOpen]);

  const handleContactSelect = (contact) => { setActiveContact(contact); setIsMobileChatOpen(true); };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { id: Date.now(), text: message, sender: 'me', time: 'Just now' }]);
    setMessage('');
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-[#EBF4FA] font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A] p-0 md:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-[1440px] bg-white md:rounded-[2rem] shadow-none md:shadow-lg border-0 md:border border-[#E2E8F0] h-full flex overflow-hidden relative">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <div className={`w-full md:w-[320px] lg:w-[380px] flex-shrink-0 border-r border-[#E2E8F0] flex-col bg-[#F8FAFC] transition-transform duration-300 ${isMobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 lg:p-6 border-b border-[#E2E8F0] bg-white flex-shrink-0">
            <h2 className="text-xl lg:text-2xl font-black text-[#0F172A] mb-4 tracking-tight">Messages</h2>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
              <input type="text" placeholder="Search contacts..." className="w-full pl-11 pr-4 py-3 bg-[#F1F5F9] border border-transparent rounded-xl focus:bg-white focus:border-[#0078FF] focus:ring-2 focus:ring-[#0078FF]/10 outline-none text-[14px] lg:text-[15px] font-medium text-[#0F172A] transition-all" />
            </div>
          </div>

          <div className="flex-grow overflow-y-auto hide-scrollbar p-3 lg:p-4 space-y-2">
            {contacts.map((contact) => (
              <div key={contact.id} onClick={() => handleContactSelect(contact)} className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl cursor-pointer transition-all ${activeContact.id === contact.id ? 'bg-white shadow-sm border border-[#E2E8F0] ring-1 ring-[#0078FF]/20' : 'hover:bg-[#F1F5F9] border border-transparent'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${activeContact.id === contact.id ? 'bg-[#A259FF] text-white shadow-md' : 'bg-[#0F172A] text-white'}`}>{contact.avatar}</div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-baseline mb-1"><h3 className={`text-[14px] lg:text-[15px] truncate ${activeContact.id === contact.id ? 'font-black text-[#0F172A]' : 'font-bold text-[#475569]'}`}>{contact.name}</h3><span className={`text-[10px] font-bold ${contact.unread > 0 ? 'text-[#0078FF]' : 'text-[#94A3B8]'}`}>{contact.time}</span></div>
                  <p className={`text-xs truncate ${contact.unread > 0 ? 'font-bold text-[#0F172A]' : 'font-medium text-[#64748B]'}`}>{contact.lastMsg}</p>
                </div>
                {contact.unread > 0 && <div className="w-5 h-5 bg-[#FFB400] rounded-full flex items-center justify-center text-[10px] font-black text-[#0F172A] flex-shrink-0 shadow-sm">{contact.unread}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE (CHAT AREA) ================= */}
        <div className={`flex-1 flex-col h-full bg-white ${!isMobileChatOpen ? 'hidden md:flex' : 'flex w-full z-20'}`}>
          
          {/* Header */}
          <div className="flex-shrink-0 px-4 lg:px-8 py-3 lg:py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-white z-10 shadow-sm">
            <div className="flex items-center gap-3 lg:gap-4">
              <button onClick={() => setIsMobileChatOpen(false)} className="md:hidden p-2 -ml-2 text-[#0F172A] hover:bg-[#F1F5F9] rounded-xl transition-colors"><ArrowLeftIcon className="w-6 h-6" /></button>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#A259FF] text-white flex items-center justify-center font-bold text-base lg:text-lg shadow-sm">{activeContact.avatar}</div>
              <div>
                <h3 className="text-base lg:text-lg font-black text-[#0F172A] leading-tight">{activeContact.name}</h3>
                <p className="text-[10px] lg:text-[11px] font-bold text-[#00A86B] uppercase tracking-wider mt-0.5">{activeContact.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="p-2 sm:p-2.5 text-[#64748B] hover:text-[#0078FF] hover:bg-[#0078FF]/10 rounded-xl transition-colors">
                <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="p-2 sm:p-2.5 text-[#64748B] hover:text-[#00A86B] hover:bg-[#00A86B]/10 rounded-xl transition-colors">
                <VideoCameraIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto px-4 lg:px-8 py-6 lg:py-8 space-y-6 bg-[#FAFAFA]/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-lg p-4 shadow-sm flex flex-col ${msg.sender === 'me' ? 'bg-[#A259FF] text-white rounded-[1.2rem] rounded-tr-sm' : 'bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[1.2rem] rounded-tl-sm'}`}>
                  <p className="text-[14px] md:text-[15px] font-medium leading-relaxed">{msg.text}</p>
                  <div className={`flex items-center gap-1 mt-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-end'}`}><span className={`text-[10px] font-bold ${msg.sender === 'me' ? 'text-white/70' : 'text-[#94A3B8]'}`}>{msg.time}</span>{msg.sender === 'me' && <CheckCircleIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#FFB400]" />}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="flex-shrink-0 p-4 lg:p-6 border-t border-[#E2E8F0] bg-white">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 md:gap-3 p-1.5 md:p-2 bg-[#F1F5F9] border border-[#E2E8F0] rounded-[1.5rem] focus-within:ring-4 focus-within:ring-[#0078FF]/10 focus-within:border-[#0078FF] transition-all">
              <button type="button" className="p-2.5 md:p-3 text-[#0078FF] hover:bg-white hover:shadow-sm rounded-xl transition-all flex-shrink-0"><PaperClipIcon className="w-5 h-5 md:w-6 md:h-6" /></button>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." className="flex-grow bg-transparent outline-none text-[#0F172A] font-medium text-[14px] md:text-[15px] placeholder-[#94A3B8] w-full min-w-0" />
              <button type="submit" disabled={!message.trim()} className={`px-4 md:px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 flex-shrink-0 ${message.trim() ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-md active:scale-95' : 'bg-[#CBD5E1] text-white cursor-not-allowed'}`}><span className="hidden md:inline">Send</span><PaperAirplaneIcon className="w-5 h-5" /></button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}