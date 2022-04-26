import { faCreditCard, faShieldHalved, faUserTie, faWallet } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import IconList from "../IconList";
import "./Faq.scss";

const Faq = () => {
    const options = [
        { icon: faCreditCard, text: "Cartão de crédito" },
        { icon: faWallet, text: "Conta e abertura" },
        { icon: faShieldHalved, text: "Token digital" },
        { icon: faUserTie, text: "Produtos e serviços" }
    ];

    let [op, setOp] = useState(0);
    let title: string = options[op].text;
    let colorK = (k:any) => k === op? "#fff" : "#a8a8a8";

    return (
        <section className="section-faq" id="faq">
            <Container>
                <Row>
                    <h2 className="text-center my-5 fs-1 text-white">Dúvidas frequentes</h2>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        <Row className="mb-5">
                            {
                                options.map((item, key )=> (
                                    <Col xs={3} lg={12} key={key}>
                                        <Col>
                                            <IconList 
                                                role="button" 
                                                icon={item.icon} 
                                                size="2x" 
                                                className="d-none d-lg-block" 
                                                color={colorK(key)} 
                                                onClick={() => setOp(key) }>
                                                    <p className="fs-5">{`${item.text}`}</p> 
                                            </IconList>
                                        </Col>
                                    </Col>
                                ))
                            }
                            <Col xs={12} className="text-center d-lg-none my-3">
                                <p className="text-light mt-3">{title}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Row className="mb-5">
                            <Accordion defaultActiveKey="0" activeKey={op.toString()} >
                                <Accordion.Item eventKey="0" onClick={() => setOp(0)} >
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" onClick={() => setOp(1)}>
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" onClick={() => setOp(2)}>
                                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" onClick={() => setOp(3)} >
                                    <Accordion.Header>Accordion Item #4</Accordion.Header>
                                    <Accordion.Body>
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
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Faq;