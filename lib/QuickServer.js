/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');

class ExpressServer {
    constructor(port) {
        this.port = port;
    }

    app = express();
    port = process.env.PORT || this.port;

    setup() {
        this.app.use(express.json());
        console.log('method called');

        this.app.get('/', (req, res) => {
            res.send("Hellow World!")
        });
    }

    databaseConnection() {
        //database setup
        // Database connection
        const uri = 'mongodb+srv://guest:AndoverCSC630@testcluster.z1itv.mongodb.net/TestDatabase?retryWrites=true&w=majority';
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log('Successfully established connection to mongoDB Atlas Cloud Database');
        });
    }

    start() {
        this.setup()
        this.databaseConnection()
        this.app.listen(this.port, () => {
            console.log(`Server started at port ${this.port}`);
        });
    }
}

/**
 * Expose ExpressServer
 */
module.exports = ExpressServer;

function createApplication(port) {
    const myServer = new ExpressServer(port);
    myServer.start();
}

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;