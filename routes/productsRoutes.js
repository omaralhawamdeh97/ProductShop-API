const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productsControllers");

router.get("/", productControllers.getProduct);

router.delete("/:productId", productControllers.deleteProduct);

router.post("/", productControllers.getProduct);
module.exports = router;
