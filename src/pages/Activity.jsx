import React, { useState } from 'react';

function Activity() {
  const weekDays = [
    { day: 'Пн', date: 31 },
    { day: 'Вт', date: 1 },
    { day: 'Ср', date: 2 },
    { day: 'Чт', date: 3 },
    { day: 'Пт', date: 4 },
    { day: 'Сб', date: 5 },
    { day: 'Вс', date: 6 }
  ];
  const [selectedDay, setSelectedDay] = useState('Пн');

  return (
    <div className="content">
        <h2>Сегодня</h2>
        <div className="activity-week-card">
            <div className="week-days">
            {weekDays.map(item => (
                <div 
                key={item.day}
                className={`week-day ${selectedDay === item.day ? 'selected' : ''}`}
                onClick={() => setSelectedDay(item.day)}
                >
                <span className="day-name">{item.day}</span>
                <span className="day-date">{item.date}</span>
                {selectedDay === item.day && <div className="day-dot"></div>}
                </div>
            ))}
            </div>
        </div>
        <img src="images/welcome.svg" alt="Приветствие" className='welcome-img'/>
        <div className="card-energy">
            <h3>Энергия за день</h3>
            <h3>45%</h3>
            <div className="progress-bar-bg-activity">
                <div className="progress-bar-fill-activity" style={{ width: '45%' }}></div>
            </div>
        </div>
        <div className="card-energy">
            <h3>Ккал за день</h3>
            <h3>645/1600</h3>
            <div className="progress-bar-bg-activity">
                <div className="progress-bar-fill-activity" style={{ width: '60%' }}></div>
            </div>
        </div>

        <div className="stat-cards-day">
            <div className="stat-card-day">
                <div className="stat-card-day-header">
                    <img src="images/steps.svg" alt="Шаги" />
                    <h3>Шаги</h3>
                </div>
                <div className='stat-card-day-footer'>
                    <p>999/5000</p>
                    <div className="progress-bar-bg-activity">
                        <div className="progress-bar-fill-activity" style={{ width: '20%' }}></div>
                    </div>
                </div>
            </div>
            <div className="stat-card-day">
                <div className="stat-card-day-header">
                    <img src="images/water.svg" alt="Шаги" />
                    <h3>Вода</h3>
                </div>
                <div className='stat-card-day-footer'>
                    <p>2/6 стаканов</p>
                    <div className="progress-bar-bg-activity">
                        <div className="progress-bar-fill-activity" style={{ width: '20%' }}></div>
                    </div>
                </div>
            </div>
            <div className="stat-card-day">
                <div className="stat-card-day-header">
                    <img src="images/sleep.svg" alt="Шаги" />
                    <h3>Сон</h3>
                </div>
                <div className='stat-card-day-footer'>
                    <p>8ч 45мин</p>
                    <div className="progress-bar-bg-activity">
                        <div className="progress-bar-fill-activity" style={{ width: '20%' }}></div>
                    </div>
                </div>
            </div>
            <div className="stat-card-day">
                <div className="stat-card-day-header">
                    <img src="images/tasks.svg" alt="Шаги" />
                    <h3>Цели</h3>
                </div>
                <div className='stat-card-day-footer'>
                    <p>1/3</p>
                    <div className="progress-bar-bg-activity">
                        <div className="progress-bar-fill-activity" style={{ width: '20%' }}></div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  );
}

export default Activity;