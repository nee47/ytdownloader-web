const path = require("path");

var exec = require("child_process").execFile;

async function searchVid(req, res) {
  const youtubeUrlRegex =
    /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;

  if (!youtubeUrlRegex.test(req.params.url)) {
    console.log("NOT VALID  LINK");
    res.status(400);
  } else {
    console.log("VALID VIDEO LINK");

    exec(
      `${path.resolve(__dirname, "..")}/resources/yt-dlp.exe`,
      ["-e", "--get-thumbnail", req.params.url],
      function (err, data) {
        if (err) {
          console.log("errorrrrrrrrr")
          res.status(400);
          res.json({errorcito: "Video not found"})
        }
        else{
          results = data.toString().split('\n')
          console.log(results)
          res.json({
            title: results[0],
            imageSource: results[1],
            url: req.params.url
          })
        } 
      }
    )
  }
}

//export default searchVid;
module.exports = { searchVid };
