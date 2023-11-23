"use client"

import { Player } from "@/app/classes/Player";
import { useState } from "react";
import styles from "@/styles/Chat.module.css";

const Chat: React.FC<{ chatMessages: { sender: Player, msg: string }[], sendMessage: Function }> = ({ chatMessages, sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.messages}>

        {chatMessages.length > 0 ? (
          <div>
            {chatMessages.map((message, index) => (
              <div className={styles.message} key={index}>{message.sender.playerName}: {message.msg}</div>
            ))}
          </div>
        ) : (
          <div>No messages</div>
        )}
      </div>
      <div className={styles.input}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{width: "100%"}}
        />
        <button onClick={handleSendMessage}>Küldés</button>
      </div>
    </div>
  );
};

export default Chat;