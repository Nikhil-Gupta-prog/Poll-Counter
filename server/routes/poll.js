const { Router } = require("express");

const { createPoll, votedPolls } = require("../controllers/poll");
const auth = require("../Middlewares/Authenticate");

router = Router();

router.post(
  "/poll",
  (req, res) => {
    res.status(401).send({
      Fatal_Error: "Internal Endpoint, Pls Refrain from accessing it",
    });
  },
  createPoll
);

router.get("/poll/voted", auth, votedPolls);

module.exports = router;
