import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

class Markers extends Component {

    //lat,lng,text, metric
    state = { 
            locations : [
                    ['51.505,-0.09','city 1'],
                    ['50.505,-0.09','city 2']
            ],
            data : { 
                    'city 1':  [{'amount' : 50},
                                {'sum': 30}
                    ],
                    'city 2':  [{'amount' : 50},
                                {'sum': 30}
                    ],
            }                      
    }

    //will handle coordinates from an out side source

    render() {

        let markers = 
            this.state.locations.map((locations,idx) => {
                console.log(locations);
                
                let popupText = '';
                this.state.data[locations[1]].forEach((datalist,idx) => {
                    let key =  Object.keys(datalist);
                    popupText += key + ': ' +  datalist[key];
                })


                return (
                    <Marker key={idx} position={locations[0].split(',')}>
                        <Popup>
                        this is the location: {locations[1]}
                        <br/>
                        {popupText}
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