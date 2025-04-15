import React from "react";
import { auth } from "../firebase/config";

const MessageBubble = ({ msg }) => {
  const isCurrentUser = msg.name === auth.currentUser.displayName;
  const avatarInitial = msg.name.charAt(0).toUpperCase();

  return (
    <div
      className={`flex items-end gap-2 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isCurrentUser && (
        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
          {avatarInitial}
        </div>
      )}
      <div
        className={`max-w-[70%] px-4 py-2 rounded-xl text-sm shadow-sm ${
          isCurrentUser
            ? "bg-green-100 text-gray-900 rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        {!isCurrentUser && (
          <p className="text-xs font-semibold text-green-600 mb-1">
            {msg.name}
          </p>
        )}
        <p>{msg.text}</p>
        <span className="text-[10px] text-gray-500 block text-right mt-1">
          {msg.timestamp?.toDate().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
