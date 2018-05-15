var express = require("express");
var router = express.Router();


router.get("/journal", function (req, res) {

    res.render("journaling");
});

module.exports = router;