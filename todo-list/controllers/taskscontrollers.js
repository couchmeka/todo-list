const { update } = require('../models/Tasks');
const Task = require('../models/Tasks');


//get all tasks
async function getAllTask(req, res) {

    //query tasks
    try {
      const allTask = await Task.find({});
      res.json({task: allTask });
    }catch(e){
      console.log(e);
    }
};



//create a task
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


//update tasks
async function updateTask (req, res) {
    const entryID = req.body.id;

    
    try{
            await Task.updateOne({id: entryID}, req.body);
    
    if ( req.body.completed === true)
    {

    const filter = { id: entryID };
    const update = { dateCompleted: Date.now() };

// update document with the date completed
    let doc = await Task.findOneAndUpdate(filter, update);
    doc.id;
    doc.dateCompleted;            
    }
    
    } catch(err) {
    
        console.log(err)
        throw err
    }
    
    res.json ({
        success: true,
        message: `Task ${entryID} has been updated`
    })
    
    };


 //delete a task   
 async function deleteOneTask(req, res) {
    const entryId = req.body.id;

    try {
        await Task.deleteOne({id: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }

    res.json({
        success: true,
        message: `blog entry id ${entryId} deleted`
    })
};


//delete multiple tasks
async function deleteMultiple(req, res) {
	try {
      
      const idsToDelete = req.query.id

      const deleteResult = await Task.deleteMany({id:
          idsToDelete
        })
  
  } catch (e) {
    res.send(e);
  }

	res.json({
		success: true,
        deletedResult: idsToDelete
        
	})
}

async function createMultiple (req, res){

   try {

    let createMulti = await Task.create(
        req.body
          )

    return createMulti

   } catch (e) {
    res.send(e);
   }

   res.json({

    sucess:true
    
   })
    



}

module.exports = {
getAllTask,
createTask,
updateTask,
deleteOneTask,
deleteMultiple,
createMultiple

}