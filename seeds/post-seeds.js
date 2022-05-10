const { Post } = require('../models');

const postData = [
    {
        title: "Test 1",
        post_content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 1
    },
    {
        title: "Test 2",
        post_content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 2
    },
    {
        title: "Test 3",
        post_content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 3

    },
    {
        title: "Test 4",
        post_content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 4
    },
    {
        title: "Test 5",
        post_content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;