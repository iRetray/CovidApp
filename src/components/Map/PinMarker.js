import React from 'react'

import {
    Marker,
    InfoWindow
  } from 'react-google-maps';

export default class PinMarker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            shownData: false
        }
        this.changeVisibility = this.changeVisibility.bind(this)
    }

    changeVisibility() {
        this.setState({
            shownData: true
        })
    }

    render() {
        const { longitud, latitud, flag, nameCountry, index } = this.props
        return (
            <Marker position={{ lat: latitud, lng: longitud }}
                key={index}
                icon={{ url: flag, scaledSize: new window.google.maps.Size(35, 25) }}
                onClick={this.setState({shownData : true})}
            />
        )
    }

}