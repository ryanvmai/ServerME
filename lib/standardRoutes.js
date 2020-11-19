/**
 * Module dependencies.
 */
const router = require('express').Router();
const serverme = require('./serverME');

var Data = require('./defineModel');

// class StandardRouter {
//     constructor(dataSchema) {
//         this.dataSchema = dataSchema;
//     }

//     getDataSchema() {
//         return this.dataSchema;
//     }

//     changeDataScheme() {
//         Data = this.dataSchema;
//     }
// }

// Router code

// Get Request
router.route('/').get((req, res) => {
    Data.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get by ID
router.route('/id/:id').get((req, res) => {
    Data.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
})

// Delete request
router.route('/delete/:id').post((req, res) => {
    Data.findByIdAndDelete(req.params.id)
     .then(() => res.json('Data deleted'))
     .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * Expose router
 */
exports = module.exports = router;