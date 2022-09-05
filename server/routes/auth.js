// var express = require('express');



var express = require('express');
const router = express.Router();

const { signin, signup } =require( "../controllers/user.js");

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;