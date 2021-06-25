const Poll = require("../models/polls");
const User = require("../models/user");



const getVotedPollsId = (user) => {
  if(user.polls.length == 0)
    return 0
  const pollIds = []
  for(let i=0;i<user.polls.length;i++)
    pollIds.push(String(user.polls[i].poll))
  return pollIds
} 


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
  const pollIds = getVotedPollsId(req.user)
  if (!pollIds)
    return res.send({ info: "User hasn't voted on any poll yet." });
  try {
    const votedPolls = [] 
    for(let i=0; i<pollIds.length; i++)
     {
      const { title, choices } = await Poll.findById(pollIds[i]);
      const choice = choices[req.user.polls[i].choice - 1].choice;
      votedPolls.push({ title, choice });
    }
    res.send(votedPolls);
  } catch (err) {
    res.status(500).send({ Error: "Something Went Wrong" });
  }
};

const vote = async (req, res) => {
 try {
 const id = req.body._id
 const index = req.body.index
 const pollIds = getVotedPollsId(req.user)
 if(pollIds && pollIds.includes(String(id))) throw new Error("You alerady voted on that poll!!")
 const poll = await Poll.findById(id)
 if(!poll) throw new Error("No Such Poll Exist, Or it might be deleted by the Admin")
 poll.choices[index-1].votes++
 req.user.polls.push({poll :id, choice : index})
 const updated = await poll.save()
 await req.user.save()
 res.send(updated.choices)
 }
 catch(err) {
   res.status(400).send({Error : `${err.message}`})
 }
}

const showPolls = async (req, res) => {
try {
  var polls = await Poll.find({})
  var pollIds = getVotedPollsId(req.user)
  if(pollIds) 
    polls = polls.filter( (poll) => !pollIds.includes(String(poll._id)))
  res.send(polls)
}
catch(err) {
  res.status(500).send({Error : `${err}`})
}
}


module.exports = { createPoll, votedPolls, vote, showPolls };
