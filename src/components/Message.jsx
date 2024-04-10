import React from 'react';

const Message = ({ sender, message }) => {
  return (
    <div className={`message ${sender}`}>
      <div className="message-sender">{sender} :</div>
      <div className="message-content">{message}</div>
    </div>
  );
};

export default Message;
