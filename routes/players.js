// Requiring all the packages
const express = require('express')
const router = express.Router()
const { createPlayer, showPlayers, showPlayerByRank, showRandomPlayer, updatePlayer, deletePlayer } = require('../controller/players')

// Defining the routes

/**
 * @route GET /players
 * @description get all the players
 * @access public
 **/
router.get('', showPlayers)

/**
 * @route GET /players/random
 * @description get random player
 * @access public
 **/
router.get('/random', showRandomPlayer)

/**
 * @route GET /players/rank/:val
 * @description get player at rank, val
 * @access public
 **/
router.get('/rank/:val', showPlayerByRank)

/**
 * @route POST /players
 * @description create new player
 * @access public
 **/
router.post('', createPlayer)

/**
 * @route PUT /players/:id
 * @description Update player with id
 * @access public
 **/
router.put('/:id', updatePlayer)

/**
 * @route DELETE /players/:id
 * @description delete player with id
 * @access public
 **/
router.delete('/:id', deletePlayer)

module.exports = router
