// const db = require('../config/connection');
// const Category = require('../models/Category.ts');
// const User = require('../models/User.ts');
// const Product = require('../models/Product.ts');

// const userData = require('./userData.json');
// const productData = require('./productData.json');
// const categoryData = require('./categoryData.json');

// db.once('open', async () => {
//     try {
//         await Category.deleteMany({});
//         await User.deleteMany({});
//         await Product.deleteMany({});
    
//         await User.create(userData);
    
//         await Category.create(categoryData);

//         for (let i = 0; i < productData.length; i++) {
//         const { _id, productCategory } = await Product.create(productData[i]);
//         const category = await Category.findOneAndUpdate(
//             { Category: productCategory },
//             {
//             $addToSet: {
//                 products: _id,
//             },
//             });
//         };
//     } catch (err) {
//         console.error(err);
//         process.exit(1);
//     }
//     console.log('all done!');
//     process.exit(0);
//   });
