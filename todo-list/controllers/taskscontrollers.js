const Task = require('../models/Tasks');

async function getAllTask(req, res) {

    //query tasks
    try {
      const allTask = await Task.find({});
      res.json({task: allTask });
    }catch(e){
      console.log(e);
    }
};

async function createTask(req, res) {
    try {
      //parse out fields from POST request
    /*
taskName: String,
    description: String,
    completed: Boolean,
    status: { type: String, default: 'incomplete'},
    dateCreated: { type: Date, default: Date.now},
    dateCompleted: {type: Date},
    id: { type: String, default: uuidv4()},

    */
      const taskName  = req.body.taskName
      const description = req.body.description 
      const completed = req.body.completed
      const status = req.body.status
      
  
      //pass fields to new Blog model 
      //notice how it's way more organized and does the type checking for us
      const newTask = new Task({
          taskName,
          description,
          completed,
          status,
      });
  
      //save our new entry to the database 
      const savedData =  await newTask.save();
      
      //return the successful request to the user 
      res.json({
          success: true,
          blogs: savedData
      });
  
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
};







module.exports = {
getAllTask,
createTask

}