// src/pages/common/ProfileSettings.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCircleIcon, AdjustmentsHorizontalIcon, ShieldCheckIcon, 
  CheckBadgeIcon, ChevronRightIcon, ArrowLeftIcon, ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [mobileView, setMobileView] = useState('menu'); // 'menu' or specific tab id
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);

  // Form States (Starts completely empty so nothing is autofilled)
  const [formData, setFormData] = useState({
    fullName: '', 
    email: '', 
    phone: '', 
    role: '', 
    bio: '',
    notificationsEnabled: false, 
    twoFactorEnabled: false,
    marketingEmails: false // New state for the toggle
  });
  
  const [imagePreview, setImagePreview] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => { setIsSaving(false); showToast('Settings saved successfully!'); }, 1000);
  };

  const SIDEBAR_TABS = [
    { id: 'profile', label: 'Public Profile', icon: UserCircleIcon, color: 'text-[#0078FF]', bg: 'bg-[#0078FF]/10' },
    { id: 'preferences', label: 'Preferences', icon: AdjustmentsHorizontalIcon, color: 'text-[#A259FF]', bg: 'bg-[#A259FF]/10' },
    { id: 'security', label: 'Security & Password', icon: ShieldCheckIcon, color: 'text-[#00A86B]', bg: 'bg-[#00A86B]/10' },
  ];

  // --- REUSABLE CONTENT RENDERER ---
  const renderTabContent = () => {
    const currentTab = mobileView !== 'menu' ? mobileView : activeTab;

    return (
      <AnimatePresence mode="wait">
        
        {/* PUBLIC PROFILE TAB */}
        {currentTab === 'profile' && (
          <motion.div key="profile" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
            <div className="bg-white lg:rounded-[24px] rounded-2xl lg:border border-[#E2E8F0] shadow-sm overflow-hidden">
              
              {/* Avatar Section */}
              <div className="p-6 lg:p-8 border-b border-[#E2E8F0] bg-[#F8FAFC]/50 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => setImagePreview(URL.createObjectURL(e.target.files[0]))} />
                  <div className="w-24 h-24 rounded-full lg:rounded-2xl border border-[#E2E8F0] shadow-sm bg-white overflow-hidden flex items-center justify-center">
                    {imagePreview ? <img src={imagePreview} className="w-full h-full object-cover" /> : <span className="text-3xl font-black text-[#0F172A]"><UserCircleIcon className="w-12 h-12 text-[#94A3B8]"/></span>}
                  </div>
                  <div className="absolute inset-0 bg-[#0F172A]/50 rounded-full lg:rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Change</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">Profile Avatar</h3>
                  <p className="text-sm text-[#64748B] mt-1 hidden lg:block">We support high-res JPG and PNG files up to 5MB.</p>
                  <button className="mt-3 px-4 py-2 bg-white border border-[#E2E8F0] rounded-lg text-[13px] font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors shadow-sm">Upload new photo</button>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSave} className="p-6 lg:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#334155]">Full Name</label>
                    <input type="text" placeholder="Enter full name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:ring-4 focus:ring-[#0078FF]/20 focus:border-[#0078FF] rounded-xl text-[#0F172A] font-medium transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#334155]">Professional Title</label>
                    <input type="text" placeholder="e.g. Senior Frontend Developer" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:ring-4 focus:ring-[#0078FF]/20 focus:border-[#0078FF] rounded-xl text-[#0F172A] font-medium transition-all outline-none" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-[#334155]">Bio / Tagline</label>
                    <textarea rows="3" placeholder="Tell us about yourself..." value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:ring-4 focus:ring-[#0078FF]/20 focus:border-[#0078FF] rounded-xl text-[#0F172A] font-medium transition-all outline-none resize-none"></textarea>
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <button type="submit" className="w-full lg:w-auto px-8 py-4 lg:py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg">{isSaving ? 'Saving...' : 'Save Profile'}</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* SECURITY & PASSWORD TAB */}
        {currentTab === 'security' && (
          <motion.div key="security" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-6 lg:space-y-8">
            
            {/* 2FA Card */}
            <div className="bg-white rounded-2xl lg:rounded-[24px] border border-[#E2E8F0] shadow-sm p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
                  Two-Factor Authentication (2FA)
                  {formData.twoFactorEnabled && <CheckBadgeIcon className="w-6 h-6 text-green-500" />}
                </h3>
                <p className="text-[14px] text-[#64748B] mt-1.5 max-w-xl">Add an extra layer of security to your account. We will require a verification code alongside your password.</p>
              </div>
              <button onClick={() => { setFormData({...formData, twoFactorEnabled: !formData.twoFactorEnabled}); showToast(formData.twoFactorEnabled ? '2FA Disabled' : '2FA Enabled'); }} className={`w-full lg:w-auto px-6 py-4 lg:py-3 rounded-xl font-bold transition-all ${formData.twoFactorEnabled ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'}`}>
                {formData.twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
              </button>
            </div>

            {/* Password Change */}
            <div className="bg-white rounded-2xl lg:rounded-[24px] border border-[#E2E8F0] shadow-sm p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Change Password</h3>
              <div className="max-w-md space-y-4">
                <input type="password" placeholder="Current Password" className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0F172A] rounded-xl text-[#0F172A] outline-none font-medium" />
                <input type="password" placeholder="New Password" className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0F172A] rounded-xl text-[#0F172A] outline-none font-medium" />
                <input type="password" placeholder="Confirm New Password" className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0F172A] rounded-xl text-[#0F172A] outline-none font-medium hidden lg:block" />
                <button onClick={handleSave} className="w-full py-4 lg:py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-xl mt-2 transition-all active:scale-95">Update Password</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* PREFERENCES TAB */}
        {currentTab === 'preferences' && (
          <motion.div key="prefs" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="bg-white rounded-2xl lg:rounded-[24px] border border-[#E2E8F0] shadow-sm p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#0F172A]">Notification Preferences</h3>
            <p className="text-[14px] text-[#64748B] mt-1 mb-6">Choose what we email you about.</p>
            
            {/* Fully Functional Toggle */}
            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#0F172A]">Marketing Emails</p>
                <p className="text-sm text-[#64748B]">Receive updates on new features and tips.</p>
              </div>
              <div 
                onClick={() => setFormData({...formData, marketingEmails: !formData.marketingEmails})}
                className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${formData.marketingEmails ? 'bg-[#00A86B]' : 'bg-[#CBD5E1]'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all duration-300 ${formData.marketingEmails ? 'right-0.5' : 'left-0.5'}`}></div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto w-full font-sans">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -20, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: -20, x: '-50%' }} className="fixed top-6 left-1/2 z-50 px-6 py-4 rounded-full shadow-2xl font-bold text-white bg-[#0F172A] flex items-center gap-2 text-sm whitespace-nowrap">
            <CheckBadgeIcon className="w-5 h-5 text-[#00A86B]" /> {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================
          DESKTOP VIEW (Visible lg and up)
          Restored completely to the previous desktop layout
          ==================================================== */}
      <div className="hidden lg:block px-4 sm:px-6 lg:px-12 py-10">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">Account Settings</h1>
          <p className="mt-2 text-[16px] text-[#64748B] font-medium">Manage your profile, security, and preferences.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-64 flex-shrink-0">
            <nav className="space-y-1.5 sticky top-28">
              {SIDEBAR_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-[15px] transition-all duration-200 ${
                      isActive ? 'bg-[#0F172A] text-white shadow-md' : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                    }`}
                  >
                    <tab.icon className={`w-5 h-5 ${isActive ? 'text-[#0078FF]' : 'text-[#94A3B8]'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="flex-grow min-w-0">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* ====================================================
          MOBILE VIEW (Visible below lg) 
          ==================================================== */}
      <div className="lg:hidden flex flex-col min-h-[calc(100vh-80px)] bg-[#F8FAFC]">
        {mobileView === 'menu' ? (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="p-4 sm:p-6 pb-24">
            <h1 className="text-3xl font-black text-[#0F172A] mb-6 px-2 tracking-tight">Settings</h1>
            
            {/* Mobile Profile Summary Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-[#EBF4FA] mb-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#A259FF] text-white flex items-center justify-center text-2xl font-black shadow-md mb-3">
                <UserCircleIcon className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-black text-[#0F172A]">{formData.fullName || 'User Profile'}</h2>
              <p className="text-sm font-bold text-[#0078FF] mb-4">{formData.role || 'No title set'}</p>
              <button onClick={() => setMobileView('profile')} className="w-full py-3 bg-[#EBF4FA] text-[#0F172A] font-bold rounded-xl active:scale-95 transition-transform">Edit Profile</button>
            </div>

            {/* Mobile Settings Menu List */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-[#EBF4FA] overflow-hidden">
              {SIDEBAR_TABS.slice(1).map((tab, idx) => (
                <div key={tab.id} onClick={() => setMobileView(tab.id)} className={`flex items-center justify-between p-5 active:bg-[#F8FAFC] transition-colors cursor-pointer ${idx !== SIDEBAR_TABS.length - 2 ? 'border-b border-[#EBF4FA]' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl ${tab.bg} ${tab.color}`}><tab.icon className="w-6 h-6" /></div>
                    <span className="font-bold text-[#0F172A] text-[15px]">{tab.label}</span>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-[#94A3B8]" />
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-white rounded-[2rem] p-5 shadow-sm border border-[#EBF4FA] flex items-center justify-center gap-2 text-red-600 font-bold active:bg-red-50 transition-colors">
              <ArrowRightOnRectangleIcon className="w-5 h-5" /> Sign Out
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-grow flex flex-col bg-white">
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-4 py-4 border-b border-[#EBF4FA] flex items-center gap-3 z-10 shadow-sm">
              <button onClick={() => setMobileView('menu')} className="p-2 -ml-2 text-[#0F172A] hover:bg-[#F8FAFC] rounded-full active:scale-95"><ArrowLeftIcon className="w-6 h-6" /></button>
              <h2 className="text-lg font-black text-[#0F172A] capitalize">{SIDEBAR_TABS.find(t => t.id === mobileView)?.label || mobileView}</h2>
            </div>
            <div className="p-4 sm:p-6 pb-24 overflow-y-auto bg-[#F8FAFC] h-full">
              {renderTabContent()}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}