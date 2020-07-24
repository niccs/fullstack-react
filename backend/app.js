const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./../backend/routes/users-routes");
const placesRoutes = require("../backend/routes/places-routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/places", placesRoutes);

app.use("/api/user", usersRoutes);

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || "server side error" });
});
// app.post("/user", (req, res, next) => {
//   res.send("<h1>" + req.body.userName + "</h1>");
// });

// app.get("/", (req, res, next) => {
//   res.send(
//     '<form action = "/user" method="POST"> <input type="text" name="userName"></input><button type="submit">CREATE USER</button> </form>'
//   );
// });

app.listen(5000);
