import React from 'react'
import { Navbar, NavbarBrand, Nav, NavbarText } from 'reactstrap'
import { Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faShieldVirus } from '@fortawesome/free-solid-svg-icons'
import '../noShowScroll.css'
import { Link } from 'react-router-dom'
const { Text } = Typography

export default class Interfaz extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <Link to="/">
                        <NavbarBrand><Text style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faShieldVirus} /> CovidApp</Text></NavbarBrand>
                    </Link>
                    <Nav className="mr-auto" navbar>

                    </Nav>
                    <center>
                        <NavbarText><Text style={{ color: '#6c757d', fontSize: '15px' }} disabled><FontAwesomeIcon icon={faMapMarkedAlt} /> Mapa interactivo</Text></NavbarText>
                    </center>
                </Navbar>
            </div>
        )
    }
}