var express = require('express');
const animal_controller=require('../controllers/animal')
var router = express.Router();

/* GET home page. */
router.get('/', animal_controller.animal_view_all_Page);
module.exports = router;

// GET request for one costume. 
router.get('/animals/:id', animal_controller.animal_detail);
module.exports = router; 