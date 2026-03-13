// src/pages/freelancer/TaskProgress.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, PlusIcon, TrashIcon, ArrowLeftIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function TaskProgress() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Initialize React App & Node Server', done: true },
    { id: 2, text: 'Configure MongoDB Schema', done: true },
    { id: 3, text: 'Build JWT Authentication endpoints', done: true },
    { id: 4, text: 'Integrate Stripe Payment Gateway', done: false },
    { id: 5, text: 'Finalize Admin Dashboard UI', done: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const progress = Math.round((tasks.filter(t => t.done).length / tasks.length) * 100) || 0;

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="min-h-screen bg-[#EBF4FA] pb-24 font-sans selection:bg-[#A259FF]/20 selection:text-[#0F172A]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        
        {/* HEADER SECTION - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <Link to="/freelancer/project/details" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0078FF] hover:text-[#A259FF] transition-colors mb-4 sm:mb-6 active:scale-95">
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Back to Project
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">Tasks</h1>
              <div className="flex items-center gap-2 mt-1 sm:mt-2">
                <span className="bg-white border border-[#EBF4FA] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-black text-[#94A3B8] uppercase tracking-wider">ORD-9012</span>
                <p className="text-xs sm:text-sm font-bold text-[#64748B]">MERN Build</p>
              </div>
            </div>
            
            <div className="text-right flex flex-col items-end">
              <span className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5">Progress</span>
              <span className="text-3xl sm:text-4xl font-black text-[#00A86B] leading-none">{progress}%</span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl sm:rounded-[2rem] shadow-sm sm:shadow-[0_8px_30px_rgba(15,23,42,0.03)] border-2 border-[#EBF4FA] p-4 sm:p-8">
          
          {/* PROGRESS BAR */}
          <div className="w-full bg-[#EBF4FA] rounded-full h-2.5 sm:h-3 mb-6 sm:mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0078FF] to-[#A259FF] h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
          </div>

          {/* ADD TASK INPUT - Mobile Optimized (Button inside input) */}
          <form onSubmit={addTask} className="relative mb-6 sm:mb-8 flex items-center">
            <input 
              type="text" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)} 
              placeholder="Add new milestone..." 
              className="w-full pl-4 sm:pl-5 pr-14 sm:pr-16 py-3.5 sm:py-4 border-2 border-[#EBF4FA] rounded-2xl focus:border-[#0078FF] outline-none text-[#0F172A] font-medium text-sm sm:text-base bg-[#F8FAFC] focus:bg-white transition-all"
            />
            <button 
              type="submit" 
              disabled={!newTask.trim()} 
              className={`absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 aspect-square rounded-xl font-bold transition-all shadow-sm flex items-center justify-center ${newTask.trim() ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] active:scale-95' : 'bg-[#EBF4FA] text-[#94A3B8] cursor-not-allowed'}`}
            >
              <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </form>

          {/* TASK LIST - Top Aligned for Text Wrapping on Small Screens */}
          <div className="space-y-3">
            <AnimatePresence>
              {tasks.map(task => (
                <motion.div 
                  key={task.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border-2 transition-all ${task.done ? 'bg-[#00A86B]/5 border-[#00A86B]/20' : 'bg-white border-[#EBF4FA] hover:border-[#0078FF]/30'}`}
                >
                  <button 
                    onClick={() => toggleTask(task.id)} 
                    className={`mt-0.5 sm:mt-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${task.done ? 'bg-[#00A86B] border-[#00A86B]' : 'bg-white border-[#CBD5E1]'}`}
                  >
                    {task.done && <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                  </button>
                  
                  <div 
                    onClick={() => toggleTask(task.id)} 
                    className="flex-grow min-w-0 cursor-pointer pt-0.5 sm:pt-1"
                  >
                    <span className={`font-bold text-[14px] sm:text-[15px] leading-tight break-words transition-all ${task.done ? 'text-[#94A3B8] line-through' : 'text-[#0F172A]'}`}>
                      {task.text}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => deleteTask(task.id)} 
                    className="p-1.5 sm:p-2 text-[#94A3B8] hover:text-red-500 hover:bg-red-50 active:bg-red-100 rounded-xl transition-colors flex-shrink-0"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {tasks.length === 0 && (
              <div className="text-center py-10">
                <p className="text-[#94A3B8] font-bold text-sm">No tasks added yet. Start planning!</p>
              </div>
            )}
          </div>

          {/* PROCEED TO DELIVERY LINK - Responsive Size */}
          {progress === 100 && tasks.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#EBF4FA]">
              <Link to="/freelancer/upload" className="w-full py-4 sm:py-5 bg-[#00A86B] hover:bg-[#008f5a] text-white font-bold text-sm sm:text-base rounded-2xl shadow-[0_10px_25px_rgba(0,168,107,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2">
                <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" /> <span className="truncate">All Tasks Complete - Deliver</span>
              </Link>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
}