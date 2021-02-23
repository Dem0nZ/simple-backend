const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const posts = [
    {
        title: 'hello. I am title1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur at beatae commodi'
    },
    {
        title: 'hello. I am title2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur at beatae commodi'
    },
    {
        title: 'hello. I am title3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur at beatae commodi'
    },
    {
        title: 'hello. I am title4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur at beatae commodi'
    }
]
// Methods
app.get('/posts', (req, res) => {
    return res.send(posts);
})
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(posts[id]);
})
app.post('/posts', (req, res) => {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send(posts);
} )

app.listen(3000, () => console.log('Server on port 3000'));
