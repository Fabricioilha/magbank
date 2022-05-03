import { Tabs, Tab, Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { ccdata } from "../../../../assets/ContacorrenteData";


const Pgtable = () => {
    return (
        <>
            <Tabs defaultActiveKey="latest" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="latest" title="Boleto">
                    <Form className="d-flex flex-column gap-5">
                        <Form.Group  controlId="CodDeBarras">
                            <Form.Label className="fw-bold mt-3">Código de barras</Form.Label>
                            <Form.Control type="number" placeholder="Insira o código de barras" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="FormaDePagamento">
                            <Form.Label className="fw-bold">Forma de pagamento</Form.Label>
                            <div className="checkRadio d-flex gap-3">
                                <Form.Check type="radio" label="Débito em conta corrente" name="maypgt"/>
                                <Form.Check type="radio" label="Cartão de crédito" name="maypgt" />
                            </div>
                        </Form.Group>
                        
                        <div>
                            <Button variant="success" type="submit">
                                Continuar
                            </Button>
                        </div>
                    </Form>
                </Tab>
                <Tab eventKey="future" title="Transferência" >
                    <Table striped hover borderless>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ccdata.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                    <td>{item.value.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </>
    )
}

export default Pgtable