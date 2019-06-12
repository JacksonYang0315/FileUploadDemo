const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' }); 

app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static(path.join(__dirname, 'uploads')));

app.get('/', function (req, res) {
    res.sendFile(__dirname +'/index.html');
});

app.post('/file-upload',upload.single('file'), function (req, res) {
    if (!req.file) {
        res.status(500).send('')
        return;
        }
        res.json(req.file.path) 
        return;
  }); 


app.listen(3000, function () {
    console.log('Listening on port 3000!');
  });