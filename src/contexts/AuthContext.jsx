// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check local storage on initial load to keep user logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('partaken_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (role, data) => {
    // In a real app, this would be an API call verifying credentials
    const userData = { 
      role: role, // 'customer' or 'freelancer'
      email: data?.email || 'user@partaken.com',
      name: 'David Vance'
    };
    setUser(userData);
    localStorage.setItem('partaken_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('partaken_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};