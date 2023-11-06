"use client"

import { useState } from "react";

const Chat: React.FC<{ chatMessages: string[], sendMessage: Function }>  = ({chatMessages, sendMessage}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSendMessage}>Küldés</button>
    </div>
  );
};

export default Chat;