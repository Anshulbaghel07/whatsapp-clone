import React, { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto bg-white rounded-xl shadow-md p-4 space-y-4">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} msg={msg} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
