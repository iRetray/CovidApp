import React from 'react';
import Map from '../components/Countries/Map';
import Axios from 'axios';
import Interfaz from '../components/Countries/Interfaz';

const keyAPI = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";
const mapURL = `https://maps.googleapis.com/maps/api/js?key=` + keyAPI;

export default class Countries extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            latitudUsuario: 0.0,
            longitudUsuario: 0.0,
        }
        this.getDataGlobal = this.getDataGlobal.bind(this)
        this.getLocation = this.getLocation.bind(this)
    }

    /**
     * Pasar lo de countries a map con el fin de crear un constructor que tenga las variables latitud, longitud,
     * zoom, que tendran los valores defaults, si accepta localizacicon, deben cambiarse los valores por los
     * que arroje la pagina, y el zoom al 7, de lo contrario usar valores base
     * -------------------------------------------------------------------------------------
     */


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
                >
                </Map>
            </div>
        )
    }
}