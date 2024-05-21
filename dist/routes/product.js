import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct, } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express.Router();
//Create New product = /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
//  get all PRoducts with filter - /api/v1/product/all
app.get("/all", getAllProducts);
//Create New product = /api/v1/product/latest
app.get("/latest", getLatestProducts);
//Create New product = /api/v1/product/categories
app.get("/categories", getAllCategories);
//Create New product = /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);
//  /api/v1/product/:id
app
    .route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);
export default app;
