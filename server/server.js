const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

const {searchVid} = require("./controllers/searchController");
const {prepareDownload, downloadVid} = require("./controllers/downloadController");


app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/home", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/api/search/:url", searchVid);

app.post("/api/download", prepareDownload);
app.get("/api/download/:id", downloadVid);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
