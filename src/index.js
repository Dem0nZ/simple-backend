import mongoose from 'mongoose';
import Post from './models/Post';
import express from 'express';
import bodyParser from 'body-parser';

const app = express()

mongoose.connect('mongodb://localhost/server-side')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.post('/posts', ( req, res) => {
    const data = req.body;
    const  post = new Post({
        title: data.title,
        text: data.text
    })
    post.save().then( () => {
        res.send({ status: "OK"})
    })
})
app.get('/posts', (req, res) => {
    Post.find().then(( err, posts) => {
        if (err) {
            res.send(err)
        }
        res.json(posts)
    })
})
app.delete('/posts/:id', (req, res) => {
    Post.remove({
        _id: req.params.id
    }).then( post => {
        try {
            res.json({ status: 'DELETED' })
        } catch (e) {
            res.json(e)
        }
    })
})
app.put('/posts/:id', (req, res) => {
    Post.findByIdAndUpdate( req.params.id, {$set: req.body}, (err) => {
        if (err) {
            res.send(err)
        }
        res.json({ status: "UPDATE"})
    })
})


app.listen(3000, () => console.log("Server work on port 3000"))
