import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToHome = () => setCurrentPage('home');
  const goToAchievements = () => setCurrentPage('achievements');
  const goToActivity = () => setCurrentPage('activity');
  const goToProfile = () => setCurrentPage('profile');
  const renderPage = () => {
    if (currentPage === 'home') return <Home />;
    if (currentPage === 'activity') return <Activity />;
    if (currentPage === 'achievements') return <Achievements />;
    if (currentPage === 'profile') return <Profile />;
  };

  return (
    <div className="phone-container">
        {renderPage()}
      
      <div className="bottom-nav">
        <button 
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={goToHome}
        >
          <img src="/images/home-icon.svg" alt="Домашняя" />
        </button>
        <button 
          className={`nav-btn ${currentPage === 'achievements' ? 'active' : ''}`}
          onClick={goToAchievements}
        >
          <img src="/images/achievements-icon.svg" alt="Достижения" />
        </button>
        <button 
          className={`nav-btn ${currentPage === 'activity' ? 'active' : ''}`}
          onClick={goToActivity}
        >
          <img src="/images/activity-icon.svg" alt="Активность" />
        </button>
        <button 
          className={`nav-btn ${currentPage === 'profile' ? 'active' : ''}`}
          onClick={goToProfile}
        >
          <img src="/images/profile-icon.svg" alt="Профиль" />
        </button>
      </div>
    </div>
  );
}

export default App;
