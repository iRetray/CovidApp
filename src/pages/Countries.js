import React from 'react';
import Map from '../components/Map/map.js';
import credentials from '../components/Map/credentials.js';
import Axios from 'axios';

const mapURL = `https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}`;


export default class Countries extends React.Component {

    /**Hacer el llamado para traer la informacion de cada pais */

    constructor(props) {
        super(props)
        this.state = {
            results: {},
        }
        this.results = this.results.bind(this)
    }

    async getDataGlobal() {
        const responseData = await Axios.get("https://corona.lmao.ninja/countries")
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

    componentDidMount() {
        this.getDataGlobal()
    }
    
    render() {
        return(
            <div>
                <Map
                    isMarkerShown
                    googleMapURL = {mapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                >
                    {countriesLocations}
                </Map>
            </div>
        )
    }
}