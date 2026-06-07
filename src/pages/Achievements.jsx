import React from 'react';

function Achievements() {
  return (
    <div className="content">
      <div className="trend-card">
        <img src="/images/bicycle.svg" alt="Трендовая тренировка" className="trend-image" />
        <div className="trend-content">
            <h2 className="trend-title">Самые трендовые тренировки!</h2>
            <p className="trend-stats">1 234 просмотров сегодня</p>
            <a href="#" className="trend-link">Подробнее →</a>
        </div>
      </div>

      <div className="workout-slider-section full-width">
        <div className="slider-header">
            <h2>Трендовые тренировки</h2>
            <button className="scroll-right-btn" onClick={() => document.getElementById('trendSlider').scrollBy({ left: 200, behavior: 'smooth' })}>
            <img src="/images/arrow-btn.svg" alt="Вперёд" />
            </button>
        </div>
        
        <div className="trend-slider" id="trendSlider">
            {/* Карточка 1 */}
            <div className="trend-cards">
            <img src="images/run.svg" alt="Йога" className="trend-image" />
            <div className="trend-contents">
                <h3>Бег</h3>
                <p className="trend-stat">10 мин</p>
                <p className='trend-stat'>Начальный</p>
            </div>
            </div>
            
            {/* Карточка 2 */}
            <div className="trend-cards">
            <img src="images/cardio.svg" alt="Кардио" className="trend-image" />
            <div className="trend-contents">
                <h3>Кардио</h3>
                <p className="trend-stat">10 мин</p>
                <p className='trend-stat'>Начальный</p>
            </div>
            </div>
            
            {/* Карточка 3 */}
            <div className="trend-cards">
            <img src="images/static.svg" alt="Планка" className="trend-image" />
            <div className="trend-contents">
                <h3>Планка</h3>
                <p className="trend-stat">5 мин</p>
                <p className='trend-stat'>Эксперт</p>
            </div>
            </div>
            
            {/* Карточка 4 */}
            <div className="trend-cards">
            <img src="images/powerlifting.svg" alt="Силовая" className="trend-image" />
            <div className="trend-contents">
                <h3>Силовая</h3>
                <p className="trend-stat">60 мин</p>
                <p className='trend-stat'>Средний</p>
            </div>
            </div>
        </div>
        </div>
        <h1 className='title-achievements'>Маленькими шагами к большим целям! </h1>

        <div className="exercise-stats">
        <div className="stat-block">
            <img src="/images/fire.svg" alt="Планка" className="stat-icon" />
            <h3 className="stat-name">Планка</h3>
        </div>
        
        <div className="stat-block">
            <img src="/images/sprint.svg" alt="Спринт" className="stat-icon" />
            <h3 className="stat-name">Спринт</h3>
        </div>
        
        <div className="stat-block">
            <img src="/images/bottle.svg" alt="Вода" className="stat-icon" />
            <h3 className="stat-name">Вода</h3>
        </div>
        </div>

    </div>
  );
}

export default Achievements;