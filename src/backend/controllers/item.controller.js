const express = require('express');
const itemsRoutes = express.Router();

const Item = require('../models/item.model')


//get all items
itemsRoutes.route('/items').get(function(req, res) {
    Item.find(function(err, items) {
      if (err) {
          console.log(err);
      } else {
          res.json(items); 
      }
  });
});


//get item by Id
itemsRoutes.route('/item/:id').get(function(req, res) {
    let id = req.params.id;
    Item.findById(id, function(err, item) {
        res.json(item);
    });
  });

//add new item
itemsRoutes.route('/item').post(function(req, res) {

        let item = new Item(req.body);
        item.save()
          .then(item => {
              res.status(200).json({'item': 'item added successfully', 'obj' : req.body});
          })
          .catch(err => {
              res.status(400).send('adding new item failed');
          });
});



//update item by Id
itemsRoutes.route('/item/:id').put(function(req, res) {
    Item.findById(req.params.id, function(err, item) {
      if (!item)
          res.status(404).send("data is not found");
      else{
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
itemsRoutes.route('/item/delete/:id').put(function(req, res) {
    let id = req.params.id;
    Item.deleteOne({ _id: id }, function(err) {
        if (!err) {
                res.json('Item successfully deleted')
        }
        else {
            res.json('Error while trying to delete item')
        }
    });
  });




module.exports = itemsRoutes
