const express = require("express");

const productsRoutes = require("./routes/productsRoutes");
const app = express();
app.use("/products", productsRoutes);
const PORT = 8080;
app.listen(PORT);

// router.get("/products", (req, res) => {
//   res.json(products);
// });

// router.delete("/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const foundProduct = products.find((product) => product.id === +productId);
//   if (foundProduct) {
//     products = products.filter((product) => product !== foundProduct);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "ERROR 404" });
//   }
// });

// router.post("/products", (req, res) => {
//   const newProductId = products[products.length - 1].id + 1;
//   const newProductslug = slugify(req.body.name.toLowerCase());
//   const newProduct = {
//     id: newProductId,
//     slug: newProductslug,
//     ...req.body,
//   };
//   products.push(newProduct);
//   res.status(201);
//   res.json(newProduct);
// });
