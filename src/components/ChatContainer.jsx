import React, { useEffect, useState } from 'react';

import ChatPanel from './ChatPanel';

const ChatContainer = () => {
  const [finetuneMessages, setFinetuneMessages] = useState([]);
  const [baselineMessages, setBaselineMessages] = useState([]);
  const [finetuneIndex, setFinetuneIndex] = useState(0);
  const [baselineIndex, setBaselineIndex] = useState(0);

  const finetuneFiles = [
    '/chat_data/finetune/chat_finetune_llama2_60_1e-06_profile_3.json',
    '/chat_data/finetune/chat_finetune_llama2_60_1e-06_profile_2.json',
    '/chat_data/finetune/chat_finetune_llama2_60_1e-06_knowledge_short_2.json',
    '/chat_data/finetune/chat_finetune_llama2_60_1e-06_knowledge_short_1.json',

  ];

  const baselineFiles = [
    '/chat_data/baseline/chat_baseline_7b_profile_2.json',
    '/chat_data/baseline/chat_baseline_7b_profile.json',
    '/chat_data/baseline/chat_baseline_7b_knowledge_short_1.json',
    '/chat_data/baseline/chat_baseline_7b_knowledge_short_2.json',
  ];

  useEffect(() => {
    fetch(finetuneFiles[finetuneIndex])
      .then(response => response.json())
      .then(data => setFinetuneMessages(data))
      .catch(error => console.error('Error fetching finetune chat data:', error));

    fetch(baselineFiles[baselineIndex])
      .then(response => response.json())
      .then(data => setBaselineMessages(data))
      .catch(error => console.error('Error fetching baseline chat data:', error));
  }, [finetuneIndex, baselineIndex]); 

  const handleNextFinetune = () => {
    if (finetuneIndex < finetuneFiles.length - 1) {
      setFinetuneIndex(finetuneIndex + 1);
    }
  };

  const handleNextBaseline = () => {
    if (baselineIndex < baselineFiles.length - 1) {
      setBaselineIndex(baselineIndex + 1);
    }
  };

  return (
    <div className="chat-container">
      <div>
        <h4>Conversation 1</h4>
        <ChatPanel messages={finetuneMessages} />

      </div>
      <div>
        <h4>Conversation 2</h4>
        <ChatPanel messages={baselineMessages} />

      </div>
    </div>
  );
};

export default ChatContainer;
