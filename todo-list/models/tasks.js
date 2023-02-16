const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");


//name - type: string, validation: required
// description - type: string
// completed - type: boolean, validation: required
// dateCreated - type: date, default: Date.now(), validation: required
// dateCompleted - type: date
// status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']


const taskSchema = new mongoose.Schema({

    taskName: String,
    description: String,
    completed: Boolean,
    status: { type: String, default: 'incomplete'},
    dateCreated: { type: Date, default: Date.now},
    dateCompleted: {type: Date},
    id: { type: String, default: uuidv4()},

})

//register model
const Task = mongoose.model('task_list',taskSchema)



//make model accessible to outside files
module.exports = Task;