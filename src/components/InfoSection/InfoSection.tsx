import React from "react";
import { Container,Col,Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton,faMobile,faGlobe,faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import "./InfoSection.scss";

const InfoSection = () => {
    return (
        <section id="info_section">
            <Container>
                <Row className="py-5 justify-content-end ">                   
                    <Col className="col-lg-6">
                        <div className="info-text">
                            <h2>Já nascemos digital</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                        </div>
                        <div className="info-icons text-light fs-4 my-5">
                            <Row className="my-3">
                                <Col className="col-1 text-end"><FontAwesomeIcon icon={faMobileScreenButton}/></Col>
                                <Col className="text-start">Sem fila e sem burocracia</Col>
                            </Row>
                            <Row className="my-3">
                                <Col className="col-1 text-end"><FontAwesomeIcon icon={faMobile}/></Col>
                                <Col className="text-start">Simples e prático</Col>
                            </Row>
                            <Row className="my-3">
                                <Col className="col-1 text-end"><FontAwesomeIcon icon={faGlobe}/></Col>
                                <Col className="text-start">Abertura de conta 100% online</Col>
                            </Row>
                            <Row className="my-3">
                                <Col className="col-1 text-end"><FontAwesomeIcon icon={faShieldHalved}/></Col>
                                <Col className="text-start">Transações mais seguras</Col>
                            </Row>
                        </div>
                        <Button className=" fs-5 py-2 px-5"  variant="outline-light">Abra sua conta</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InfoSection