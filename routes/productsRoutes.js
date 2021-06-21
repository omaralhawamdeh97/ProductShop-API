const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productsControllers");

router.param("productId", async (req, res, next, productId) => {
  const product = await productControllers.fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("product not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", productControllers.getProduct);
router.post("/", productControllers.addProduct);

router.delete("/:productId", productControllers.deleteProduct);

router.put("/:productId", productControllers.updateProduct);

module.exports = router;
