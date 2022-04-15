import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faCartShopping, faWallet } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Container, Image } from "react-bootstrap";
import "./CreditCard.scss"
import cartao01 from "../../assets/images/credit_card_img.jpg";


const CreditCard = () => {
    return (
        <section id="section-creditcard">
            <Container>
                <Row className="py-5 my-5">
                    <Col lg >
                        <Row>
                            <Col>
                                <h2>Cartão de Crédito</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col >
                                <Row className="mt-5">
                                    <Col lg >
                                        <div className="list">                                        
                                            <i><FontAwesomeIcon icon={faCreditCard} /></i>
                                            <p>Crédito Pessoal</p>
                                        </div>
                                    </Col>                                   
                                    <Col lg>
                                        <div className="list">
                                            <i><FontAwesomeIcon icon={faCartShopping} /></i>
                                            <p>Pagamento Online</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mb-5">
                                    <Col lg>
                                        <div className="list">
                                            <i><FontAwesomeIcon icon={faMobile} /></i>
                                            <p>APP</p>
                                        </div>
                                    </Col>
                                    <Col lg>
                                        <div className="list">
                                            <i><FontAwesomeIcon icon={faWallet} /></i>
                                            <p>Carteira Digital</p>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-lg-5">
                        <Image className="mx-auto d-block img-fluid rounded-3" src={cartao01} />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default CreditCard