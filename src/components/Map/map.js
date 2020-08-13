import React from 'react';
import styles from './styles.json'

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from  'react-google-maps';


const Map = (props)=>{
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{
            lat: 0, // latitude for the center of the map
            lng: 0 // longitude for the center of the map
      }}
      defaultOptions={{
        
        styles: styles // change default map styles
      }}
    >
      <Marker/>
    </GoogleMap>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)