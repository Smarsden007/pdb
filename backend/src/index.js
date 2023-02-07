const express = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const pool = require("./db/index.js");
//import passport middleware
require("./middlewares/passport-middleware");

//initialize middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://pdb-backend-production.up.railway.app",
      "https://pdb-backend-production.up.railway.app/api/login",
      "https://pouncyparties.com","http://localhost:3000"
    ],
    credentials: true,
  })
);

//{ origin: CLIENT_URL, credentials: true }

app.use(passport.initialize());

//import routes
const authRoutes = require("./routes/auth");

//initialize routes
app.use("/api", authRoutes);

//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀Your app has lifted off  http://localhost:${PORT} 🚀`);
    });
  } catch (error) {
    console.log(`Houston we have a problem: ${error.message}`);
  }
};

appStart();
