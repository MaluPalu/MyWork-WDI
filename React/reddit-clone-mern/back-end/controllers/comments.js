var models = require('../models');
var Comment = models.Comment;
var TextPost = models.TextPost;

function index(req, res) {
  Comment.find({ post_id: req.params.post_id }, function(err, comments) {
    if (err) res.send(err);
    else res.json(comments);
  });
}

function create(req, res) {
  Comment.create(req.body, function(err, newComment) {
    if (err) {
      console.log('err line 16');
      res.sendStatus(404);
      return;
    }
    TextPost.findById(req.params.post_id, function(err, post) {
      if (err) {
        res.sendStatus(404);
        return;
      }
      newComment.save(function(err, savedComment) {
        if (err) {
          res.sendStatus(404);
          return;
        }
        post.comments.push(newComment);
        post.save(function(err, savedPost) {
          if (err) {
            res.sendStatus(404);
            return;
          }
        res.json(savedComment);
        });
      });
    });
  });
}

function update(req, res) {
  Comment.findById(req.params.comment_id, function(err, foundComment) {
    if (err) {
      res.sendStatus(404);
      return;
    }
    TextPost.findById(req.params.post_id, function(err, foundPost) {
      if (err) {
        res.sendStatus(404);
        return;
      }
      foundComment.content = req.body.content;
      foundComment.votes = req.body.votes;
      foundComment.save(function(err, savedComment) {
        if (err) {
          res.sendStatus(404);
          return;
        }
        res.json(savedComment);
      })
    })
  })
}

function retrieve(req, res) {
  Comment.findById(req.params.comment_id, function(err, foundComment) {
    if (err) {
      res.sendStatus(404);
      return;
    }
    res.json(foundComment);
  });
}

function destroy(req, res) {
   TextPost.findById(req.params.post_id, function(err, foundPost) {
     if(err) {
       res.sendStatus(404);
       return;
     }
     var newComments = foundPost.comments.indexOf(req.params.comment_id);
     if(newComments != -1) {
       foundPost.comments.splice(newComments, 1);
     }
     foundPost.save(function(err, savedPost) {
       if(err) {
         res.sendStatus(404);
         return;
       }
       res.json(savedPost);
     });
   });
   Comment.findByIdAndRemove(req.params.comment_id, function(err, result) {
     if(err) {
       res.sendStatus(404);
       return;
     }
     res.json(result);
   });
 }

module.exports.index = index;
module.exports.create = create;
module.exports.update = update;
module.exports.retrieve = retrieve;
module.exports.destroy = destroy;
