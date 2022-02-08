import React from 'react';
import './App.css';
import KeyboardList from './components/keyboards/KeyboardList';
import MainNav from './components/navigation/MainNav';

function App() {
  return (
    <div className="App">
      <h1>Keyswitch</h1>
      <MainNav />
      <KeyboardList />
    </div>
  );
}

export default App;
