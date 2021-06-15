const { verify } = require("jsonwebtoken");

const User = require("../models/user.js");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = verify(token, process.env.SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) throw new Error();
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({
      Error:
        "Authenticate again, Either the Token Expired or something went wrong",
    });
  }
};

module.exports = auth;
