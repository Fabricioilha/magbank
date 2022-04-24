import { Nav } from "react-bootstrap";
import  Table  from "react-bootstrap/Table";

const DashTable = () => {
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/home"  >
                <Nav.Item>
                    <Nav.Link href="/home">Ultimos lançamentos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Lançamentos futuros</Nav.Link>
                </Nav.Item>
            </Nav>
            <Table striped  borderless hover>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/07</td>
                        <td>Saque 24h</td>
                        <td className="fw-bold">300,00</td>
                    </tr>
                    <tr>
                        <td>21/07</td>
                        <td>Supermercados</td>
                        <td className="fw-bold">275,90</td>
                    </tr>
                    <tr>
                        <td>21/07</td>
                        <td >Estacionamento</td>
                        <td className="fw-bold">12,00</td>
                    </tr>
                    <tr>
                        <td>21/07</td>
                        <td >Alguel</td>
                        <td className="fw-bold">1.500,00</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default DashTable