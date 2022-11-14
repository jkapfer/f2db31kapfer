var Animal = require('../models/animal'); 
 
// List of all Animals 
exports.animal_list = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.send(theAnimals); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// for a specific Animal. 
exports.animal_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Animal.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Animal create on POST. 
exports.animal_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Animal(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.genus = req.body.genus; 
    document.species = req.body.species; 
    document.legs = req.body.legs
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
}; 
 
// Handle Animal delete form on DELETE. 
exports.animal_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Animal.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    }     
}; 
 
// Handle Animal update form on PUT. 
exports.animal_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Animal.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name) toUpdate.name = req.body.name; 
        if(req.body.genus) toUpdate.genus = req.body.genus; 
        if(req.body.species) toUpdate.species = req.body.species;
        if(req.body.legs) toUpdate.legs = req.body.legs; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.animal_view_all_Page = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.render('animals', { title: 'Animal Search Results', results: theAnimals }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};