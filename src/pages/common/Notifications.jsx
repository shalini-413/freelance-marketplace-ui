// src/pages/common/Notifications.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy data representing backend state
const INITIAL_NOTIFICATIONS = [
  { id: 1, type: 'order', title: 'Work Submitted', text: 'TechNova Solutions submitted work for review on "E-commerce Redesign".', time: '2 hours ago', unread: true },
  { id: 2, type: 'message', title: 'New Message', text: 'You have a new message from Sarah UI regarding the dashboard design package.', time: '5 hours ago', unread: true },
  { id: 3, type: 'system', title: 'Account Secured', text: 'Your 2FA security settings have been updated successfully.', time: '1 day ago', unread: false },
  { id: 4, type: 'order', title: 'Payment Released', text: 'Funds have been securely released from escrow for Milestone 1.', time: '2 days ago', unread: false },
  { id: 5, type: 'system', title: 'Welcome to FreelanceHub', text: 'Your account is all set up. Explore services or create your first project!', time: '1 week ago', unread: false },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [activeTab, setActiveTab] = useState('all');

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filtered = activeTab === 'all' ? notifications : notifications.filter(n => n.unread);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-indigo-900 pt-10 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Notifications</h1>
            <p className="mt-2 text-indigo-200 font-medium">Stay updated with your latest account activity.</p>
          </div>
          
          {notifications.some(n => n.unread) && (
            <button 
              onClick={markAllRead} 
              className="self-start sm:self-auto px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold transition-all shadow-lg active:scale-95"
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          
          {/* Custom Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-100 pb-px">
            {['all', 'unread'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-[15px] font-bold capitalize transition-all relative ${
                  activeTab === tab ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="notifTab" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* List Area */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">You're all caught up!</h3>
                  <p className="text-gray-500 font-medium mt-1">No {activeTab === 'unread' ? 'unread' : 'new'} notifications to show.</p>
                </motion.div>
              ) : (
                filtered.map((note, idx) => (
                  <motion.div 
                    key={note.id} 
                    layout 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className={`group p-5 sm:p-6 rounded-[1.5rem] border-2 flex flex-col sm:flex-row items-start gap-5 transition-all relative overflow-hidden ${
                      note.unread ? 'bg-indigo-50/30 border-indigo-100 hover:border-indigo-200' : 'bg-white border-gray-50 hover:border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 ${
                      note.type === 'order' ? 'bg-emerald-100 text-emerald-600' : 
                      note.type === 'message' ? 'bg-indigo-100 text-indigo-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {note.type === 'order' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                      {note.type === 'message' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
                      {note.type === 'system' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow pr-10">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-[16px] ${note.unread ? 'text-gray-900 font-extrabold' : 'text-gray-800 font-bold'}`}>{note.title}</h3>
                        {note.unread && <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">New</span>}
                      </div>
                      <p className={`text-[15px] mt-1.5 leading-relaxed ${note.unread ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>{note.text}</p>
                      <p className="text-[13px] text-gray-400 mt-3 font-semibold flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {note.time}
                      </p>
                    </div>
                    
                    {/* Hover Actions */}
                    <div className="absolute top-5 right-5 sm:opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                      <button 
                        onClick={() => deleteNotification(note.id)} 
                        className="p-2.5 bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl shadow-sm border border-gray-100 transition-all focus:outline-none"
                        title="Delete notification"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}