import express from "express";
import { deleteUser, getAllUsers, getUser, newUser, } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();
// route /api/v1/user/new
app.post("/new", newUser);
// route  /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);
// route  /api/v1/user/:dynamicId ..    note:  "Always keep this in end or else it will treat other branch urls as dynamicId ...also  urls are common then you can write this new chaining syntax"
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
export default app;
