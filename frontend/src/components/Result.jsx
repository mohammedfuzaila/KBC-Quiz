import React from 'react';

const Result = ({ score, total, onRestart }) => {
  const getMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "UNBELIEVABLE! You are a Crorepati!";
    if (percentage >= 70) return "Excellent job! You have great knowledge.";
    if (percentage >= 40) return "Not bad! Keep practicing.";
    return "Better luck next time!";
  };

  return (
    <div className="card">
      <h1 style={{ color: '#ffd700', marginBottom: '1rem' }}>QUIZ FINISHED</h1>
      <div style={{ fontSize: '1.5rem', margin: '2rem 0' }}>
        Total Score: <span style={{ color: '#4facfe', fontWeight: 'bold' }}>{score}</span> / {total}
      </div>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#adb5bd' }}>
        {getMessage()}
      </p>
      <button className="btn-primary" onClick={onRestart}>RESTART QUIZ</button>
    </div>
  );
};

export default Result;
