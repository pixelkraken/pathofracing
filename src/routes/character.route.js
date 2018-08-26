const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const character_controller = require('../controllers/character.controller.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', character_controller.test);
module.exports = router;