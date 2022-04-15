import React from 'react';
import './App.scss'
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
import CreditCard from './components/creditCard/CreditCard';
import Cards from "./components/Cards/Cards"
import InfoSection from './components/InfoSection/InfoSection';
import Faq from "./components/Faq/Faq";


const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Hero />
      <CreditCard />
      <Cards />
      <InfoSection />
      <Faq />
    </div>
  );
}

export default App;
