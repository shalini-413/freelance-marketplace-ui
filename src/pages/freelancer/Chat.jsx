// src/pages/freelancer/Chat.jsx
import React from 'react';
import ChatWindow from '../../components/common/ChatWindow';

const FREELANCER_CONTACTS = [
  { id: 1, name: 'David Smith', role: 'Client (MERN Build)', lastMsg: 'Can we add a dark mode toggle?', time: '11:15 AM', unread: 2, avatar: 'DS' },
  { id: 2, name: 'TechCorp Inc.', role: 'Client (XD Design)', lastMsg: 'The login screen looks perfect.', time: 'Yesterday', unread: 0, avatar: 'TC' },
  { id: 3, name: 'Sarah L.', role: 'Client (Notebook Update)', lastMsg: 'Thanks for the quick turnaround!', time: 'Oct 12', unread: 0, avatar: 'SL' },
];

export default function FreelancerChat() {
  return <ChatWindow contacts={FREELANCER_CONTACTS} currentUserRole="freelancer" />;
}