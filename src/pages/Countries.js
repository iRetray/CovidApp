import React from 'react';
import Map from '../components/Map/Map.js';
import credentials from '../components/Map/Credentials.js';
import Axios from 'axios';
import { Marker } from 'react-google-maps';

const mapURL = `https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}`;


export default class Countries extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
        }
        this.getDataGlobal = this.getDataGlobal.bind(this)
    }

    async getDataGlobal() {
        const responseData = await Axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({
            results: responseData.data
        })
    }

    displayMarkers = () => {
        return this.state.results.map((result, index) => {
            console.log(result.countryInfo.lat, result.countryInfo.long, result.country)
            return <Marker key={index} id={index} position={{
                lat: result.countryInfo.lat,
                lng: result.countryInfo.long
            }}
                onClick={() => console.log("click")} />
        })
    }

    componentDidMount() {
        this.getDataGlobal()
    }

    render() {
        return (
            <div>
                <Map
                    isMarkerShown
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                >
                    {this.displayMarkers()}
                </Map>
                {
                    this.state.results.lenght !== 0
                        ? <div>Si hay datos
                            {console.log(this.state.results[0])}


                        </div>
                        : <div>No hay datos</div>
                }
            </div>
        )
    }
}