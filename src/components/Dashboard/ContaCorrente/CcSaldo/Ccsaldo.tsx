import { Button } from "react-bootstrap"

const CcSaldo = () => {
    return(
        <>
            <span className="fw-bold">Saldo em conta corrente</span><br />
            <p className="text-success mb-5">R$ 3.450,<span className="small">00</span></p>
            <span className="fw-bold">Cheque especial</span><br />
            <p className="mt-2 mb-0 text-dark small">Limite disponível</p>
            R$ 5.000,00 <br />
            <Button className="my-5" variant="secondary">Ver extrato</Button>
        </>
    )
}

export default CcSaldo