'use strict';

// create an array to capture simple tasks
var tasks = [];

// create 1k example simple tasks using an IIFE
(function createTasks(){
    for(var i =0; i < 1000; i++) {
        tasks.push({
            id: i,
            name: 'task ' + i,
            description: 'this is a very difficult task ' + i
        });
    }
})();

// GET http://url.com/tasks
exports.get_tasks = function(req, res) {
    res.json(tasks);
    res.end();
};

// GET http://url.com/tasks/{id}
exports.get_task = function(req, res) {
    var task = tasks.find(function(t){
        return t.id == req.params['id'];
    });
    //res.statusCode = 404;
    res.json(task);
    res.end();
}

// POST http://url.com/tasks  {"id":12345, "name": "new task", "description": "some desc"}
exports.create_task = function(req, res) {
    // make sure we got a body
    if(Object.keys(req.body).length == 0) {
        res.statusCode = 500;
        return res.json({message: "No POST body provided."});
    }

    // make sure the body has valid parameters
    if(
        req.body.id === undefined ||
        req.body.name === undefined
    ) {
        res.statusCode = 500;
        return res.json({message: "Post body malformed"});
    }

    var newTask = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
    res.end();
}