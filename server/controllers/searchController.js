const path = require("path");

function searchVid(req, res){
    var exec = require("child_process").execFile;

    const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?youtu\.?be(\.com)?\/.+$/;
    if(!youtubeUrlRegex.test(req.body.url))
        res.send(400)
    else
        exec(
          `${path.resolve(__dirname, '..')}/resources/yt-dlp.exe`,
          ["-e", "--get-thumbnail", req.body.url],
          function (err, data) {
            if(err){
                const estoError = "esto es error "+err.toString()
                console.log(estoError);
            }
            const esto = "ESTO ES DATA : "+data.toString()
            console.log(esto);
            res.json({ message: "UPDATE" });
          }
        ); 
  }

//export default searchVid;
module.exports = {searchVid}