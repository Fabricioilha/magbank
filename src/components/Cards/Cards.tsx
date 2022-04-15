import React from "react";
import "./Cards.scss"
import card01 from "../../assets/images/card_01.jpg"
import card02 from "../../assets/images/card_02.jpg"
import card03 from "../../assets/images/card_03.jpg"
import { Container, Image,Row,Col, Button } from "react-bootstrap";

const Cards = () => {
    return (
        <section id="section_cards">
            <Container>
                <Row className="sm">
                    <Col className="col" >
                        <div className="card mx-auto">
                            <Image src={card01} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum dolor sit</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.</p>
                                <a href="#" className="btn btn-danger">Peça já</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="col" >
                        <div className="card mx-auto">
                            <Image src={card02} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum dolor sit</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.</p>
                                <a href="#" className="btn btn-danger">Peça já</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="col" >
                        <div className="card mx-auto">
                            <Image src={card03} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum dolor sit</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.</p>
                                <a href="#" className="btn btn-danger">Peça já</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Button variant="success" className="my-5 px-5 py-2 fs-5 d-flex mx-auto">Abra sua conta</Button>
            </Container>
        </section>
    )
}

export default Cards