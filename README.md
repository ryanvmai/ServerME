# Server ME

Server ME is an open-source JavaScript library that works with Express.js, Mongoose.js, and Node.js. Targeted towards beginners, Server ME helps people unfamiliar with back-end coding quickly set up a web server and API with a database connection.

# Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install serverme
```

# Features

- Creates an Express server that connects to MongoDB.
- Creates common routes
- Creates routes for Get/Post requests
- Allows users to quickly create mongoose Schemas and designate routes

# Using ServerME

## **Quick start**

```
const serverme = require('serverme');

const app = new serverme;
app.start(3000); //port number
app.connectDatabase();
```

Desired output:

```
Server started at port 3000. Visit site at http://localhost:3000/

Successfully established connection to mongoDB Atlas Cloud Database
```

## **Connecting to MongoDB**

At the current moment, Server ME can create an Express server that connects to MongoDB. To use this library with MongoDB, create an account[here](https://www.mongodb.com/cloud/atlas). After creating your account, create a project and a cluster. Connect your database by allowlisting your IP address and connecting your Atlas Cloud Uniform Resource Indentifier (URI).

Alternatively, use the test URI to connect to Server ME's demo server:

```
mongodb+srv://guest:AndoverCSC630@testcluster.z1itv.mongodb.net/TestDatabase?retryWrites=true&w=majority
```

## **Creating a mongoose schema**

```
//Sample Schema
const userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {
    timestamps: true,
});

app.createModel(userSchema, 'User');
```

# Docs & Community

More information coming soon.

## Contributions

Contributions to this software library are highly appreciated and encouraged. To contribute, simply initiate a pull request.

# Example

Demo repository coming soon.

# Philosophy

## Server ME

Server ME is an open-source JavaScript library built for beginners by beginners. It is targeted towards JavaScript developers who have little to no experience in back-end coding. As you use Server ME and learn more about back-end development, we encourage you to contribute to this library to make it better for other beginners learning JavaScript.

## Inclusivity

As an open-source library, Server ME strives to be inclusive. Thus, Server ME has abandoned all controversial and offensive norms in the Computer Science community. For example, rather than refering to our primary branch as "master," Server ME refers to our primary branch as "main." Rather than using terms such as "blacklist" or "whitelist," Server ME uses "allowlist" or "denylist." We hope you will join us in creating inclusive communities within Computer Science. Please feel free to submit a pull request if any code or text in this library seems offensive or non-inclusive.

# License

MIT

# Other

This README is inspired by Express.js's GitHub Readme file.
