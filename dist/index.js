'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/server-side');

var post = new _Post2.default({
    title: "Hello, first",
    text: "Oh my. Work hard"
});
post.save().then(function () {
    return console.log('OK');
});