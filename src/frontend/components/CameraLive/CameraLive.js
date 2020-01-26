import React, { Component } from 'react';
import ScreenShotCanvas from '../ScreenShotCanvas/ScreenShotCanvas'
import './CameraLive.css'
import './cameraScript'
import api from '../../../backend/services/api'



export default class CameraLive extends Component {
  render() {
    return (
      <div className="display-cover">
        <video autoPlay></video>

        <canvas class="d-none"></canvas>


        <div className="video-options">
          <select name="" id="" className="custom-select">
            <option value="">Select camera</option>
          </select>
        </div>

        <div className="controls">
          <button className="btn btn-danger play" title="Play"><i data-feather="play-circle"></i></button>
          <button className="btn btn-info pause d-none" title="Pause"><i data-feather="pause"></i></button>
          <button className="btn btn-outline-success screenshot d-none" title="ScreenShot"><i data-feather="image"></i></button>
        </div>
      </div>
    );
  }


}
