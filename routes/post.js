const express = require('express');
const router = express.Router();
const Post = require('../models/ItemSchema');


router.get('/', (req,res) => {
    Post.find()
        .then(posts => {
            res.json(posts);
        })
        .catch(err => res.status(404).json(err));
});


// get by id
router.get('/:id', (req, res) => {
    Post.findOne({_id: req.params.id})
        .then(post => {
            if(!post) {
                res.status(404).json(errors);
            }
            res.json(post);

        })
        .catch(err => res.status(404).json(err));
});



// change by id
router.post('/:id', (req, res) => {
    const title = req.body.title;
    Post.findOneAndUpdate({_id: req.params.id}, {$set:{title}} )
        .then(post => {
            res.json(post);
        })
        .catch(err => res.status(404).json(err));
});


// add post
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title
    });

    newPost.save()
        .then(post => {
            res.json(post);
        })
        .catch(err => res.status(404).json(err));
});


// delete post
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove({_id: req.params.id})
        .then(() => {
            res.json({success: true});
        })
        .catch(err => res.status(404).json(err));
});

// add comment
router.post('/comment/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            const newComment = {
                title: req.body.title
            };
            post.comments.push(newComment);

            post.save()
                .then(post => res.json(post))
                .catch(err => res.json(err));
        })
        .catch(err => res.status(404).json(err));
});


// delete comment
router.delete('/uncomment/:id/:comment_id', (req, res) => {
    console.log(1);
    Post.findById(req.params.id)
        .then(post => {
            console.log(post);
            // Check if comment exist
            if( post.comments.filter(comment => comment._id.toString() === req.params.comment_id ).length === 0) {
                return res.status(404).json({comment_not_exict: 'No comments'})
            }

            const removeIndex = post.comments
                .map(item => item._id.toString())
                .indexOf(req.params.comment_id);

            post.comments.splice(removeIndex, 1);

            post.save()
                .then( post => res.json(post) )
                .catch( err => res.json(err) );
        })
        .catch(err => res.status(404).json(err));
});



// change comment by id
router.post('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            // Check if comment exist

        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;
