import express from "express";
const app = express();
import http from "http";
import { connectToDatabase } from "./database/connection.js";
import { APP } from "./services/constant.js";
const server = http.createServer(app);
import appRoute from "./services/router.js";

connectToDatabase();

app.use(express.json());

app.use("/api", appRoute);

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({ message: error.message || "Internal server error" });
});

app.use("*", (req, res) => {
  return res.status(404).json({ message: "URL not found" });
});

server.listen(APP.PORT, (req, res) => {
  console.log("http://localhost:5000");
});
