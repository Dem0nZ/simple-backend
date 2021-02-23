import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import PostController from './controllers/PostController';


const Post = new PostController();
const app = express()

mongoose.connect('mongodb://localhost/server-side')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/posts', Post.index);
app.delete('/posts/:id', Post.delete);
app.post('/posts', Post.create);
app.put('/posts/:id', Post.update);
app.get('/posts/:id', Post.read);

app.listen(3000, () => console.log("Server work on port 3000"))
