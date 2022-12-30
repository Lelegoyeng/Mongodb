const express = require("express");
const app = express();
require('dotenv').config()
 
//middleware
app.use(express.json());
 
app.listen(3000, () => {
  console.log("Server is running on port 3001");
});


const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(process.env.mongodb,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const blogRouter = require("./routes/BlogRoutes");
app.use("/api/blogs", blogRouter);


module.exports = app;