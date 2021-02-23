import mongoose from 'mongoose';
import Post from './models/Post';


mongoose.connect('mongodb://localhost/server-side');

const  post = new Post({
    title: "Hello, first",
    text: "Oh my. Work hard"
});
post.save().then( () => console.log('OK'));