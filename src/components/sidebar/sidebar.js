import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar-container'>
               <p>Im side control menu</p>
               <br/>
               <p>App Goals:</p>
               <li>lean Geo Visuals of data</li>
               <li>importing any API DS</li>
               <li>off line maps</li>
               <li>Utilizing custom visuals</li>
               <li>Maximizing Leaflet abilities</li>
               <li>Custom map source usage from any map source?</li>
            </div>
        );
    }
}

export default Sidebar;