import React from 'react';
import './App.css';
import KeyboardList from './components/keyboards/KeyboardList';
import MainNav from './components/navigation/MainNav';
import HomeCarousel from './components/ui/HomeCarousel';

function App() {
  return (
    <div className="App">
      <MainNav />
      <HomeCarousel />
      <KeyboardList />
    </div>
  );
}

export default App;
