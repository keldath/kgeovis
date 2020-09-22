import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

class Markers extends Component {

    //lat,lng
    state = { coors : [
                      [
                        '51.505,-0.09','im here'
                      ],
                      [
                        '50.505,-0.09','im there'
                      ]
                    ]
    }

    //will handle coordinates from an out side source

    render() {

        let markers = 
            this.state.coors.map((coors,idx) => {
                console.log(coors)
                return (
                    <Marker key={idx} position={coors[0].split(',')}>
                    <Popup>
                        these are coors: {coors[1]}
                    </Popup>
                  </Marker>
                )
            })

        return (
            <div>
                {markers}
            </div>
        );
    }
}

export default Markers;