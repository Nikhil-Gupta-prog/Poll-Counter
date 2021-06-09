const { model, Schema } = require("mongoose");

pollSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  shortName: {
    type: String,
    defaullt: "Poll",
  },
  choices: [
    {
      index: Number,
      choice: {
        type: String,
        required: true,
      },
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],
});

Poll = model("Poll", pollSchema);

module.exports = Poll;
