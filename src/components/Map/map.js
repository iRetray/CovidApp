import React from 'react';
import styles from './stylesOfMap.json'

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps';

class Map extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultOptions={{ styles: styles }}
      >
        {
          this.props.markersData.map((result, index) => {
            let longitud = result.countryInfo.long
            let latitud = result.countryInfo.lat
            return (<Marker position={{ lat: latitud, lng: longitud }} key={index} />)
          })
        }
      </GoogleMap>
    )
  }
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)