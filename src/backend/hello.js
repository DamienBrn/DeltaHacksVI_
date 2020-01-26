// let projectId = 'whats-that-called'
// let location = 'us-central1'
// let modelId = 'IOD4739137008272670720'


// const { PredictionServiceClient } = require('@google-cloud/automl').v1;
// const fs = require('fs');

// // Instantiates a client
// const client = new PredictionServiceClient();

// let content = fs.readFileSync('/Users/kevintabatabaei/Documents/DeltaHacksVI_/src/backend/testimage.jpg');

// async function predict() {

//     const request = {

//         name: client.modelPath(projectId, location, modelId),
//         payload: {
//             image: {
//                 imageBytes: content,
//             },
//         },
//         params: {
//             score_threshold: '0.9',
//         },
//     };

//     var countOfObjects = {
//         "rubberduck": 0,
//         "pen": 0,
//         "brownies": 0,
//         "toiletpaper": 0
//     }

//     const [response] = await client.predict(request);

//     for (const annotationPayload of response.payload) {
//         countOfObjects[annotationPayload.displayName] = countOfObjects[annotationPayload.displayName] + 1
//     }

//     console.log(countOfObjects)

//     return new Promise((resolve, reject) => {
//         resolve(countOfObjects)
//     })
// }

// predict().then((array) => {
//     console.log(array)
// })




