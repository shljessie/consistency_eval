import React, { useState } from 'react';

function Sidebar() {
  // State to store answers
  const [answers, setAnswers] = useState({
    consistency: '',
    naturalness: '',
    understandability: '',
    ratingConversation1: '', // Separate rating for Conversation 1
    ratingConversation2: '', // Separate rating for Conversation 2
  });

  // Handle changing of answers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  // Optional: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('YOUR_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      const data = await response.json();
      console.log('Submission successful:', data);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };
  

  return (
    <div className="sidebar">

      <h4 style={{ marginTop:'2%'}}>Persona of Bot 1:
      
      <br/>You are Emily, a 28 year old Financial Analyst.</h4>

      <form onSubmit={handleSubmit}>
        
        <div>
          <p>1. Which Bot1 is more consistent to the given Persona?</p>
          <label><input type="radio" name="consistency" value="Conversation1" onChange={handleChange} /> Conversation1</label>
          <label><input type="radio" name="consistency" value="Conversation2" onChange={handleChange} /> Conversation2</label>
        </div>

        <div>
          <p>2. Which Bot1 is more natural?</p>
          <label><input type="radio" name="naturalness" value="Conversation1" onChange={handleChange} /> Conversation1</label>
          <label><input type="radio" name="naturalness" value="Conversation2" onChange={handleChange} /> Conversation2</label>
        </div>

        <div>
          <p>3. Which Bot1 is more understandable?</p>
          <label><input type="radio" name="understandability" value="Conversation1" onChange={handleChange} /> Conversation1</label>
          <label><input type="radio" name="understandability" value="Conversation2" onChange={handleChange} /> Conversation2</label>
        </div>

        {/* Rating for Conversation 1 */}
        <div>
        <p>4. Rate Conversation 1:</p>
        <select name="ratingConversation1" onChange={handleChange} value={answers.ratingConversation1}>
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Rating for Conversation 2 */}
      <div>
        <p>5. Rate Conversation 2:</p>
        <select name="ratingConversation2" onChange={handleChange} value={answers.ratingConversation2}>
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

        <button type="before">Previous</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Sidebar;
