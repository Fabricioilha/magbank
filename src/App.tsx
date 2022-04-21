import React from 'react';
import './App.scss'
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
import CreditCard from "./components/CreditCard/CreditCard";
import CardList from "./components/CardList/CardList";
import Institutional from "./components/Institutional/Institutional"
import { Posts } from './assets/posts';
import Faq from "./components/Faq/Faq";
import FooterSection from "./components/FooterSection/FooterSection"



const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Hero />
      <CreditCard />
      <CardList array={Posts} />
      <Institutional />
      <Faq />
      <FooterSection />
    </div>
  );
}

export default App;
