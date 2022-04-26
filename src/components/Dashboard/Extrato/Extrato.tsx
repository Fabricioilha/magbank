import ExTable from "./ExTable/ExTable";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Extrato = () => (
    <>
        <Col xs={12} md={3} className="p-0">  {/* 1ª Coluna - Menu - esquerdo */}
            <Link to="/dashboard" className="text-decoration-none">
                <div className="dashBodyMenu  ">
                    Minha conta
                </div>
            </Link>
            <Link to="/dashboard/pagamentos" className="text-decoration-none">
                <div className="dashBodyMenu  ">
                    Pagamento
                </div>
            </Link>
            <Link to="/dashboard/extrato" className="text-decoration-none">
                <div className="dashBodyMenu actv ">
                    Extrato
                </div>
            </Link>
        </Col>
        <Col xs={12} md={9} className="my-5 my-md-0"> {/* 2º Coluna dinamica */}
            <Row className="pb-4">
                <h2>Extrato</h2>
            </Row>
            <Row>
                <Col xs={12}>
                    <ExTable />
                </Col>
            </Row>
        </Col>
    </>
)

export default Extrato