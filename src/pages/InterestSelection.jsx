import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { saveUserInterest, getUserInterest } from '../firebase/authService';

const InterestSelection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        navigate('/login'); // redirect if not logged in
        return;
      }

      setUser(currentUser);
      const interest = await getUserInterest(currentUser.uid);
      if (interest) {
        navigate('/chat'); // redirect if interest already exists
      }
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  const handleSelect = async (interest) => {
    if (user) {
      await saveUserInterest(user.uid, interest);
      navigate('/chat');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-xl text-gray-600 animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-200 text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Select Your Interest</h2>
        <p className="text-gray-600 text-lg mb-8">
          Choose an interest to get started with your personalized chat experience.
        </p>

        <div className="flex flex-col gap-6">
          {/* Playing Cricket Button with Tooltip */}
          <div className="relative group w-full">
            <button
              onClick={() => handleSelect('Playing Cricket')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-sm transition duration-200 w-full flex items-center justify-center text-lg cursor-pointer"
            >
              🏏 Playing Cricket
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg shadow-md">
                You can read and send messages in the chat.
              </div>
            </div>
          </div>

          {/* Watching Cricket Button with Tooltip */}
          <div className="relative group w-full">
            <button
              onClick={() => handleSelect('Watching Cricket')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-sm transition duration-200 w-full flex items-center justify-center text-lg cursor-pointer"
            >
              📺 Watching Cricket
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg shadow-md">
                You can only read messages in the chat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;
