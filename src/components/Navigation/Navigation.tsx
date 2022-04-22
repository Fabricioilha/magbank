import React from "react";
import { Navbar, Container, Nav, ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import logo from "../../assets/images/navbar_logo.svg"
import './Navigation.scss'

type Props = {
    clickBtn: ()=> void
}

const Navigation = ({clickBtn}:Props) => {
    return(
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#cartao">Cartão</Nav.Link>                        
                        <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                    <ButtonGroup >
                        <DropdownButton variant="outline-light" as={ButtonGroup} title="Acessar minha conta" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="outline-light" onClick={clickBtn}>Abra sua conta</Button>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation