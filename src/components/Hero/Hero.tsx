import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logoMobile from "../../assets/images/index_logo_mobile.png";
import LogoDesktop from "../../assets/images/index_logo_desktop.png"
import "./Hero.scss";

const Hero = () => {
    return (

    <section id="section_hero">
            <Container className="text-center">
                <Row className="py-3 py-lg-5 gap-3">
                    <Col lg className="text-lg-end">
                        <Image className="d-md-none" src={logoMobile} id="foto_mobile" />
                        <Image className="d-none d-md-inline-block" src={LogoDesktop} />
                    </Col>
                    <Col lg className="text-lg-start">
                        <p className="mt-5 mb-5">Pague suas contas pelo nosso App</p>
                        <Button variant="outline-light" id="btn_hero">Abra sua conta</Button>
                    </Col>
                </Row>
            </Container>
    </section>

    )
}

export default Hero