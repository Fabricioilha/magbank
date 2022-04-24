import { Button, Col, Container, Row } from "react-bootstrap";
import FooterSection from "../../components/Global/FooterSection/FooterSection";
import DashNavBar from "../../components/Dashboard/DashNavBar/DashNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DashSaldo from "../../components/Dashboard/DashSaldo/DashSaldo";
import "./Dashboard.scss"
import DashTable from "../../components/Dashboard/DashTable/DashTable";

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
                    <Row> {/* Segunda linha */}
                        <Col xs={12} md={3} className="p-0">  {/* 1ª Coluna - Menu */}
                            <Link to="/dashboard" className="text-decoration-none ">
                                <div className="dashBodyMenu actv ">
                                    Minha conta
                                </div>
                            </Link>
                            <Link to="/dashboard" className="text-decoration-none">
                                <div className="dashBodyMenu ">
                                    Pagamento
                                </div>
                            </Link>
                            <Link to="/dashboard" className="text-decoration-none">
                                <div className="dashBodyMenu ">
                                    Extrato
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={9} className="my-5 my-md-0"> {/* Segunda Coluna dinamica */}
                            <Row className="pb-5"><h2>Conta corrente</h2></Row>
                            <Row>
                                <Col xs={12} md={3}>
                                    <DashSaldo />
                                </Col>
                                <Col xs={12} md={9}>
                                    <DashTable />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <FooterSection/>
            </div>
        </>
    )
}

export default Dashboard