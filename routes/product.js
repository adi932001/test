const express = require("express");
const router = express.Router();

const { getProductById, createProduct ,updateProduct,deleteProduct,getProduct,getAllProducts} = require("../controller/product");


//param

router.param("productId", getProductById);


router.post(
  "/product/create",

  createProduct
);
router.get("/product/:productId", getProduct);


router.delete(
  "/product/:productId",
  
  deleteProduct
);


router.put(
  "/product/:productId",
  updateProduct
);


router.get("/products", getAllProducts);

module.exports = router;