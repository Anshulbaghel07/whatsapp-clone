import React from "react";
import { logoutUser } from "../firebase/authService";

const ChatHeader = () => {
  return (
    <header className="px-6 py-4 bg-white text-gray-800 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
        🏏 <span>Cricket Chat</span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm"
      >
        Logout
      </button>
    </header>
  );
};

export default ChatHeader;
