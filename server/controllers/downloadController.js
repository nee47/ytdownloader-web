const path = require("path");

var exec = require("child_process").execFile;

const { randomUUID} = require('node:crypto');

const resourcesFolder = `${path.resolve(__dirname, '..')}/resources/`;

async function prepareDownload(req, res){
    
    const id = randomUUID();

    exec(resourcesFolder+'yt-dlp.exe'
        ,
        [
            '-S',
            `res:${req.body.resolution}`,
            '-P',
            `${resourcesFolder+'temp'}`,
            '--ffmpeg-location',
            `${resourcesFolder+'ffmpeg/bin'}`,
            '--remux-video',
            'mp4',
             '-o',
             id,
            req.body.url,],
        function (err, data) {
            console.log(err);
            console.log(data.toString());
            res.json({id})
        }
        );

}

async function downloadVid(req, res){
    const file = resourcesFolder+`temp/${req.params.id}.mp4`

    res.download(file, (err) => {
        if (err) {
            // Handle error, but keep in mind the response may be partially-sent
            // so check res.headersSent
        } else {
            console.log("download succesfull");
        }
        }); 
}

module.exports = {prepareDownload, downloadVid}