// Create web server
// Create a route for GET /comments
// Read the comments.json file
// Respond with the contents of the file
// Create a route for POST /comments
// Read the comments.json file
// Create a new comment object with the body of the request
// Add the new comment to the comments array
// Write the comments array back to the comments.json file
// Respond with the new comment object
// Create a route for DELETE /comments
// Read the comments.json file
// Create a new array that does not include the comment that was deleted
// Write the new array back to the comments.json file
// Respond with the deleted comment object
// Create a route for PUT /comments
// Read the comments.json file
// Create a new array that does not include the comment that was updated
// Add the updated comment to the new array
// Write the new array back to the comments.json file
// Respond with the updated comment object

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Could not read comments file');
      return;
    }
    res.send(data);
  });
});

app.post('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Could not read comments file');
      return;
    }
    const comments = JSON.parse(data);
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
      if (err) {
        res.status(500).send('Could not write to comments file');
        return;
      }
      res.send(newComment);
    });
  });
});

app.delete('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Could not read comments file');
      return;
    }
    const comments = JSON.parse(data);
    const deletedComment = comments.pop();
    fs