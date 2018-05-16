var express = require("express");
var router = express.Router();
var db = require("../models");

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}

router.get("/journal", isLoggedIn, function (req, res) {

    res.render("journal");
});

router.get("/journalEntries", function (req, res) {

    res.render("journalEntries");
});

module.exports = router;