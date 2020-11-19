/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');

/**
 * Variables for model construction
 */
const Schema = mongoose.Schema;

/**
 * Variables for routes
 */
const router = require('express').Router();

require('dotenv').config();

class ServerME {
    constructor() {
    }

    //variables
    //login = false;
    uri = 'mongodb+srv://guest:AndoverCSC630@testcluster.z1itv.mongodb.net/TestDatabase?retryWrites=true&w=majority';

    app = express();
    //port = process.env.PORT || this.port;

    setup() {
        this.app.use(express.json());

        this.app.get('/', (req, res) => {
            res.send("Hello World!")
        });
    }

    setURI(new_uri) {
        this.uri = new_uri;
    }

    connectDatabase() {
        //database setup
        // Database connection
        const used_uri = this.uri; 
        mongoose.connect(used_uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log('Successfully established connection to mongoDB Atlas Cloud Database');
        });
    }

    start(port) {
        this.setup()
        this.app.listen(port, () => {
            console.log(`Server started at port ${port}. Visit site at http://localhost:${port}/`);
        });
        this.app.use(express.json());
    }

    // start(port, inputURI) {
    //     this.setURI(inputURI)
    //     this.setup()
    //     this.app.listen(port, () => {
    //         console.log(`Server started at port ${port}. Visit site at http://localhost:${port}/`);
    //     });
    //     this.connectDatabase();
    //     this.app.use(express.json());
    // }

    setLogin(bool) {
        if (bool === true) {
            this.login = true;
        } else {
            this.login = false;
        }
    }

    createModel(schema, name) {
        return mongoose.model(name, schema);
    }
}

/**
 * Expose ServerME
 */
exports = module.exports = ServerME;


/**
 * Expose important package components
 */
exports.mongoose = mongoose;
exports.express = express;
exports.Schema = Schema;
exports.router = router;