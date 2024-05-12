const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

const {searchVid} = require("./controllers/searchController");

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

app.get("/download", (req, res) => {
  //const file = `${__dirname}/temp/vid1.mp4`;

  console.log(req.body);
  console.log("something");
  res.send("ok");
  //   exec(
  //     `${__dirname}/resources/yt-dlp.exe`,
  //     ["-F", req.body.url],
  //     function (err, data) {
  //       console.log(err);
  //       console.log(data.toString());
  //       res.json({ message: "UPDATE" });
  //     }
  //   );

  //   res.download(file, (err) => {
  //     if (err) {
  //       // Handle error, but keep in mind the response may be partially-sent
  //       // so check res.headersSent
  //     } else {
  //       // decrement a download credit, etc.
  //       console.log("download succesfull");
  //     }
  //   }); // Set disposition and send it.
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
