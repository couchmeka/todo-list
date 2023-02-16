const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();


const taskscontroller = require('../controllers/taskscontrollers');

router.get('/all', taskscontroller.getAllTask)
router.post('/create-task', taskscontroller.createTask)
router.put('/update-task', taskscontroller.updateTask)
router.delete('/delete-task', taskscontroller.deleteOneTask);
router.delete('/delete-multi', taskscontroller.deleteMultiple)
router.post('/create-multi', taskscontroller.createMultiple)




module.exports = router;