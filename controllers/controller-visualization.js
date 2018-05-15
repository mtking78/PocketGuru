var express = require("express");
var router = express.Router();


router.get("/visualization", function (req, res) {

    res.render("visualization");
});

module.exports = router;