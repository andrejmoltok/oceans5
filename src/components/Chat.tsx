"use client"

import { Player } from "@/app/classes/Player";
import { useState } from "react";

const Chat: React.FC<{ chatMessages: {sender: Player, msg: string}[], sendMessage: Function }>  = ({chatMessages, sendMessage}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      {chatMessages.length > 0 ? (
        <div>
          {chatMessages.map((message, index) => (
            <div key={index}>{message.sender.playerName}: {message.msg}</div>
          ))}
        </div>
      ) : (
        <div>Nincs üzenet</div>
      )}
  
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