var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const auth = require("../Middlewares/Authenticate");

//Sign Up Route
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("lastname", "lastname is req and atleast 3 char").isLength({
      min: 3,
    }),
    check("phone", "number is required").toInt(),
    check("email", "email is required").isEmail(),
    check(
      "password",
      "password should be minium 4 char and max 9 char"
    ).isLength({ min: 4, max: 9 }),
  ],
  signup
);

// SignIn Route

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({
      min: 4,
      max: 9,
    }),
  ],
  signin
);

// SignOut
router.get("/signout", auth, signout);

module.exports = router;
