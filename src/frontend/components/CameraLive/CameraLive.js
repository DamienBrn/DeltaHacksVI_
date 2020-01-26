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
          <button className="btn btn-danger play" title="Play"><i class="fa fa-play"></i></button>
          <button className="btn btn-info pause d-none" title="Pause"><i class="fa fa-pause"></i></button>
          <button className="btn btn-outline-success screenshot d-none" title="ScreenShot"><i class="fa fa-tv"></i></button>
        </div>
      </div>
    );
  }

}
