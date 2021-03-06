const express = require('express');
const itemsRoutes = express.Router();

const Item = require('../models/item.model')
// const apiScript = require('../hello.js')

console.log("Hello")

//get all items
itemsRoutes.route('/items').get(function (req, res) {
  Item.find(function (err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});


//get item by Id
itemsRoutes.route('/item/:id').get(function (req, res) {
  let id = req.params.id;
  Item.findById(id, function (err, item) {
    res.json(item);
  });
});

//add new item
itemsRoutes.route('/item').post(function (req, res) {

  let item = new Item(req.body);
  item.save()
    .then(item => {
      res.status(200).json({ 'item': 'item added successfully', 'obj': req.body });
    })
    .catch(err => {
      res.status(400).send('adding new item failed');
    });
});



//update item by Id
itemsRoutes.route('/item/:id').put(function (req, res) {
  Item.findById(req.params.id, function (err, item) {
    if (!item)
      res.status(404).send("data is not found");
    else {
      item.name = req.body.name
      item.description = req.body.description
      item.count = req.body.count
    }
    item.save().then(item => {
      res.json('item updated!');
    })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});


//delete item by Id
itemsRoutes.route('/item/delete/:id').put(function (req, res) {
  let id = req.params.id;
  Item.deleteOne({ _id: id }, function (err) {
    if (!err) {
      res.json('Item successfully deleted')
    }
    else {
      res.json('Error while trying to delete item')
    }
  });
});

var partA = ""

itemsRoutes.route('/addPartA').post(function (req, res) {

  partA = req.body.value
})

var partB = ""

itemsRoutes.route('/addPartB').post(function (req, res) {

  partB = req.body.value
})




itemsRoutes.route('/imagesearch').post(function (req, res) {

  let projectId = 'whats-that-called'
  let location = 'us-central1'
  let modelId = 'IOD4739137008272670720'

  const { PredictionServiceClient } = require('@google-cloud/automl').v1;

  // Instantiates a client
  const client = new PredictionServiceClient();

  let fullString = partA + req.body.binaryImage;

  const lz = require('lz-string')
  let str = lz.decompress(fullString);

  console.log("I'm here!")

  async function predict() {

    const request = {

      name: client.modelPath(projectId, location, modelId),
      payload: {
        image: {
          imageBytes: str,
        },
      },
      params: {
        score_threshold: '0.65',
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

    console.log(countOfObjects)

    res.json({ countOfObjects })

    return new Promise((resolve, reject) => {
      resolve(countOfObjects)
    })
  }

  predict().then((array) => {
    console.log(array)
  })

})

module.exports = itemsRoutes
