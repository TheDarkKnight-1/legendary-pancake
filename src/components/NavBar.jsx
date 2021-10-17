import React from 'react'
import { Navbar, NavDropdown, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

function NavBar(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="About">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <div className="container">
                        <Button variant="outline-success">Search</Button>
                        </div>
                    </Form>
                </Container>

            </Navbar>
        </div>
    )
}
NavBar.propTypes={
    title:PropTypes.string
}
NavBar.defaultProps={
    title:"Kya baat hai"
}
export default NavBar

