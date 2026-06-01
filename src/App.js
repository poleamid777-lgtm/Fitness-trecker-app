import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div>Test text Proverks</div>
    </div>
  )
}
export default App;




















// import React, { useState, useEffect } from 'react';
// import './App.css';
// // 
// function App() {
//   // Состояния для трекеров
//   const [energy, setEnergy] = useState(99);
//   const [calories, setCalories] = useState(645);
//   const [steps, setSteps] = useState(999);
//   const [water, setWater] = useState(6);
//   const [sleep, setSleep] = useState(7.8);
//   const [completedTasks, setCompletedTasks] = useState(3);
  
//   // Данные для календаря (активность по дням)
//   const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
//   const [activity, setActivity] = useState({
//     'M': 30, 'T': 31, 'W': 1, 'T': 0, 'F': 5, 'S': 4, 'S': 5
//   });
  
//   const [selectedDay, setSelectedDay] = useState('T'); // сегодняшний день
  
//   // Загрузка сохраненных данных
//   useEffect(() => {
//     const saved = localStorage.getItem('fitness_data');
//     if (saved) {
//       const data = JSON.parse(saved);
//       setSteps(data.steps || 999);
//       setWater(data.water || 6);
//       // остальные данные
//     }
//   }, []);
  
//   // Автосохранение
//   useEffect(() => {
//     localStorage.setItem('fitness_data', JSON.stringify({
//       steps, water, calories, energy, sleep, completedTasks
//     }));
//   }, [steps, water, calories, energy, sleep, completedTasks]);
  
//   // Функции для взаимодействия
//   const addStep = () => setSteps(prev => Math.min(2000, prev + 100));
//   const addWater = () => setWater(prev => Math.min(8, prev + 1));
//   const completeTask = () => setCompletedTasks(prev => Math.min(3, prev + 1));
  
//   return (
//     <div className="app">
//       {/* Календарь активности */}
//       <div className="activity-calendar">
//         <div className="section-header">
//           <h3>Activity</h3>
//           <span className="today-label">Today</span>
//         </div>
        
//         <div className="week-grid">
//           {weekDays.map(day => (
//             <div 
//               key={day} 
//               className={`day-cell ${selectedDay === day ? 'active' : ''}`}
//               onClick={() => setSelectedDay(day)}
//             >
//               <span className="day-name">{day}</span>
//               <span className="day-value">{activity[day]}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Приветствие */}
//       <div className="greeting">
//         <h2>Hello! 👋</h2>
//       </div>
      
//       {/* Energy of the day */}
//       <div className="energy-card">
//         <div className="energy-header">
//           <span>⚡ Energy of the day:</span>
//           <span className="energy-value">{energy}%</span>
//         </div>
//         <div className="energy-bar">
//           <div className="energy-fill" style={{ width: `${energy}%` }}></div>
//         </div>
//       </div>
      
//       {/* Тамагочи */}
//       <div className="tamagotchi">
//         <div className="pet-container">
//           <div className="pet-emoji">🐱</div>
//           <div className="pet-name">Чарли</div>
//         </div>
//       </div>
      
//       {/* Активные калории */}
//       <div className="calories-card">
//         <div className="calories-value">{calories}</div>
//         <div className="calories-label">Active calories</div>
//         <div className="calories-unit">Cal</div>
//       </div>
      
//       {/* Трекеры в виде сетки 2x2 */}
//       <div className="trackers-grid">
//         {/* Steps */}
//         <div className="tracker-card">
//           <div className="tracker-icon">👣</div>
//           <div className="tracker-value">{steps}/2000</div>
//           <div className="tracker-label">Steps</div>
//           <button className="tracker-btn" onClick={addStep}>+100</button>
//         </div>
        
//         {/* Water */}
//         <div className="tracker-card">
//           <div className="tracker-icon">💧</div>
//           <div className="tracker-value">{water}/8</div>
//           <div className="tracker-label">Water</div>
//           <button className="tracker-btn" onClick={addWater}>+1 Cup</button>
//         </div>
        
//         {/* Sleep */}
//         <div className="tracker-card">
//           <div className="tracker-icon">😴</div>
//           <div className="tracker-value">{sleep}h</div>
//           <div className="tracker-label">Sleep</div>
//           <button className="tracker-btn" onClick={() => setSleep(prev => (prev + 0.5).toFixed(1))}>+0.5h</button>
//         </div>
        
//         {/* Tasks */}
//         <div className="tracker-card">
//           <div className="tracker-icon">✅</div>
//           <div className="tracker-value">{completedTasks}/3</div>
//           <div className="tracker-label">Tasks</div>
//           <button className="tracker-btn" onClick={completeTask}>Complete</button>
//         </div>
//       </div>
      
//       {/* Мотивационная фраза */}
//       <div className="motivation">
//         <p>✨ Believe in yourself! ✨</p>
//       </div>
//     </div>
//   );
// }

// export default App;