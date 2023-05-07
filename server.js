//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/app-angular-oradores'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/app-angular-oradores/index.html'));
});
