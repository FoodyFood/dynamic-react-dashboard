import React, { useEffect, useState } from 'react';
import '../styles/Messages.module.css';

export function Messages({ socket }) {
  const [notification, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        return newMessages;
      });
    };
  
    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };
  
    socket.on('notification', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('token', "BF2FAD14");

    return () => {
      socket.off('notification', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
      {[...Object.values(notification)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div
            key={message.id}
            className="message-container"
            // title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            <span className="user">{notification.message}</span>
            {console.log(notification)}
            {/* <span className="message">{notification.value}</span>
            <span className="date">{new Date(message.time).toLocaleTimeString()}</span> */}
          </div>
        ))
      }
    </div>
  );
}


export const NewMessage = ({socket}) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};
