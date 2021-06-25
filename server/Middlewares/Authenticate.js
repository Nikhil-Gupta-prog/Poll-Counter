const { verify } = require("jsonwebtoken");

const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = verify(token, process.env.SECRET || "littlesecret");
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
        "Authenticate again, Either the Cookies Expired or something went wrong",
    });
  }
};

module.exports = auth;
