var express = require("express");
var router = express.Router();


<<<<<<< HEAD
router.get("/affirmations", function (req, res) {
=======
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}

// *** Routes
// =============================================================

// Request to find and display all exercise tasks (complete/incomplete).
router.get("/affirmations", isLoggedIn, function (req, res) {
>>>>>>> 748f81eba406c729ccfa40b41390bd70b0b4e9a8

    res.render("affirmations");
});

module.exports = router;