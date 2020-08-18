import React from 'react';
import Map from '../components/Map/Map';
import Axios from 'axios';

const keyAPI = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"
const mapURL = `https://maps.googleapis.com/maps/api/js?key=`+keyAPI;

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