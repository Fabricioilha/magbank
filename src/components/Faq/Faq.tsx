import { faMobileScreenButton, faMobile, faGlobe, faShieldHalved, faWallet, faCreditCard, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./Faq.scss";

const Faq = () => {
    return (
        <section id="section_faq" >
            <Container>
                <Row className="text-center fs-1 py-5 text-light">
                    <h2>Dúvidas frequentes</h2>
                </Row>
                <Row className="align-items-center d-flex text-light">
                    <Col lg-col-6>
                        <Row className="my-3 py-1 align-items-center gap-2">
                            <Col className="col-1 text-end"><FontAwesomeIcon className="fs-1" icon={faCreditCard} /></Col>
                            <Col className="fs-5">Cartão de crédito e débito</Col>
                        </Row>
                        <Row className="my-3 py-1 align-items-center gap-2">
                            <Col className="col-1 text-end"><FontAwesomeIcon className="fs-1" icon={faWallet} /></Col>
                            <Col className="fs-5">Conta e abertura</Col>
                        </Row>
                        <Row className="my-3 py-1 align-items-center gap-2">
                            <Col className="col-1 text-end"><FontAwesomeIcon className="fs-1" icon={faShieldHalved} /></Col>
                            <Col className="fs-5">Token digital</Col>
                        </Row>
                        <Row className="my-3 py-1 align-items-center gap-2">
                            <Col className="col-1 text-end"><FontAwesomeIcon className="fs-1" icon={faUserTie} /></Col>
                            <Col className="fs-5">Produtos e serviços</Col>
                        </Row>
                    </Col>
                    <Col lg className="col-lg-7">
                        <Accordion defaultActiveKey="0" flush className="my-5">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body className="acordion_body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body className="acordion_body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Accordion Item #3</Accordion.Header>
                                <Accordion.Body className="acordion_body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Accordion Item #4</Accordion.Header>
                                <Accordion.Body className="acordion_body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq