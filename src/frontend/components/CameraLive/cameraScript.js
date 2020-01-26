/*
let projectId = 'whats-that-called'
let location = 'us-central1'
let modelId = 'IOD4739137008272670720'
let filePath = './testimage.jpg'

const { PredictionServiceClient } = require('@google-cloud/automl').v1;
const fs = require('fs');

// Instantiates a client
const client = new PredictionServiceClient();

// Read the file content for translation.
const content = fs.readFileSync(filePath);


export async function predict(image_bytes) {

    const request = {

        name: client.modelPath(projectId, location, modelId),
        payload: {
            image: {
                imageBytes: image_bytes,
            },
        },
        params: {
            score_threshold: '0.9',
        },
    };

    var countOfObjects = {
        "rubberduck": 0,
        "pen": 0,
        "brownies": 0,
        "toiletpaper": 0
    }

    const [response] = await client.predict(request);

    for (const annotationPayload of response.payload) {
        countOfObjects[annotationPayload.displayName] = countOfObjects[annotationPayload.displayName] + 1
    }

    return new Promise((resolve, reject) => {
        resolve(countOfObjects)
    })
}

predict().then((array) => {
    console.log(array)
})


*/

let test= {
  name:'test'
}


setTimeout(()=>{

    const controls = document.querySelector('.controls');
    const cameraOptions = document.querySelector('.video-options>select');
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');
    const buttons = [...controls.querySelectorAll('button')];
    let streamStarted = false;
    
    const [play, pause, screenshot] = buttons;
    
    const constraints = {
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560,
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440
        },
      }
    };
    
    cameraOptions.onchange = () => {
      const updatedConstraints = {
        ...constraints,
        deviceId: {
          exact: cameraOptions.value
        }
      };
    
      startStream(updatedConstraints);
    };
    
    play.onclick = () => {
      if (streamStarted) {
        video.play();
        play.classList.add('d-none');
        pause.classList.remove('d-none');
        return;
      }
      if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        const updatedConstraints = {
          ...constraints,
          deviceId: {
            exact: cameraOptions.value
          }
        };
        startStream(updatedConstraints);
      }
    };
    
    const pauseStream = () => {
      video.pause();
      play.classList.remove('d-none');
      pause.classList.add('d-none');
    };
    
    const doScreenshot = () => {
      canvas.width = 500;
      canvas.height = 400;
      canvas.getContext('2d').drawImage(video, 0, 0);
      var dataURL = canvas.toDataURL();
      console.log('screenshot taken')

      //Call prediction script
    };
    
    pause.onclick = pauseStream;

    setInterval(()=>{
      doScreenshot()
    }, 5000)
    
    const startStream = async (constraints) => {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleStream(stream);
    };
    
    
    const handleStream = (stream) => {
      video.srcObject = stream;
      play.classList.add('d-none');
      pause.classList.remove('d-none');
      screenshot.classList.remove('d-none');
    
    };
    
    
    const getCameraSelection = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      const options = videoDevices.map(videoDevice => {
        return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
      });
      cameraOptions.innerHTML = options.join('');
    };
    
    getCameraSelection();
    
    }, 1000)
    


    const _test = test;
export { _test as test };