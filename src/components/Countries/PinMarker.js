import React from 'react'
import { Link } from 'react-router-dom'
import {
    Marker,
    InfoWindow
} from 'react-google-maps';
import { Typography, Space, Button } from 'antd'
const { Text } = Typography



export default class PinMarker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const { longitud, latitud, flag, nameCountry, index, cases } = this.props
        return (
            <Marker position={{ lat: latitud, lng: longitud }}
                key={index}
                icon={{ url: flag, scaledSize: new window.google.maps.Size(25, 15) }}
                onClick={() => this.handleToggleOpen()}
            >
                {
                    this.state.isOpen
                        ? <InfoWindow
                            id={index}
                            onCloseClick={() => this.setState({ isOpen: false })}>
                            <div>
                                <center>
                                    <Space direction="vertical">
                                        <Text>
                                            {nameCountry}
                                        </Text>
                                        <Text code>
                                            {Number(cases).toLocaleString('en')} casos
                                            </Text>
                                        <Link to={"/details/" + nameCountry}>
                                            <Button type="primary" size="small">Detalles</Button>
                                        </Link>
                                    </Space>
                                </center>

                            </div>
                        </InfoWindow>
                        : <div></div>
                }

            </Marker>
        )
    }

}