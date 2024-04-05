const product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//posting products
const postProducts = asyncHandler(async (req, res) => {
  try {
    const products = await product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500);
    throw new Error(error.message);
  }
});

//get all products

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get product by ID

const getProductById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const productOne = await product.findById(id);
    res.status(200).json(productOne);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//updating the products

const updateProducts = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const productTwo = await product.findByIdAndUpdate(id, req.body);
    if (!productTwo) {
      res.status(404);
      throw new Error(`cannot find the product with id ${id}`);
    }
    const updatedProduct = await product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//deleting the product

const deleteproduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(404);
      throw new Error(`cannot find the product with id ${id}`);
    }

    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  postProducts,
  getAllProducts,
  getProductById,
  updateProducts,
  deleteproduct,
};
