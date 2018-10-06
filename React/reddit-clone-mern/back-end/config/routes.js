var express = require('express');
var router = express.Router();
var textPostsController = require('../controllers/textPosts');
var commentsController = require('../controllers/comments');

//POST ROUTES

// Get route
router.get('/api/posts', textPostsController.index);

// Post route
router.post('/api/posts', textPostsController.create);

// Retrieve Route
router.get('/api/posts/:id', textPostsController.retrieve);

// Update Route
router.put('/api/posts/:id', textPostsController.update);

// Delete Route
router.delete('/api/posts/:id', textPostsController.destroy);

//Comment Routes

// Get Route
router.get('/api/posts/:post_id/comments', commentsController.index);

// Post Route
router.post('/api/posts/:post_id/comments', commentsController.create);

// Retrieve Route
router.get('/api/posts/:post_id/comments/:comment_id', commentsController.retrieve);

// Update Route
router.put('/api/posts/:post_id/comments/:comment_id', commentsController.update);

// Delete Route
router.delete('/api/posts/:post_id/comments/comment:id', commentsController.destroy);

module.exports = router;
