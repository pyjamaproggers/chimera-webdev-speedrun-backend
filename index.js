const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

app.listen(3001, (req,res)=>{
    console.log("Running on Port: 3001")
});