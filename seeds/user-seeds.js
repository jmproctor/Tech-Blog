const { User } = require('../models');

const userData = [
    {
        username: "Pam",
        password: "asdf456"
    },
    {
        username: "Jim",
        password: "asdf1234"
    },
    {
        username: "Dwight",
        password: "asdf1234"
    },
    {
        username: "Oscar",
        password: "asdf1234"
    },
    {
        username: "Michael",
        password: "asdf1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;