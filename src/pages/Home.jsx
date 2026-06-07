import React, { useState } from 'react';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Поиск:', searchTerm);
    // Здесь будет логика поиска
  };

  return (
    <div className="content">

      <h1 className="welcome-title">Доброе утро!</h1>
      <h2>Давай потренируемся!</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-container">
          <img src="images/search-loop.svg" alt="Поиск" className="search-loop" />
          <input 
            type="text"
            className="search-input"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    
      <div className="workout-slider-section full-width">
        <div className="slider-header">
            <h2>Популярные тренировки</h2>
            <button className="scroll-right-btn" onClick={() => document.getElementById('workoutSlider').scrollBy({ left: 200, behavior: 'smooth' })}>
            <img src="images/arrow-btn.svg" alt="Кнопка" />
            </button>
        </div>
        
        <div className="workout-slider" id="workoutSlider">
            {/* Блок 1 */}
            <a href="#" className="workout-card-link">
            <div className="workout-card">
            <h3>Тренировка на ноги</h3>    
            <div className="workout-footer"> 
                
                <div className="workout-stats">
                    <div className="stat">
                    <img src="images/kkal.svg" alt="ККалории" />
                    <span>500 ккал</span>
                    </div>
                    <div className="stat">
                    <img src="images/timer.svg" alt="Время" />
                    <span>50 мин</span>
                    </div>
                </div>
                <img src="images/ex-arms.svg" alt="Тренировка" className="workout-image" />
            </div>
            </div>
            </a>

            {/* Блок 2 */}
            <a href="#" className="workout-card-link">
            <div className="workout-card">
            <h3>Бокс для начинающих</h3>    
            <div className="workout-footer"> 
                
                <div className="workout-stats">
                    <div className="stat">
                    <img src="images/kkal.svg" alt="Ккалории" />
                    <span>250 ккал</span>
                    </div>
                    <div className="stat">
                    <img src="images/timer.svg" alt="Время" />
                    <span>25 мин</span>
                    </div>
                </div>
                <img src="images/ex-box.svg" alt="Тренировка" className="workout-image" />
            </div>
            </div>
            </a>

            {/* Блок 3 */}
            <a href="#" className="workout-card-link">
            <div className="workout-card">
            <h3>Тренировка на пресс</h3>    
            <div className="workout-footer"> 
                
                <div className="workout-stats">
                    <div className="stat">
                    <img src="images/kkal.svg" alt="Ккалории" />
                    <span>300 ккал</span>
                    </div>
                    <div className="stat">
                    <img src="images/timer.svg" alt="Время" />
                    <span>20 мин</span>
                    </div>
                </div>
                <img src="images/ex-press.svg" alt="Тренировка" className="workout-image" />
            </div>
            </div>
            </a>
        </div>
        </div>

        <h2 className='plan-on-day'>План на день</h2>
        <div className="exercise-card">
        <img src="images/pushups.svg" alt="Отжимания" className="exercise-image" />
        <div className="exercise-content">
            <div className="exercise-header">
                <span className="exercise-badge">средний</span>
            </div>
            <h3 className="exercise-title">Отжимания</h3>
            <p className="exercise-count">25 раз в день</p>
            <div className="progress-section">
                <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '45%' }}>
                        <span className="progress-label">45%</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="exercise-card">
        <img src="images/squads.svg" alt="Приседания" className="exercise-image" />
        <div className="exercise-content">
            <div className="exercise-header">
                <span className="exercise-badge">начальный</span>
            </div>
            <h3 className="exercise-title">Приседания</h3>
            <p className="exercise-count">20 раз в день</p>
            <div className="progress-section">
                <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '60%' }}>
                        <span className="progress-label">60%</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="exercise-card">
        <img src="images/stretching.svg" alt="Растяжка" className="exercise-image" />
        <div className="exercise-content">
            <div className="exercise-header">
                <span className="exercise-badge">эксперт</span>
            </div>
            <h3 className="exercise-title">Растяжка</h3>
            <p className="exercise-count">2 раза в день</p>
            <div className="progress-section">
                <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '100%' }}>
                        <span className="progress-label">100%</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  );
}

export default Home;