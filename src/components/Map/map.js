import React from 'react';
import styles from './stylesOfMap'
import PinMarker from './PinMarker'

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
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
            let flag = result.countryInfo.flag
            let nameCountry = result.country
            return (
              <PinMarker
                longitud={longitud}
                latitud={latitud}
                flag={flag}
                nameCountry={nameCountry}
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
/**Video de referencia
 * https://www.youtube.com/watch?v=Pf7g32CwX_s
 * https://stackoverflow.com/questions/44729776/how-can-animation-be-added-to-markers-in-react-google-maps
 * pasar desde country en results un parametro showinfo en false
 */