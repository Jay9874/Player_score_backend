require('dotenv').config()
const mongoose = require('mongoose')

const playerSchema = mongoose.Schema(
  {
    ID: {
      type: String,
      required: [true, 'id required'],
      unique: true,
      immutable: true
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxLength: 15,
      minLength: 1,
      upperCase: true
    },
    country_code: {
      type: String,
      required: [true, 'Country code is required'],
      minLength: 2,
      maxLength: 2,
      immutable: true
    },
    score: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

mongoose.Schema.Types.String.checkRequired(
  v => typeof v === 'string' && v !== ''
)
const Player = mongoose.model('Player', playerSchema)
module.exports = Player
