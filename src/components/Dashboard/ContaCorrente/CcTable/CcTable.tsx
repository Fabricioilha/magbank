import { Tabs, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { ccdata } from "../../../../assets/ContacorrenteData";


const Cctable = () => {
    return (
        <>
            <Tabs defaultActiveKey="latest" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="latest" title="Ultimos lançamentos">
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
                <Tab eventKey="future" title="Lançamentos futuros" >
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

export default Cctable