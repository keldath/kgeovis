import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import base64 from 'react-native-base64';
//const r  = require('./maps/zoom3/x0y0.png')
/*
type State = {
    lat: number,
    lng: number,
    zoom: number,
  }

  ase64.encode('Some string to encode to base64');

base64.decode('SW4gbXkgZXllcywgaW5kaXNwb3NlZA0KSW4gZGlzZ3Vpc2VzIG5vIG9uZSBrbm93cw0KUklQIEND==')
 URL.createObjectURL(object);
  */
 
//<img src={images['0.png']} />

class LeafletMap extends Component  {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 4,
        maxZoom:5 ,
        minZoom: 3
      }
      
      render() {
       const position = [this.state.lat, this.state.lng]
        return (
          <React.Fragment>
          <Map center={position} zoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap Sagi</a> contributors'
              url=  '/maps/zoom{z}//x{x}y{y}.png'/*"{require('src/components/leaflet/maps/maps/zoom{z}/x{x}y{y}.png')}"*/
            />
          </Map>
         
          </React.Fragment>
        )
      }
}

export default LeafletMap;
//../../asssets/maps/zoom3
//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
//center={position}
/*
<Marker position={position}>
<Popup>
  A pretty CSS3 popup. <br /> Easily customizable.
</Popup>
</Marker>
/maps/zoom{z}/x{x}y{y}.png
<img width='500px' height='500' src={x3y1} alt='koko'></img>
           <p>{this.cn('maps/zoom{z}/x{x}y{y}.png')}</p>
           {r.replace('/zoom3/x0y0.png', '/zoom{z}/x{x}y{y}.png')}
            {'/maps/zoom{z}/' + 'data:image/png;base64,' + base64.encode('/x{x}y{y}.png')}
*/