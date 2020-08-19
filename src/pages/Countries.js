import React from 'react';
import Map from '../components/Countries/Map';
import Axios from 'axios';
import Interfaz from '../components/Countries/Interfaz';

const keyAPI = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";
const mapURL = `https://maps.googleapis.com/maps/api/js?key=`+keyAPI;

export default class Countries extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            latitud: 0,
            longitud: 0,
        }
        this.getDataGlobal = this.getDataGlobal.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.getCordinates = this.getCordinates.bind(this)
    }

    /**
     * Se modifico en contrtuctor latirud, longitud
     * Se creo una variable cases que se manda como props en map a pinMaker que debe mandar los casos actuales para el mapa
     * Pasar lo de countries a map con el fin de crear un constructor que tenga las variables latitud, longitud,
     * zoom, que tendran los valores defaults, si accepta localizacicon, deben cambiarse los valores por los
     * que arroje la pagina, y el zoom al 7, de lo contrario usar valores base
     * hay un boton que activa para ver la localizacion, corregir para no tener que oprimir el boton
     * -------------------------------------------------------------------------------------
     */

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCordinates)
        } else {
            alert("La geolocalizacion no esta habilitada en su navegador")
        }
    }

    getCordinates(position) {
        this.setState({
            latitud: position.coords.latitude,
            longitud: position.coords.longitude
        })
    }

    handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
            default:
                alert("none case selected")
                break;
        }
    }

    /**
     * -------------------------------------------------------------------------------------
     */

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
    }

    render() {
        return (
            <div>
                <Interfaz/>
                <button onClick={this.getLocation}> Coords </button>
                <p>{this.state.latitud} {this.state.longitud}</p>
                <Map
                    isMarkerShown = {false}
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `99vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    markersData={this.state.results}
                > 
                </Map>
            </div>
        )
    }
}