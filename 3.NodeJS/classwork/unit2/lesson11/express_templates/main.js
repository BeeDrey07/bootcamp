const express = require("express"),
    app = express(),
    httpStatus = require("http-status-codes"),
    // ejs = require("ejs"),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts");
   
    
app.use(layouts);
app.use(express.static("public"));
// app.set allows you to assign a value to some key that you plan to reuse in future.
// sets "port" to environmental value PORT or 3000 if former code is undefined.
// we've been setting port value to 3000 (conventional port number in web development), however it
// may change when depolying application online.
app.set("port", process.env.PORT || 3000);
// let express.js know that you plan to use ejs for templating (application expects EJS in views folder).
app.set("view engine", "ejs")

app.get("/name/:myName", homeController.respondWithName)

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

// now use app.get.
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});