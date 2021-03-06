import React from 'react'
import {
    Marker,
    InfoWindow
} from 'react-google-maps';
import { Typography, Space, Button } from 'antd'
import Axios from 'axios';
const { Text } = Typography

export default class PinMarker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            flagURL: ""
        }
        this.getFlag = this.getFlag.bind(this)
        this.setISOandOpenDrawer = this.setISOandOpenDrawer.bind(this)
    }

    async getFlag() {
        const baseRequest = "https://restcountries.eu/rest/v2/alpha/"
        const ISOcode = this.props.flagISOcode
        if (ISOcode !== null) {
            const responseFlag = await Axios.get(baseRequest + ISOcode)
                .then(function (response) {
                    return response
                })
                .catch(function (error) {
                    console.log(error)
                })
            if (responseFlag) {
                this.setState({
                    flagURL: responseFlag.data.flag
                })
            }
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

    setISOandOpenDrawer() {
        this.props.setDrawer(true)
        this.props.setCurrentyCountry(this.props.flagISOcode)
    }

    componentDidMount() {
        this.getFlag()
    }

    render() {
        const { longitud, latitud, nameCountry, index, cases } = this.props
        return (
            <div>
                < Marker position={{ lat: latitud, lng: longitud }}
                    key={index}
                    icon={{ url: this.state.flagURL, scaledSize: new window.google.maps.Size(35, 25) }}
                    onClick={() => this.handleToggleOpen()}
                >
                    {
                        this.state.isOpen
                            ? <InfoWindow
                                id={index}
                                onCloseClick={() => this.setState({ isOpen: false })}>
                                <div style={{ padding: '0px 12px 12px 0px' }}>
                                    <center>
                                        <Space direction="vertical">
                                            <Text>
                                                {nameCountry}
                                            </Text>
                                            <Text code>
                                                {Number(cases).toLocaleString('en')} casos
                                            </Text>
                                            <Button type="primary" size="small" onClick={this.setISOandOpenDrawer}>Detalles</Button>
                                        </Space>
                                    </center>
                                </div>
                            </InfoWindow>
                            : <div></div>
                    }

                </Marker >
            </div>
        )
    }

}