import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase/config";
import {
  getUserInterest,
  listenToMessages,
  sendMessage,
} from "../firebase/dbService";

import ChatHeader from "../components/ChatHeader";
import SidebarProfile from "../components/SidebarProfile";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const uid = auth.currentUser.uid;

    getUserInterest(uid).then((res) => {
      setInterest(res);
    });

    const unsub = listenToMessages((snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsub();
  }, []);

  const handleSend = async () => {
    if (message.trim()) {
      await sendMessage(auth.currentUser.displayName, message);
      setMessage("");
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <ChatHeader />
      <div className="flex flex-1 overflow-hidden">
        <SidebarProfile interest={interest} />
        <main className="flex-1 flex flex-col p-4 relative z-0">

          <MessageList messages={messages} />
          <MessageInput
            interest={interest}
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />
        </main>
      </div>
    </div>
  );
};

export default Chat;
