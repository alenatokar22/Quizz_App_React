import React, { useState } from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="section__score">
          <div>
            Correct answers {score} from {questions.length}
          </div>
          <button className="refresh__btn" onClick={refresh}>
            Try again
          </button>
        </div>
      ) : (
        <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span>Question {currentQuestion + 1} </span> / {questions.length}
            </div>
            <div className="question__text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map((item, index) => (
              <button
                key={"btAnswer" + index}
                onClick={() => handleAnswerOptionClick(item.isCorrect)}
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
