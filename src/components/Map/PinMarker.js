import React from 'react'
import { Link } from 'react-router-dom'
import {
    Marker,
    InfoWindow
} from 'react-google-maps';
import { Typography, Space } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons'
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
                icon={{ url: flag, scaledSize: new window.google.maps.Size(35, 25) }}
                onClick={() => this.handleToggleOpen()}
            >
                {
                    this.state.isOpen
                        ? <InfoWindow
                            id={index}
                            onCloseClick={() => this.setState({ isOpen: false })}>
                            <div>
                                <Space direction="vertical">
                                    <center>
                                        <Text>
                                            {nameCountry}
                                            <br/>
                                            {cases}                                            
                                        </Text>                                        
                                        <hr></hr>
                                        <Text strong>
                                            <Link to={"/details/"+nameCountry} style={{ textDecoration: 'none' }}>
                                                <PlusSquareOutlined /> Detalles
                                                 </Link>
                                        </Text>
                                    </center>
                                </Space>

                            </div>
                        </InfoWindow>
                        : <div></div>
                }

            </Marker>
        )
    }

}