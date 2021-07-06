import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "sonia", message: "helloff" });
});

app.get("/love", (req, res) => {
  res.send("Hello love wrwr");
});

app.use("/static", express.static("static"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
