const Tasks = require("../model/tasks");

exports.createTasks = (req, res) => {
    const task = new Tasks(req.body);
    task.save((err, task) => {
      if (err) {
        console.log(err)
        return res.status(400).json({
          error: "NOT able to save task in DB"
        });
      }
      res.json({task});
      
    });
  };