var express = require('express');
const animal_controller=require('../controllers/animal')
var router = express.Router();

/* GET home page. */
router.get('/', animal_controller.animal_view_all_Page);
module.exports = router;

// GET request for one animal. 
router.get('/animals/:id', animal_controller.animal_detail);
module.exports = router;

/* GET detail animal page */ 
router.get('/detail', animal_controller.animal_view_one_Page);

/* GET create animal page */ 
router.get('/create', animal_controller.animal_create_Page);

/* GET create update page */ 
router.get('/update', animal_controller.animal_update_Page);