const express = require('express');
var http = require('http');
http.globalAgent.maxSockets = 1000;

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;


const itemRoutes = require('../controllers/item.controller')

app.use('/uploads', express.static('uploads'))
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

// app.use(express.bodyParser({ limit: '50mb' }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

// app.use(express.json({ limit: '50mb', extended: true }));
// app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

const uri = "mongodb+srv://delta_hacks_shelf_ai:qwyv68ZMiCqyeRqM@cluster0-pblqm.gcp.mongodb.net/delta_db";
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});


app.use('/api', itemRoutes)