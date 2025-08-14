const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');
const { authenticate, adminOnly } = require('../middlewares/auth'); 

// Get all categories
router.get('/', getCategories);

//Create category
router.post('/', authenticate, adminOnly, createCategory);

module.exports = router;
