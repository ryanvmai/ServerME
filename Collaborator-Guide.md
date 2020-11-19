# Server ME Collaborator Guide

## Issues

Open issues for Server ME can be found [here](https://github.com/ryanvmai/ServerME/issues)

## PRs and Code contributions

- No bugs should exist
- The build should not fail
- Follow the [JavaScript Standard Style](http://standardjs.com/) and `npm run lint`.

## Branches

Use the `main` branch for bug fixes or minor work that is intended for the
current release stream.

## Steps for contributing

1. Create your own [fork](https://github.com/ryanvmai/ServerME) on GitHub, then
   checkout your fork.
2. Write your code in your local copy. It's good practice to create a branch for
   each new issue you work on, although not compulsory.
3. To run the test suite, first install the dependencies by running `npm install`
4. Ensure your code is linted by running `npm run lint` -- fix any issue you
   see listed.
5. If the tests pass, you can commit your changes to your fork and then create
   a pull request from there.

_Guide sourced from Express.js_
