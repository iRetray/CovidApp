import React from 'react'
import { Navbar, Nav, NavbarText } from 'reactstrap'
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
                        <Text style={{ color: '#ffffff', fontSize: '2opx' }}><FontAwesomeIcon icon={faShieldVirus} /> CovidApp</Text>
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