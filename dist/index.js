'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_mongoose2.default.connect('mongodb://localhost/server-side');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', function (req, res) {
    var data = req.body;
    var post = new _Post2.default({
        title: data.title,
        text: data.text
    });
    post.save().then(function () {
        res.send({ status: "OK" });
    });
});
app.get('/posts', function (req, res) {
    _Post2.default.find().then(function (err, posts) {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
});
app.delete('/posts/:id', function (req, res) {
    _Post2.default.remove({
        _id: req.params.id
    }).then(function (post) {
        try {
            res.json({ status: 'DELETED' });
        } catch (e) {
            res.json(e);
        }
        // if (post) {
        //
        // } else {
        //
        // }
    });
});

app.listen(3000, function () {
    return console.log("Server work on port 3000");
});