import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import KeyboardList from "./components/keyboards/KeyboardList";
import MainNav from "./components/navigation/MainNav";
import AllKeyboards from "./components/pages/AllKeyboards";
import HomeCarousel from "./components/ui/HomeCarousel";

function App() {
  return (
    <div>
      <MainNav />
      <HomeCarousel />
      <KeyboardList />
    </div>
  );
}

export default App;
