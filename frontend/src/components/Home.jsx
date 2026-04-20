import React from 'react';

const Home = ({ onStart, loading }) => {
  return (
    <div className="card">
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffd700' }}>KBC QUIZ</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#adb5bd' }}>
        Test your knowledge and win virtual crores!
      </p>
      <button 
        className="btn-primary" 
        style={{ padding: '15px 40px', fontSize: '1.2rem' }}
        onClick={onStart}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'START GAME'}
      </button>
    </div>
  );
};

export default Home;
