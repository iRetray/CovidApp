import React from 'react';
import styles from './stylesOfMap'

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
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
            let info = result.countryInfo.cases
            let showInfo = false
            return (<Marker position={{ lat: latitud, lng: longitud }} 
                            key={index} 
                            icon={{url:flag, scaledSize: new window.google.maps.Size(35,25)}}
                            onClick={() => 
                              this.props.onClickableChanged(result)
                            }
                     >
                     {showInfo &&(
                       <InfoWindow onCloseClick={() => 
                         this.props.onMarkerClose(result)
                       }
                       >
                       {
                        <div className="info-window" 
                          style={{ backgroundColor: "#FFF", textAlign : "center"}}>
                          <h4> {nameCountry} </h4>
                          <p> {info} </p>
                        </div>
                       }
                       </InfoWindow>
                     )}
                     </Marker>)
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