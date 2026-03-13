// src/pages/customer/Chat.jsx
import React from 'react';
import ChatWindow from '../../components/common/ChatWindow';

const CUSTOMER_CONTACTS = [
  { id: 1, name: 'Alex Vance', role: 'MERN Stack Dev', lastMsg: 'I just uploaded the revised files.', time: '10:42 AM', unread: 1, avatar: 'AV' },
  { id: 2, name: 'Sarah UI', role: 'Adobe XD Designer', lastMsg: 'I will start the new screens tomorrow.', time: 'Yesterday', unread: 0, avatar: 'SU' },
  { id: 3, name: 'Max Art', role: 'Illustrator', lastMsg: 'Here are the final vectors.', time: 'Oct 18', unread: 0, avatar: 'MA' },
];

export default function CustomerChat() {
  return <ChatWindow contacts={CUSTOMER_CONTACTS} currentUserRole="customer" />;
}