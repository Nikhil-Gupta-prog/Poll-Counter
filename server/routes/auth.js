var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");
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
      "password should be minimum 4 char long"
    ).isLength({ min: 4,}),
  ],
  signup
);

// SignIn Route

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required and should be at least 4 char long").isLength({
      min: 4,
    }),
  ],
  signin
);

// SignOut
router.get("/signout", auth, signout);

module.exports = router;
