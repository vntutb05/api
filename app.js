// require npm 
const express = require('express');
const bodyParser =require('body-parser');
const config = require('config');
const connectDB = require('./common/database');
const router = require('./routes/index')
// require params
let port = config.get('server.port');

connectDB;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs')
router(app);

app.listen( port ,()=>{
    console.log(`Server is listen on port ${port}`);
    console.log(`Please,Access to http://localhost:${port}`)
})