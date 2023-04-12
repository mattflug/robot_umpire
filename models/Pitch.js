const { Schema, model } = require("mongoose");

// Schema to create Pitch model
const pitchSchema = new Schema({
  pitch_count: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  batter: {
    type: Number,
    unique: true,
    required: true,
    trimmed: true,
  },
  pitcher: {
    type: Number,
    unique: true,
    required: true,
    trimmed: true,
  },
  pitch_location: {
    type: Number,
    unique: true,
    required: true,
    trimmed: true,
  },
  pitch_speed: {
    type: Number,
    unique: true,
    required: true,
    trimmed: true,
  },
  pitch_type: {
    type: Number,
    unique: true,
    required: true,
    trimmed: true,
  },
});

const Pitch = model("Pitch", pitchSchema);

module.exports = Pitch;
