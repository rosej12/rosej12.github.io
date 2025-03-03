import React, { useState } from 'react';

function Question({ question, options, correctAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');

  // update selected answer and reset feedback
  const handleSelectionChange = (e) => {
    setSelectedAnswer(e.target.value);
    setFeedback('');
    setAnswered(false);
  };

  // update feedback given for the selected answer
  const handleSubmit = (e) => {
  	const selectedOption = options.find(option => option.answer === selectedAnswer);
    e.preventDefault();
    setFeedback(selectedOption.feedback);
    setAnswered(true);
  };

	// apply a color to the options based on if option is correct/incorrect
  const getOptionClass = (option) => {

    // Check if question is answered
    if (!answered) return '';

    // Correct answer
    if (option.answer == correctAnswer && selectedAnswer == correctAnswer) {
      return 'correct';
    }

    // Incorrect answer
    if (option.answer == selectedAnswer && selectedAnswer != correctAnswer) {
      return 'incorrect';
    }

    return '';
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          {options.map((option, index) => (
            <li key={index} className={getOptionClass(option)}>
              <label>
                <input
                  type="radio"
                  value={option.answer}
                  checked={selectedAnswer === option.answer}
                  onChange={handleSelectionChange}
                />
                {option.answer}
              </label>
            </li>
          ))}
        </ul>
        <button type="submit" disabled={!selectedAnswer}>Submit</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default Question;
