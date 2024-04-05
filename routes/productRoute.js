const express = require("express");
const product = require("../models/productModel");
const {
  postProducts,
  getAllProducts,
  getProductById,
  updateProducts,
  deleteproduct,
} = require("../Controllers/productController");
const router = express.Router();

//to post the products
router.post("/", postProducts);

//to get all the products
router.get("/", getAllProducts);

// to get specific product
router.get("/:id", getProductById);

//updating the products

router.put("/:id", updateProducts);

//deleting the product

router.delete("/:id", deleteproduct);

module.exports = router;
