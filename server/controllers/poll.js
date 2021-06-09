const Poll = require("../models/polls");

const createPoll = async (req, res) => {
  const poll = new Poll(req.body);
  try {
    await poll.save();
    res.status(201).send(poll);
  } catch (err) {
    res.status(400).send(err);
  }
};

const votedPolls = async (req, res) => {
  user = req.user;
  if (user.polls.length == 0)
    return res.send({ info: "User hasn't voted on any poll yet.." });
  user.polls.forEach((poll) => {});
};

module.exports({ createPoll, votedPolls });