import React, { useState } from 'react';
import './Home.scss'
import Navigation from '../../components/Home/Navigation/Navigation';
import Hero from "../../components/Home/Hero/Hero";
import CreditCard from "../../components/Home/CreditCard/CreditCard";
import CardList from "../../components/Home/CardList/CardList";
import { Posts } from '../../assets/posts';
import Institutional from "../../components/Home/Institutional/Institutional"
import Faq from "../../components/Home/Faq/Faq";
import FooterSection from "../../components/Global/FooterSection/FooterSection"
import HomeModal from "../../components/Home/HomeModal"



const Home = () => {
  // Variaveis e funções para exibição do modal de cadastro
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Home">
        <Navigation clickBtn={handleShow} />
        <Hero clickBtn={handleShow} />
        <CreditCard/>
        <CardList array={Posts} clickBtn={handleShow}/>
        <Institutional clickBtn={handleShow} />
        <Faq />
        <FooterSection />
        <HomeModal show={show} close={handleClose}/>
    </div>
  );
}

export default Home;
