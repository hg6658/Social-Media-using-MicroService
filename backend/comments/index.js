const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const commentsByPostId = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments',(req,res)=>{
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const postId = req.params.id;
    const comments = commentsByPostId[postId] || [];
    comments.push({
        commentId,
        content
    });
    commentsByPostId[postId] = comments;
    res.status(201).send(commentsByPostId[postId]);
});

app.listen(4001,()=>{
    console.log("app listening on port 4001");
})
