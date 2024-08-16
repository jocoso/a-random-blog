// Homepage

const router = require("express").Router();
const { Post } = require("../models");


router.get("/", async (req, res) => {
    const date = new Date().toLocaleDateString("en-GB");

    try {
        // Would love to fetch it instead but...
        const response = await Post.findAll();
        const postData = response.map(post => post.get({ plain: true }));

        res.render('home', { posts: postData });

    } catch (err) {
        
        // Something weird happened.
        console.error('Failed to fetch post data:', err);
        res.render('home', { posts: [], error: 'Failed to load posts.' });

    }

});

module.exports = router;
