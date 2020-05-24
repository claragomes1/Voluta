const { Router } = require('express');

const TaskController = require('./controllers/TaskController');

const routes = Router();

routes.post('/task', TaskController.store);
routes.delete('/task/:id', TaskController.destroy);
routes.get('/task', TaskController.index);

module.exports = routes;
