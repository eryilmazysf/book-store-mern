const express = require("express");
const app = express();
// const cors = require('cors')

require("dotenv").config();

const connectDB = require("./models/connectDB");
const router = require("./routes/router");

connectDB();

// app.use(cors())
app.use(express.json());
app.use("/api", router);

// production node env default develop , env =production if app in web browser
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // client git build icindekileri calistir ,build heroku icin
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
