var express = require('express');

// Routers
const rootRouter = require('./routes/root');

const app = express();

app.use(express.json({limit: "5kb"}));
app.use(express.urlencoded({ extended: false }));

// Routing
app.use('/', rootRouter);

// Responds with 404 error. Use all routes before this.
app.use((req, res, next) => {
  notFoundError = { status: false, message: "Requested page was not found." };
  res.status(404).json(notFoundError);
});

let port = process.env.PORT || 5672;
app.listen(port);
console.log("server started at port " + port)