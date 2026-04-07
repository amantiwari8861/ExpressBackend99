require("dotenv").config({ quiet: true });

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");
const server = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { loggingMiddleware } = require("./middlewares/logging.middleware");
const corsOptions = require("./config/cors.config");
const paymentRouter = require("./routes/payments.routes");

server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(cors(corsOptions));
server.use(morgan("dev"));
// server.use(loggingMiddleware);
// server.use(authMiddleware);
server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
  res.send("Server is Up and Running!");
});
server.use("/api/v1/users", userRouter);
server.use(authRouter);
server.use("/api/payment", paymentRouter);


server.listen(PORT, HOST, () => {
  console.log(`listening on http://${HOST}:${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then((mongo) => console.log(`connected to ${mongo.connections[0].host}`))
  .catch((err) => console.log(err.message));

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});