import React from 'react'

import {
    Marker,
    InfoWindow
} from 'react-google-maps';

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
        const { longitud, latitud, flag, nameCountry, index } = this.props
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
                            <h4>HOLA</h4>
                        </InfoWindow>
                        : <div></div>
                }

            </Marker>
        )
    }

}