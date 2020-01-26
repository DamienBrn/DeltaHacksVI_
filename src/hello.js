var { google } = require('googleapis');
let privatekey = require("./privatekey.json");

// configure a JWT auth client
let jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/cloud-platform']);

//authenticate request
jwtClient.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Successfully connected!");
    }
});

// let projectId = '611279108218'
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


async function predict() {
    // Construct request
    // params is additional domain-specific parameters.
    // score_threshold is used to filter the result
    const request = {

        name: client.modelPath(projectId, location, modelId),
        payload: {
            image: {
                imageBytes: content,
            },
        },
        params: {
            score_threshold: '0.1',
        },
    };

    const [response] = await client.predict(request);

    for (const annotationPayload of response.payload) {
        console.log(`Predicted class name: ${annotationPayload.displayName}`);
        console.log(
            `Predicted class score: ${annotationPayload.imageObjectDetection.score}`
        );
        console.log(`Normalized vertices:`);
        for (const vertex of annotationPayload.imageObjectDetection.boundingBox
            .normalizedVertices) {
            console.log(`\tX: ${vertex.x}, Y: ${vertex.y}`);
        }
    }
}

predict()




