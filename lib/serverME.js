/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');

class ServerME {
    constructor() {
    }

    //variables
    login = false;

    app = express();
    //port = process.env.PORT || this.port;

    setup() {
        this.app.use(express.json());

        this.app.get('/', (req, res) => {
            res.send("Hello World!")
        });
    }

    connectDatabase() {
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

    start(port) {
        this.setup()
        this.app.listen(port, () => {
            console.log(`Server started at port ${port}. Visit site at http://localhost:${port}/`);
        });
    }
}

/**
 * Expose ServerME
 */
exports = module.exports = ServerME;

function createApplication(port) {
    const myServer = new ServerME(port);
    myServer.start();
}

/**
 * Expose `createApplication()`.
 */

//exports = module.exports = createApplication;