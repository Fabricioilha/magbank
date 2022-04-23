
import { Modal, Button, Form } from "react-bootstrap";

type Props = {
    show: boolean,
    close: () => void
}

const HomeModal = ({ show, close }: Props) => {

    return (
        <Modal show={show} onHide={close}>
            <Form>
                <Modal.Header closeButton >
                    <Modal.Title>Abra sua conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="text-center w-100">Seu nome</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center w-100">Seu email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label className="text-center w-100">Sua cidade</Form.Label>
                        <Form.Control as="select" >
                            <option value="1">Rio de Janeiro</option>
                            <option value="2">Florianópolis</option>
                            <option value="3">Vitória</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Eu li e concordo com os temos de uso"
                            id="custom-switch"
                        />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={close}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal >

    )
}

export default HomeModal