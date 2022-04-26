import "./DashNavBar.scss"
import React from "react";
import { Navbar, Container, Nav, ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/page_Home/navbar_logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const DashNavBar = () => {
    return (
        <div className="DashNavBar">
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="col-3">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

                        <Nav className="justify-content-center col-8 text-center">
                            <div className="input-group">
                                <input className="form-control py-2" type="search" value="search" id="example-search-input" />
                                <span className="input-group-append">
                                    <button className="btn btn-outline " type="button" >
                                        <FontAwesomeIcon icon={faSearch} color="#fff" />
                                    </button>
                                </span>
                            </div>
                        </Nav>

                        <ButtonGroup>
                            <Button variant="outline-light" ><Link to="/" className="px-3 text-decoration-none text-white">Sair</Link></Button>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className="input-group d-lg-none mt-4">
                    <input className="form-control py-2" type="search" value="search" id="example-search-input" />
                    <span className="input-group-append">
                        <button className="btn btn-outline " type="button" >
                            <FontAwesomeIcon icon={faSearch} color="#c3c"/>
                        </button>
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default DashNavBar