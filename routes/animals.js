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

// A little function to check if we have an authorized user and continue on or redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
} 
/* GET create update page */ 
router.get('/update', secured, animal_controller.animal_update_Page);


/* GET delete costume page */ 
router.get('/delete', animal_controller.animal_delete_Page); 