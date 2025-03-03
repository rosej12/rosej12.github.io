import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';

function Practice() {
  const { subject, topic } = useParams(); // Get the subject and topic from the URL
  
  // Define the question sets
  const questionSet = {
    math: {
      algebra: [
        {
        id: 1,
        question: 'Solve for x in 5x + 3 = 13.',
        options: [
          { answer: '1', feedback: 'Incorrect. Try solving for x.' },
          { answer: '2', feedback: 'Correct! You solved for x correctly.' },
          { answer: '3', feedback: 'Incorrect. Remember to isolate x.' },
          { answer: '4', feedback: 'Incorrect. Check your math.' }
        ],
        correctAnswer: '2'
      },
      {
        id: 2,
        question: 'What is the simplified form of 10/2?',
        options: [
          { answer: '5', feedback: 'Correct! 10/2 simplifies to 5.' },
          { answer: '5/2', feedback: 'Incorrect. Try dividing 10 by 2.' },
          { answer: '10', feedback: 'Incorrect. You might have missed the division.' },
          { answer: '2', feedback: 'Incorrect. Think about how division works.' }
        ],
        correctAnswer: '5'
      },
        {
          "id": 3,
          "question": "Solve for x in the equation 3x + 7 = 22.",
          "options": [
            { "answer": "15", "feedback": "Incorrect. Try subtracting 7 from both sides first to isolate the term with x." },
            { "answer": "5", "feedback": "Correct! By subtracting 7 from both sides and then dividing by 3, you get x = 5." },
            { "answer": "10", "feedback": "Incorrect. You might have made a mistake in your calculations. Try solving step by step." },
            { "answer": "-5", "feedback": "Incorrect. Check your work and make sure you're solving for x correctly." }
          ],
          "correctAnswer": "5"
        }
      ],
      geometry: []
    }
  };

  // Get questions based on the subject and topic
  const questions = questionSet[subject] && questionSet[subject][topic] ? questionSet[subject][topic] : [];

  return (
    <div>
      <h1>{topic.charAt(0).toUpperCase() + topic.slice(1)} Practice</h1>
      {questions.length > 0 ? (
        <div>
          {/* Render each question */}
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question.question}
              options={question.options}
              correctAnswer={question.correctAnswer}
            />
          ))}
        </div>
      ) : (
        <p>No questions available for this subject and topic.</p>
      )}
    </div>
  );
}

export default Practice;
