/**
 * Question.js
 * 
 * This component displays a question with its multiple choice options as radio buttons and a submit button.
 * The user selects an option and submits and feedback will be given based on the chosen option.
 * 
 * Properties:
 * - question (string): the question to be displayed
 * - options (object): the answer options and their corresponding feedback (Details in Practice.js)
 * - correctAnswer (string): the correct answer for the question
 **/

import React, { useState } from 'react';

function Question({ question, options, correctAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');		// user's selected answer
  const [answered, setAnswered] = useState(false);						// whether question has been answered
  const [feedback, setFeedback] = useState('');								// current feedback to display

  // when the user changes their selection
  // update the selected answer and reset feedback
  const handleSelectionChange = (e) => {
    setSelectedAnswer(e.target.value);
    setFeedback('');
    setAnswered(false);
  };

  // when answer is submitted, update feedback given for the selected answer
  const handleSubmit = (e) => {
  	const selectedOption = options.find(option => option.answer === selectedAnswer);
    e.preventDefault();
    setFeedback(selectedOption.feedback);
    setAnswered(true);
  };

	// return the className corresponding to if the option is selected and correct/incorrect
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

  // display question and answer options
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
