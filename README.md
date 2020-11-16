# Server ME

[![NPM Version][npm-image]][npm-url]
![NPM DL](https://img.shields.io/npm/dy/serverme)
![Build][build-image]
[![License][license-image]][license-url]
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://github.com/ryanvmai/ServerME/blob/main/code_of_conduct.md)

Server ME is an open-source JavaScript library that works with [Express.js](https://expressjs.com), [Mongoose.js](https://mongoosejs.com), and [Node.js](https://nodejs.org/en/). Targeted towards beginners, Server ME helps people unfamiliar with back-end coding quickly set up a web server and API with a database connection.

# Features

- Creates an Express server that connects to MongoDB.
- Creates common routes
- Creates routes for Get/Post requests
- Allows users to quickly create mongoose Schemas and designate routes

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

# Using Server ME

## **Quick start**

Importing with Node.js `require()`

```
const serverme = require('serverme');
```

```
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

At the current moment, Server ME can create an Express server that connects to MongoDB. To use this library with MongoDB, create an account [here](https://www.mongodb.com/cloud/atlas). After creating your account, create a project and a cluster. Connect your database by allowlisting your IP address and connecting your Atlas Cloud Uniform Resource Indentifier (URI).

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

# Contributions

Contributions to this software library are highly appreciated and encouraged. To contribute, simply initiate a pull request.

Contributions must adhere to the [Contributor Covenant Code of Conduct](https://github.com/ryanvmai/ServerME/blob/main/code_of_conduct.md).

# Philosophy

## Server ME

Server ME is an open-source JavaScript library built for beginners by beginners. It is targeted towards JavaScript developers who have little to no experience in back-end coding. As you use Server ME and learn more about back-end development, we encourage you to contribute to this library to make it better for other beginners learning JavaScript.

## Inclusivity

As an open-source library, Server ME strives to be inclusive. Thus, Server ME has abandoned all controversial and offensive norms in the Computer Science community. For example, rather than refering to our primary branch as "master," Server ME refers to our primary branch as "main." Rather than using terms such as "blacklist" or "whitelist," Server ME uses "allowlist" or "denylist." We hope you will join us in creating inclusive communities within Computer Science. Please feel free to submit a pull request if any code or text in this library seems offensive or non-inclusive.

Server ME adheres to the Contributor Covenant Code of Conduct. Click [here](https://github.com/ryanvmai/ServerME/blob/main/code_of_conduct.md) for more information.

# License

Server ME uses the **MIT** license, a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

_Information sourced from [choosealicense](https://choosealicense.com/licenses/mit/)._

Read the [full license][license-url] to learn more.

# Copyright

© 2020 Ryan Mai

[npm-image]: https://img.shields.io/npm/v/serverme?color=blue
[npm-url]: https://www.npmjs.com/package/serverme
[license-image]: https://img.shields.io/npm/l/serverme
[license-url]: https://github.com/ryanvmai/ServerME/blob/main/LICENSE
[build-image]: https://img.shields.io/badge/build-passing-brightgreen
