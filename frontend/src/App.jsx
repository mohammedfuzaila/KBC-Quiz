import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [gameState, setGameState] = useState('home'); // home, playing, finished
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/questions/');
      setQuestions(response.data);
      setGameState('playing');
    } catch (error) {
      console.error("Error fetching questions:", error);
      alert("Failed to fetch questions. Make sure the backend is running!");
    }
    setLoading(false);
  };

  const startGame = () => {
    fetchQuestions();
  };

  const finishGame = (finalScore) => {
    setScore(finalScore);
    setGameState('finished');
  };

  const restartGame = () => {
    setScore(0);
    setGameState('home');
  };

  return (
    <div className="container">
      {gameState === 'home' && <Home onStart={startGame} loading={loading} />}
      {gameState === 'playing' && (
        <Quiz questions={questions} onFinish={finishGame} />
      )}
      {gameState === 'finished' && (
        <Result score={score} total={questions.length} onRestart={restartGame} />
      )}
    </div>
  );
}

export default App;
