import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({ message, setMessage, handleSend, interest }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  if (interest !== "Playing Cricket") {
    return (
      <p className="text-gray-500 italic text-center mt-3">
        You can read messages but cannot send any.
      </p>
    );
  }

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="mt-3 relative">
      {/* Emoji picker toggle button */}
      <button
        onClick={() => setShowEmojiPicker((prev) => !prev)}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-xl"
      >
        😊
      </button>

      {/* Emoji picker dropdown */}
      {showEmojiPicker && (
        <div className="absolute bottom-14 left-0 z-50 shadow-md">
          <EmojiPicker onEmojiClick={handleEmojiClick} height={350} width={300} />
        </div>
      )}

      <div className="flex gap-2 pl-10">
        <input
          className="flex-1 border border-gray-200 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
