const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE Seeded -----\n');
  await seedUsers();
    console.log('\n----- USERS Seeded -----\n');
  await seedPosts();
    console.log('\n----- POSTS Seeded -----\n');
  await seedComments();
    console.log('\n----- COMMENTS Seeded -----\n');
  process.exit(0);
};

seedAll();