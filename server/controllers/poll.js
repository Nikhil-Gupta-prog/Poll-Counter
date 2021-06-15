const Poll = require("../models/polls");


module.exports.createPoll = async (req, res) => {
  const poll = new Poll(req.body);
  try {
    await poll.save();
    res.status(201).send(poll);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.pollId = async (req, res) =>{
  
  res.json(req.body);
}



module.exports.votedPolls = async (req, res) => {
  user = req.user;
  if (user.polls.length == 0)
    return res.send({ info: "User hasn't voted on any poll yet.." });
  user.polls.forEach((poll) => {
    
  });
};

module.exports.chartPoll = async (req, res, next) => {
  req.user.poll.push(req.body);
  req.user.poll.save((err, data) => {
    if (err) {
      return next(err);
    }
    res.status(201).json(data);
  });
}

