import React from 'react';

function Home() {
  return (
    <div className="content">
      {/* Маскот */}
      <div className="mascot-wrapper">
        <div className="mascot">
          <img src="images/profile-avatar.png" alt="mascot" />
        </div>
      </div>

      <div className="card">
        <h3 className="text-primary">Сегодняшний прогресс</h3>
        <p className="text-primary">Шаги: 0 / 10000</p>
        <p className="text-primary">Вода: 0 / 8 стаканов</p>
      </div>

      <button className="button">
        + Добавить активность
      </button>
    </div>
  );
}

export default Home;