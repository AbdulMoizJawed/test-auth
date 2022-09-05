
const express = require('express')
var router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const connectToMongo = require('./db')
const app = express()
var logger = require('morgan');
// const fetchUser = require('./middleware/fetchUser');
// const matching = require('./middleware/matching');
var cookieParser = require('cookie-parser');
var path = require('path');


const port = process.env.PORT || 5000;
connectToMongo();



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/auth.js'))

app.get('/',(req,res) => {
    res.send("This route is for testing")
})



app.listen(port, () => console.log(`Listening on port ${port}`));