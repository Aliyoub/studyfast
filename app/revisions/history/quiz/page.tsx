'use client'

import { useState } from "react";

import { questions } from "./quizzData";

const HistoryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Résultat: {score} / {questions.length}</h2>
          <p>{score >= 5 ? "Bravo, bonne maîtrise du sujet!" : "Vous pouvez réviser encore un peu."}</p>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryQuiz;
