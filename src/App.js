import React from 'react';
import './App.css';
import './camera'

function App() {
  return (
        <div className="display-cover">
            <video autoPlay></video>
            <canvas className="d-none"></canvas>

            <div className="video-options">
                <select name="" id="" className="custom-select">
                    <option value="">Select camera</option>
                </select>
            </div>

            <img className="screenshot-image d-none" alt=""/>

            <div className="controls">
                <button className="btn btn-danger play" title="Play"><i data-feather="play-circle"></i></button>
                <button className="btn btn-info pause d-none" title="Pause"><i data-feather="pause"></i></button>
                <button className="btn btn-outline-success screenshot d-none" title="ScreenShot"><i data-feather="image"></i></button>
            </div>
          </div>
  );
}


export default App;