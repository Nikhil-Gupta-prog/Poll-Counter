const { Router } = require("express");

const Poll = require("../controllers/poll");
const auth = require("../Middlewares/Authenticate");

const router = Router();

router.post(
  "/votes",
  (__, res) => {
    res.status(401).send({
      Error: "Internal Endpoint, Please Refrain from accessing it",
    });
  },
  Poll.createPoll
);

router.get("/votes", auth, Poll.votedPolls);
router.patch("/votes", auth, Poll.vote);
router.get("/show", auth, Poll.showPolls);


module.exports = router;
