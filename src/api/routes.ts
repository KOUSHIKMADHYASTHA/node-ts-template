import express from "express";
const routes = express.Router();

routes.get("/some", (req, res) => {
  res.send("here");
});

export default routes;
