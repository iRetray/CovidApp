import React from 'react';
import Map from '../components/Countries/Map';
import Axios from 'axios';
import Interfaz from '../components/Countries/Interfaz';
import DetallesPais from '../components/Details/DetallesPais'

const keyAPI = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";
const mapURL = `https://maps.googleapis.com/maps/api/js?key=` + keyAPI;

export default class Countries extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            latitudUsuario: 0.0,
            longitudUsuario: 0.0,
            ISOcodeCurrentyCountry: "",
            drawerOpen: false
        }
        this.getDataGlobal = this.getDataGlobal.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.setCurrentyCountry = this.setCurrentyCountry.bind(this)
        this.getCurrentyCountry = this.getCurrentyCountry.bind(this)
    }

    setCurrentyCountry(iso2) {
        this.setState({
            ISOcodeCurrentyCountry: iso2
        })
    }

    getCurrentyCountry() {
        return this.state.ISOcodeCurrentyCountry
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) => {
                this.setState({
                    latitudUsuario: position.coords.latitude,
                    longitudUsuario: position.coords.longitude
                })
            })
        } else {
            alert("La geolocalizacion no esta habilitada en su navegador")
        }
    }

    async getDataGlobal() {
        const responseData = await Axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        if (responseData) {
            this.setState({
                results: responseData.data
            })
        }
    }

    setDrawerOpen = () => {
        this.setState({
            drawerOpen: true
        })
    }

    componentDidMount() {
        this.getDataGlobal()
        this.getLocation()
    }

    render() {
        return (
            <div>
                <Interfaz />
                <Map
                    isMarkerShown={false}
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: `100vh` }} />}
                    containerElement={<div style={{ height: `90vh` }} />}
                    mapElement={<div style={{ height: `94.1vh` }} />}
                    markersData={this.state.results}
                    latitudUsuario={this.state.latitudUsuario}
                    longitudUsuario={this.state.longitudUsuario}
                    setCurrentyCountry={this.setCurrentyCountry}
                    setDrawerOpen={this.setDrawerOpen}
                >
                </Map>
                <DetallesPais getCurrentyCountry={this.getCurrentyCountry} stateOfDrawer={this.state.drawerOpen}/>
            </div>
        )
    }
}