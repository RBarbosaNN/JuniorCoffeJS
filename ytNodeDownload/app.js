
const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.get("/", function(req, res) {
    const { url } = req.query; //Lá no navegador, depois de localhost:3000/, devemos colocar: ?url= link de interesse
    res.header("Content-Disposition", 'attachementt; filename="video.mp4"');
    return ytdl(url).pipe(res);
});

app.listen(3000);
