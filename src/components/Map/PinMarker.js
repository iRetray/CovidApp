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
        this.handleToggleOpen = this.handleToggleOpen.bind(this)
        this.handleToggleClose = this.handleToggleOpen.bind(this)
    }

    handleToggleOpen = (markerId) => {
        this.setState({
            isOpen: true
        });
    }

    handleToggleClose = (markerId) => {
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
                            <div key={index}>
                                <h4>{nameCountry}</h4>
                            </div>
                        </InfoWindow>
                        : <div></div>
                }

            </Marker>
        )
    }

}