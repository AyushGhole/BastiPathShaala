const express = require("express");
const router = express.Router();
const userscontrollers = require("../controllers/userscontrollers");
const passport = require("passport");

//Login Routing
router
  .route("/login")
  .get(userscontrollers.getLoginPage)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/main/login",
      failureFlash: true,
    }),
    userscontrollers.postLoginRoute
  );

//SignUp Routing
router
  .route("/signup")
  .get(userscontrollers.getSignUpPage)
  .post(userscontrollers.postSignUpRoute);

// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return err;
    } else {
      req.flash("success", "User Logged out successfully!!");
      res.redirect("/login");
    }
  });
});

//Dashboard Routing
router.route("/dashboard").get(userscontrollers.getDashboardPage);

router
  .route("/donate/:id")
  .get(userscontrollers.getModalPage)
  .post(userscontrollers.payment);

router.route("/trasactions/:id").get(userscontrollers.transactionPage);

module.exports = router;
