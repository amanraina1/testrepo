import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("req obj ===> ", req);
  res
    .status(200)
    .json({ sucess: true, message: "Deployed successfully!!! hurray" });
});

export default app;
