import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import {faCreditCard, faMobile, faShoppingCart, faWallet} from "@fortawesome/free-solid-svg-icons";
import creditcard from "../../../assets/images/page_Home/credit_card_img.jpg";
import IconList from "../IconList";
import "./CreditCard.scss";


const CreditCard = () => {
    return(
        <Container id="cartao">
            <Row>
                <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
                    <Row>
                        <h2 className="display-4 my-5 credit-card-title">Cartão de Crédito</h2>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className="mb-4">
                            <IconList icon={faCreditCard} size="2x" color="#f05656" className="h5 text-muted" >Crédito pessoal</IconList> 
                        </Col>
                        <Col xs={12} lg={6} className="mb-4">
                            <IconList icon={faMobile} size="2x" color="#f05656" className="h5 text-muted" >APP</IconList>                            
                        </Col>
                        <Col xs={12} lg={6} className="mb-4">
                            <IconList icon={faShoppingCart} size="2x" color="#f05656" className="h5 text-muted" >Pagamentos online</IconList>                            
                        </Col>
                        <Col xs={12} lg={6} className="mb-4">
                            <IconList icon={faWallet} size="2x" color="#f05656" className="h5 text-muted" >Carteira digital</IconList>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={5} className="my-5">
                    <Image src={creditcard} width="100%" className="rounded-3" radioGroup="" fluid alt="Magbank Credit Card Exemple" />
                </Col>
            </Row>
        </Container>        
    )
}

export default CreditCard