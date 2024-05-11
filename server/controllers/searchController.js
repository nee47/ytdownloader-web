const path = require("path");

function searchVid(req, res) {
  var exec = require("child_process").execFile;

  const youtubeUrlRegex =
    /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;

  if (!youtubeUrlRegex.test(req.body.url)) {
    console.log("NOT VALID  LINK");
    res.send(400);
  } else {
    console.log("VALID VIDEO LINK");
    exec(
      `${path.resolve(__dirname, "..")}/resources/yt-dlp.exe`,
      ["-e", "--get-thumbnail", req.body.url],
      function (err, data) {
        if (err) {
          const estoError = "esto es error " + err.toString();
          console.log(estoError);
        }
        const esto = "ESTO ES DATA : " + data.toString();
        console.log(esto);
        res.json({ message: "UPDATE" });
      }
    );
  }
}

//export default searchVid;
module.exports = { searchVid };
