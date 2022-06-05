// -------------------------------IMPORTS--------------------------------//
const express = require("express");
const bodyParser = require("body-parser");

// Creating a new app
const app = express();

// Use static file such as css ,js
app.use(express.static("public"));

// Set enjine for css
app.set("view engine", "ejs");

const downloadCV = false;
app.get("/", (req, res) => {
  res.render("main", { downloadCV: downloadCV, downloadLocation: "cv/cv.txt" });
});

// Website is running at port
port =process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}.....`);
});
