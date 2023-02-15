const db = require('../config/connection');
const { User, Category } = require('../models');
const categorySeeds = require('./categorySeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Category.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    await Category.create(categorySeeds);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
  console.log('all done!');
  process.exit(0);
});
