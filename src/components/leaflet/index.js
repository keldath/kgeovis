import React, { Component } from 'react';


import '../leaflet/leaflet.css';
//import { Map, Marker, Popup , TileLayer} from 'react-leaflet';
import L from 'leaflet';
//

class Map extends Component {

    componentDidMount () {
        this.map = L.map('map', { 
            center: [58,16],
            zoom: 6, 
            zoomControl: false
        })


        L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            maxZoom: 18,
            maxNativeZoom: 10,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    render() {
        return (
            <div width='500px' height='500px' id='map'> </div>
        );
    }
}

export default Map;