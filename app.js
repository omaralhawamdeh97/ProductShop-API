const db = require("./db/models");
const express = require("express");

const productsRoutes = require("./routes/productsRoutes");
const app = express();

app.use("/products", productsRoutes);
db.sequelize.sync();

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
});

// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "Path not found",
//   });
// });
const PORT = 8080;
app.listen(PORT);
