/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');
const router = require('./router');

/**
 * Variables for model construction
 */
const Schema = mongoose.Schema;

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
        // Database setup
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

    createRoutes(route, dataSchema) {
        router.buildRoute(dataSchema);
        this.app.use(route, router);
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