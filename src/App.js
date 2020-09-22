import React from 'react';
import './App.css';
//import Map from './components/leaflet/index';
import LeafletMap from './components/leaflet/mapIndex';
import Sidebar from './components/sidebar/sidebar'


function App() {
  return (
      <React.Fragment>
        <Sidebar/>
        <LeafletMap/>
      </React.Fragment>
  );
}
export default App;
