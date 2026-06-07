import React from 'react';

function Profile() {
  return (
    <div className="content">
      <div className="profile-mascot-wrapper">
        <div className="profile-mascot">
          <img src="/images/profile-avatar.png" alt="avatar" className='profile-avatar'/>
        </div>
        <h1>Моника</h1>
      </div>

      <div className="stats-row">
        <div className="stat-card">
            <p className="stat-label">Рост</p>
            <p className="stat-value">180 см</p>
        </div>
        <div className="stat-card">
            <p className="stat-label">Вес</p>
            <p className="stat-value">64 кг</p>
        </div>
        <div className="stat-card">
            <p className="stat-label">Возраст</p>
            <p className="stat-value">25 лет</p>
        </div>
    </div>
    
    <div className="activity-section">
    <h2 className="activity-title">Твоя активность</h2>
    
        <div className="activity-bars">
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '60%' }}></div>
                </div>
            </div>
            <span className="bar-day">Пн</span>
            </div>
            
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '40%' }}></div>
                </div>
            </div>
            <span className="bar-day">Вт</span>
            </div>
            
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '80%' }}></div>
                </div>
            </div>
            <span className="bar-day">Ср</span>
            </div>
            
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '25%' }}></div>
                </div>
            </div>
            <span className="bar-day">Чт</span>
            </div>
            
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '90%' }}></div>
                </div>
            </div>
            <span className="bar-day">Пт</span>
            </div>
            
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '55%' }}></div>
                </div>
            </div>
            <span className="bar-day">Сб</span>
            </div>
            
            <div className="bar-item">
            <div className="bar-container">
                <div className="bar-bg">
                <div className="bar-fill" style={{ height: '30%' }}></div>
                </div>
            </div>
            <span className="bar-day">Вс</span>
            </div>
        </div>
        </div>

        <div className="notification">
        <span className="notification-label">Уведомления</span>
        <label className="toggle-switch">
            <input type="checkbox" className="toggle-input" />
            <span className="toggle-slider"></span>
        </label>
        </div>

    </div>
  );
}

export default Profile;