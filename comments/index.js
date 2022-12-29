const express = require('express');
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  console.log('get posts');
  res.send(commentsByPostId[req.params.id] || [])
});

app.post('/posts/:id/comments', (req, res) => {
  console.log('post(/posts/:id/comments');
  const commentId = randomBytes(4).toString('hex');

  const { content } = req.body
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({id: commentId, content})
  commentsByPostId[req.params.id] = comments;
  console.log('so far so.. ', comments, content);
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('listening 4001...');
})