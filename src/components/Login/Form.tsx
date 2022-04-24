import { Container, Form, Button, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/page_login/MAGbank.svg";
import "./Form.scss";

const CForm = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={5} xs={10}>
                    <Form className="text-center">

                        <Image src={logo} className="my-5" width={400} fluid />

                        <Form.Group className="mb-3" controlId="formBasicAcauntNumber">
                            <Form.Label className="fs-4 text-light mt-5">Número da conta</Form.Label>
                            <Form.Control type="number" className="p-2 fs-5 mb-5" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAcountPassword">
                            <Form.Label className="fs-4 text-light">Senha</Form.Label>
                            <Form.Control type="password" className=" p-2 fs-5 mb-5" />
                        </Form.Group>
                        <Link to="/dashboard">
                            <Button variant="success" className="btn-lg" type="submit">
                                Entrar
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CForm