
import Table from "react-bootstrap/Table";
import { ExtratoData } from "../../../../assets/extratoData";


const ExTable = () => {
    return (
        <>
            <Table striped hover borderless>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor (R$)</th>
                        <th>Saldo (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {ExtratoData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td>
                                {item.value? item.value < 0 ? 
                                <span className="text-danger">{item.value.toFixed(2)}</span> :
                                <span className="fw-bold">{item.value.toFixed(2)}</span> : ""}
                            </td>
                            <td>{item.saldo ? item.saldo.toFixed(2) : ""}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ExTable