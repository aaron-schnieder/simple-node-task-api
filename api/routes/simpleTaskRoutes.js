'use strict';
module.exports = function(app) {
    var simpleTasks = require('../controllers/simpleTaskController');

    // routes
    app.route('/tasks')
        .get(simpleTasks.get_tasks)
        .post(simpleTasks.create_task);

    app.route('/tasks/:id')
        .get(simpleTasks.get_task)
};