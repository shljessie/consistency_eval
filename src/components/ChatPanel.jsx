import Message from './Message';
import React from 'react';

const ChatPanel = ({ messages }) => {
  // This function will alternate messages from Bot2 and Bot1
  const renderMessages = () => {
    const messageComponents = [];

    messages.forEach((messageBlock, index) => {
      // Push Bot2's message
      if (messageBlock["Bot 2"]) {
        messageComponents.push(
          <Message key={`Bot2-${index}`} sender="Bot2" message={messageBlock["Bot 2"]} />
        );
      }

      // Push Bot1's message
      if (messageBlock["Bot 1"]) {
        messageComponents.push(
          <Message key={`Bot1-${index}`} sender="Bot1" message={messageBlock["Bot 1"]} />
        );
      }
    });

    return messageComponents;
  };

  return <div className="chat-panel">{renderMessages()}</div>;
};

export default ChatPanel;
