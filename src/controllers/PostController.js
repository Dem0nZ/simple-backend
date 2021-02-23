import Post from '../models/Post';

class PostController {
    create(req, res) {
        const data = req.body;
        const post = new Post({
            title: data.title,
            text: data.text
        })
        post.save().then(() => {
            res.send({ status: "OK" })
        })
    }

    index(req, res) {
        Post.find().then((err, posts) => {
            if (err) {
                res.send(err)
            }
            res.json(posts)
        })
    }

    delete(req, res) {
        Post.remove({
            _id: req.params.id
        }).then(post => {
            try {
                res.json({ status: 'DELETED' })
            } catch (e) {
                res.json(e)
            }
        })
    }

    read(req, res) {
        Post.findOne({ _id: req.params.id}).then(post => {
            if (!post) {
                res.send({ error: "Not found"})
            } else {
                res.json(post)
            }
        })
    }

    update(req, res) {
        Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
            if (err) {
                res.send(err)
            }
            res.json({ status: "UPDATE" })
        })
    }
}

export default PostController;