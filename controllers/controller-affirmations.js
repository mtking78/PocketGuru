var express = require("express");
var router = express.Router();


// function isLoggedIn(req, res, next) {

//     if (req.isAuthenticated())

//         return next();

//     res.redirect('/signin');

// }

// *** Routes
// =============================================================

// Request to find and display all exercise tasks (complete/incomplete).
router.get("/affirmations", function (req, res) {

    res.render("affirmations");
});

module.exports = router;