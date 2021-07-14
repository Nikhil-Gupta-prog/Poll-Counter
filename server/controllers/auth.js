const User = require("../models/user");
const {sendMail} = require("../email");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");


// SignUp
exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User({ ...req.body, polls: [] });
  user.save( async (err, user) => {
    if(user)
      await sendMail(req.body.name, req.body.email);

    if (err) {
      return res.status(400).json({
        err: `NOT able to save user in DB  : ${err}`,
      });
    }
    res.json({
      name: user.name,
      lastname: user.lastname,
      phone: user.phone,
      email: user.email,
      id: user._id,
    });
  });
};

// Sign In
exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match",
      });
    }

    //create token
    const token = jwt.sign(
      { _id: user._id },
      process.env.SECRET || "littlesecret"
    );
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999, sameSite:'None' });

    user.tokens = user.tokens.concat({ token });

    user.save().catch((err) => res.status(500).send(err));

    //send response to front end
    const { _id, name, lastname, email, phone } = user;
    return res.json({ token, user: { _id, name, lastname, email, phone } });
  });
};

// SignOut
exports.signout = (req, res) => {
  req.user.tokens = req.user.tokens.filter(
    (token) => token.token !== req.token
  );
  req.user.save().catch((err) => res.status(500).send(err));
  res.clearCookie("token");
  res.json({
    message: "User signout successfully",
  });
};
