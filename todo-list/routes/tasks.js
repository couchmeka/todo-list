const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();


const taskscontroller = require('../controllers/taskscontrollers');

router.get('/all', taskscontroller.getAllTask)
router.post('/create-one', taskscontroller.createTask)

module.exports = router;