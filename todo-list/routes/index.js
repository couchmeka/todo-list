var express = require('express');
var router = express.Router();


const Task = require('../models/Tasks');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const allTask = await Task.find({});
    res.json({taskName: allTask});
    
      } catch(e){
    
    console.log(e);
    
      }
});





module.exports = router;
