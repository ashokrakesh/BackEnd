const express = require('express');
const UsersModel = require('../models/users.model');
const PostModel = require('../models/post.model');
const router = express.Router();

//Post Method
router.post('/users', async (req, res) => {
    const data = new UsersModel({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/posts', async (req, res) => {
    const data = new PostModel({
        username: "NotDone",
        title: req.body.title,
        body: req.body.body,
        tagname: req.body.tagname
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})




//Get all Method
router.get('/users', async (req, res) => {
    try {
        const data = await UsersModel.find();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/posts', async (req, res) => {
    try {
        const data = await PostModel.find();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/users/:id', async (req, res) => {
    try {
        const data = await UsersModel.findById(req.params.id);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/posts/:id', async (req, res) => {
    try {
        const data = await PostModel.findById(req.params.id);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/auth/:id', async (req, res) => {
    try {
        const data = await UsersModel.findById(req.params.id);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/auth', async (req, res) => {
    try {
        const userModel = {
            username: req.body.username,
            password: req.body.password
        }
    
        const data = await UsersModel.findOne(userModel);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Update by ID Method
router.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await UsersModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.status(200).send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UsersModel.findByIdAndDelete(id)
        res.status(200).send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await PostModel.findByIdAndDelete(id)
        res.status(200).send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;