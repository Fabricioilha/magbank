import { Col, Container, Row } from "react-bootstrap";
import FooterSection from "../../components/Global/FooterSection/FooterSection";
import DashNavBar from "../../components/Dashboard/DashNavBar/DashNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.scss";
import ContaCorrente from "../../components/Dashboard/ContaCorrente/ContaCorrente";
import Pagamentos from "../../components/Dashboard/Pagamentos/Pagamentos";
import { Routes, Route, Link } from "react-router-dom";
import Extrato from "../../components/Dashboard/Extrato/Extrato";

const Dashboard = () => {
    return (
        <>
            <DashNavBar />  {/*navbar*/}
            <div className="dashboard min-vh-100 d-flex flex-column ">
                <Container >
                    <Row>  {/* Primeira linha Nome - Avatar - inf.conta */}
                        <Col lg={12} className="py-5">
                            <Row>
                                <Col lg={6} md={8} xs={12}>
                                    <Row>
                                        <Col xs={1} className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faUser} size="2x" color="#7c7d7d" />
                                        </Col>
                                        <Col xs={11}>
                                            <span className="fs-5 fw-bold">Fabricio Nascimento</span> <br />
                                            <span className="text-muted">ag: 1234 c/c: 1234</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row> {/* Segunda linha Dinãmica */}
                        <Routes>
                            <Route path="" element={<ContaCorrente />} />
                            <Route path="/pagamentos" element={<Pagamentos />} />
                            <Route path="/extrato" element={<Extrato />} />
                        </Routes>
                    </Row>                    
                </Container>
                <FooterSection />
            </div>
        </>
    )
}

export default Dashboard