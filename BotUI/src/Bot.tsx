import { useState } from 'react';
import './Bot.css';

function Bot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! How can I help?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userInput = input;
  setMessages(prev => [...prev, { sender: 'user', text: userInput }]);
  setInput('');

  try {
    //repplace the api here
    const response = await fetch('http://api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    const botReply = data.reply || 'Sorry, I didn\'t understand that.';

    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);

  } catch (error) {
    setMessages(prev => [...prev, { sender: 'bot', text: 'Error: Could not reach server.' }]);
    console.error('API error:', error);
  }
};

  return (
    <div className='page'>
    <div className="bot-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
  <div
    key={index}
    className={`message-row ${msg.sender === 'user' ? 'user' : 'bot'}`}
  >
    <div className={`message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>
      {msg.text}
    </div>
  </div>
))}
      </div>
      <div className="input-box">
        <textarea
          placeholder="Enter your query..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          className='chat-input'
        />
        <button className='btn' onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
}

export default Bot;
