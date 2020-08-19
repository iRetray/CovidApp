import React from 'react';
import styles from './stylesOfMap2'
import PinMarker from './PinMarker'

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';

class Map extends React.Component {

  render() {
    const { latitudUsuario, longitudUsuario } = this.props
    
      let zoom = 0
      latitudUsuario!==0
      ? zoom = 7
      : zoom = 3
    
    return (
      <GoogleMap
        defaultZoom={ zoom }
        defaultCenter={{ lat: latitudUsuario, lng: longitudUsuario }}
        defaultOptions={{ styles: styles }}
      >
        {
          this.props.markersData.map((result, index) => {
            let longitud = result.countryInfo.long
            let latitud = result.countryInfo.lat
            let flag = result.countryInfo.flag
            let nameCountry = result.country
            let cases = result.cases
            return (
              <PinMarker
                longitud={longitud}
                latitud={latitud}
                flag={flag}
                nameCountry={nameCountry}
                cases={cases}
                key={index}
              />
            )
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
