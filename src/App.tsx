import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss'
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
import CreditCard from "./components/CreditCard/CreditCard";
import CardList from "./components/CardList/CardList";
import Institutional from "./components/Institutional/Institutional"
import { Posts } from './assets/posts';
import Faq from "./components/Faq/Faq";
import FooterSection from "./components/FooterSection/FooterSection"
import HomeModal from "./components/HomeModal"



const App = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navigation clickBtn={handleShow} />
      <Hero clickBtn={handleShow} />
      <CreditCard />
      <CardList array={Posts} clickBtn={handleShow}/>
      <Institutional clickBtn={handleShow} />
      <Faq />
      <FooterSection />
      <HomeModal show={show} close={handleClose}/>
    </div>
  );
}

export default App;
