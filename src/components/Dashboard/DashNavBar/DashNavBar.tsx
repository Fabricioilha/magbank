import "./DashNavBar.scss"
import React from "react";
import { Navbar, Container, Nav, ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/page_Home/navbar_logo.svg"



const DashNavBar = () => {
    return (
        <div className="DashNavBar">
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
                                <Dropdown.Item eventKey="1">
                                    <Link to="/login" className="text-decoration-none">Login Pessoa Física</Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">Login Pessoa Jurídica</Dropdown.Item>
                            </DropdownButton>
                            <Button variant="outline-light">Abra sua conta</Button>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default DashNavBar