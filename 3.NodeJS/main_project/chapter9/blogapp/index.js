const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const app = new express();
const ejs = require("ejs");
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const validateMiddleware = require("./middleware/validateMiddleware");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());
app.use("/posts/store", validateMiddleware);

mongoose.connect("mongodb://127.0.0.1/my_database", { useNewUrlParser: true });

app.get("/posts/new", newPostController);
app.get("/", homeController);
app.get("/post/:id", getPostController);
app.post("/posts/store", storePostController);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
