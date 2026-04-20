import React, { useState, useEffect, useCallback } from 'react';

const Quiz = ({ questions, onFinish }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswered, setIsAnswered] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [isLifelineUsed, setIsLifelineUsed] = useState(false);

  const currentQuestion = questions[currentIdx];

  const handleNext = useCallback(() => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setTimeLeft(15);
      setIsAnswered(false);
      setHiddenOptions([]);
    } else {
      onFinish(score);
    }
  }, [currentIdx, questions.length, score, onFinish]);

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      setIsAnswered(true);
      // Auto move after a small delay if user didn't answer
      setTimeout(handleNext, 2000);
    }
  }, [timeLeft, isAnswered, handleNext]);

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === currentQuestion.correct_answer) {
      setScore(prev => prev + 1);
    }
    
    // Auto move to next after 2 seconds
    setTimeout(handleNext, 2000);
  };

  const useFiftyFifty = () => {
    if (isLifelineUsed || isAnswered) return;
    
    const options = ['A', 'B', 'C', 'D'];
    const wrongOptions = options.filter(opt => opt !== currentQuestion.correct_answer);
    
    // Randomly pick two wrong options to hide
    const toHide = [];
    while (toHide.length < 2) {
      const randomOpt = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      if (!toHide.includes(randomOpt)) {
        toHide.push(randomOpt);
      }
    }
    
    setHiddenOptions(toHide);
    setIsLifelineUsed(true);
  };

  const getOptionClass = (opt) => {
    if (!isAnswered) return '';
    if (opt === currentQuestion.correct_answer) return 'correct';
    if (opt === selectedOption && opt !== currentQuestion.correct_answer) return 'wrong';
    return '';
  };

  return (
    <div className="card">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ color: '#adb5bd' }}>Question {currentIdx + 1}/{questions.length}</span>
        <span className="timer">{timeLeft}s</span>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{currentQuestion.question}</h2>

      <div className="options-grid">
        {['A', 'B', 'C', 'D'].map((opt) => (
          <button
            key={opt}
            className={`option-btn ${getOptionClass(opt)}`}
            onClick={() => handleOptionClick(opt)}
            disabled={isAnswered || hiddenOptions.includes(opt)}
            style={{ visibility: hiddenOptions.includes(opt) ? 'hidden' : 'visible' }}
          >
            <strong>{opt}:</strong> {currentQuestion[`option_${opt.toLowerCase()}`]}
          </button>
        ))}
      </div>

      <div className="lifelines">
        <button 
          className="lifeline-btn" 
          onClick={useFiftyFifty}
          disabled={isLifelineUsed || isAnswered}
        >
          {isLifelineUsed ? '50:50 (Used)' : '50:50 Lifeline'}
        </button>
      </div>

      {isAnswered && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ color: selectedOption === currentQuestion.correct_answer ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
            {selectedOption === currentQuestion.correct_answer ? 'CORRECT!' : `WRONG! Correct was ${currentQuestion.correct_answer}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
