const Player = require('../models/Player')

exports.showPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 })
    return res.status(200).json({
      message: 'Players fetched successfully',
      players
    })
  } catch (err) {
    console.log('err', err)
    return res.status(400).json({
      err: 'Not able to find player in DB',
      message: err.message
    })
  }
}
exports.createPlayer = async (req, res) => {
  console.log(req.body)
  const { ID, name, country_code, score } = req.body
  const newPlayer = new Player({
    ID,
    name,
    country_code,
    score
  })
  try {
    const player = await newPlayer.save()
    return res.status(200).json({
      ID: player.ID,
      name: player.name,
      country_code: player.country_code,
      score: player.score
    })
  } catch (err) {
    console.log('err', err)
    return res.status(400).json({
      err: 'Not able to save player in DB',
      error: err.message
    })
  }
}

exports.deletePlayer = async (req, res) => {
  const { id } = req.params
  try {
    const player = await Player.findOneAndDelete({ ID: id })
    return res.status(200).json({
      message: 'Player deleted successfully',
      player
    })
  } catch (err) {
    console.log('err', err)
    return res.status(400).json({
      err: 'Not able to delete player in DB',
      error: err.message
    })
  }
}
exports.updatePlayer = async (req, res) => {
  const { id } = req.params
  const { score, name } = req.body
  try {
    const player = await Player.findOneAndUpdate({ ID: id }, { score, name })
    if (player === null) throw new Error('Player not found')
    if (name === '') throw new Error('Name cannot be empty')
    return res.status(200).json({
      message: 'Player updated successfully',
      player
    })
  } catch (err) {
    return res.status(400).json({
      err: 'Not able to update player in DB',
      error: err.message
    })
  }
}
exports.showRandomPlayer = async (req, res) => {
  // Get the count of all Players
  try {
    const players = await Player.find()
    const count = players.length
    // select a random player
    var random = Math.floor(Math.random() * count)
    const randPlayer = players[random]
    return res.status(200).json({
      message: 'Players fetched successfully',
      randPlayer
    })
  } catch (err) {
    return res.status(400).json({
      err: 'Not able to find player in DB',
      message: err.message
    })
  }
}

exports.showPlayerByRank = async (req, res) => {
  const { val } = req.params
  try {
    const players = await Player.find().sort({ score: -1 })
    if(players.length < val || val <= 0) throw new Error('Rank not found')
    const player = players[val - 1]
    return res.status(200).json({
      message: `Player at rank ${val} fetched successfully`,
      player
    })
  } catch (err) {
    return res.status(400).json({
      err: 'Not able to find player in DB',
      message: err.message
    })
  }
}
