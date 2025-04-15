// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import InterestSelection from './pages/InterestSelection';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false); // wait for auth status to be checked

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authChecked) return <div className="text-center mt-10">Checking Authentication...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/chat" /> : <Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/interest" element={user ? <InterestSelection /> : <Navigate to="/login" />} />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
