import React from 'react';
import './App.scss'
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Hero />
    </div>
  );
}

export default App;
