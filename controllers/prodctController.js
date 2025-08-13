const Product = require('../models/Product');

// CREATE product (admin)
exports.createProduct = async (req, res, next) => {
  try {
    const { title, description, price, category, stock } = req.body;
    const images = (req.files || []).map(f => '/uploads/' + f.filename);

    const product = new Product({
      title,
      description,
      price,
      category,
      stock,
      images
    });

    await product.save();
    res.json(product);
  } catch (err) {
    next(err);
  }
};

