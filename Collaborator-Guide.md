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
If you are working on a specific issue or feature, use the designated branch assigned in the issue. If you are creating your own feature that is likely to disrupt the current release, create a new branch.

## Steps for contributing

1. Create your own [fork](https://github.com/ryanvmai/ServerME) on GitHub, then
   checkout your fork.
2. Write your code in your local copy. It's good practice to create a branch for
   each new issue you work on, although not compulsory.
3. Ensure your code is linted by running `npm run lint` -- fix any issue you
   see listed.
4. If you are satisfied, you can commit your changes to your fork and then create
   a pull request from there.

_Guide sourced from Express.js_
