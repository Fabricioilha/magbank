import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { faMobileScreenButton, faMobileButton, faGlobe, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import "./Institutional.scss";
import IconList from "../IconList";

const Institutional = () => {
    return(
        <section className="sectioin_institutional py-5 text-white">
            <Container>
                <Row>
                    <Col xs={0} lg={6}></Col>
                    <Col xs={12} lg={6} className="info-text">
                        <h2 className="my-5" >Já nascemos digital</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                        <Row className="mt-5 ps-2 ps-lg-0">
                            <IconList size="2x" icon={faMobileScreenButton}  color="#fff" className="fs-4">Sem fila e sem burocracia</IconList>
                            <IconList size="2x" icon={faMobileButton}  color="#fff" className="fs-4">Simples e prátio</IconList>
                            <IconList size="2x" icon={faGlobe}  color="#fff" className="fs-4">Abertura de conta 100% online</IconList>
                            <IconList size="2x" icon={faShieldHalved}  color="#fff" className="fs-4">Transações mais seguras</IconList>
                        </Row>

                        <Button variant="outline-light" className="my-5" size="lg">Abra sua conta</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Institutional