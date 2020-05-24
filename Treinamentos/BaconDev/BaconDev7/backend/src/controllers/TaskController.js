const mongoose = require('mongoose');
const Task = require('../models/Task');

module.exports = {
    async store(req,res){
        try{
            const task = await Task.create(req.body);
            return res.json(task);
        } catch (err){
            return res.status(400).send({ error: 'Error creating new task'});
        }
    },

    async destroy(req,res){
        try{
            await Task.findByIdAndRemove(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Error delete task '});
        }
    },

    async index(req, res){
        try{
            const task = await Task.find();
            return res.json(task);
        } catch(err) {
            return res.status(400).send({ error: 'Error loading tarks'});
        }
    }
};