import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Alert } from 'reactstrap';

export default class Interfaz extends React.Component {
    render() {
        return (
            <div>
                <Alert color="primary">
                    This is a primary alert — check it out!
                </Alert>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Navbar>
            </div>
        )
    }
}