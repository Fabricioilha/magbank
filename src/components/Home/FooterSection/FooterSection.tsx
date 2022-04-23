import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import googleplay from "../../../assets/images/page_Home/googleplay.png"
import applestore from "../../../assets/images/page_Home/applestore.png"
import logofooter from "../../../assets/images/page_Home/MAGbank.png";
import "./FooterSection.scss"
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSection = () => {

    return (
        <footer className="Footer py-5">
            <Container>
                <Row>
                    <Col lg={6} md={12} className=" d-flex align-items-center justify-content-center justify-content-lg-start pb-5">
                        <Image src={logofooter} height="30px" />
                    </Col>
                    <Col lg={6} md={12}>
                        <Row>
                            <Col lg={9} md={12} className="d-flex justify-content-center gap-4">
                                <Image src={applestore} />
                                <Image src={googleplay} />
                            </Col>
                            <Col lg={3} md={12} className=" d-flex justify-content-center mt-5 mt-lg-0 align-items-center gap-3 text-secondary">
                                <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default FooterSection