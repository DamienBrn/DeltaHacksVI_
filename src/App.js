import React from 'react';
import './App.css';
import Camera from './frontend/components/CameraLive/CameraLive'
import ItemList from './frontend/components/ItemList/ItemList'
import Header from './frontend/components/Header/Header'
// import './hello.js'

function App() {
  return (
    
    <div className="app_container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Header />
      <div className="main_monitor">

        <div className="left_panel">
          <Camera />
        </div>

        <div className="right_panel">
          <ItemList />
        </div>

      </div>

    </div>
  );
}

export default App;