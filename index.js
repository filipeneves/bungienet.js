/**
 * @file BungieNet.js
 * @description A promise-based Node.js library for the Bungie.net Platform API
 * @copyright Copyright(c) 2017 Filipe 'Nelen' Neves <me@filipeneves.net>
 * @license MIT
 * @version 1.0.0
 * @module index
 * @requires src/bungie
 */

 /**
  * @typedef {Object} Bungie
  * @prop {Object} group Group API methods
  * @prop {Object} users Users API methods
  * @prop {Function} get Perform a single GET request to Bungie.net API
  * @prop {Function} post Perform a single POST request to Bungie.net API
  * @prop {Function} all Perform multiple requests to the Bungie.net API
  */
const Bungie = require('./src/bungie')

/**
 * Initialize the Bungie.net instance
 * 
 * @param {String} key API Key from Bungie.net
 * @param {Object} instance An axios compatible instance configuration
 */
const config = function config(key, instance = {}) {
    return new Bungie(key, instance)
}

exports.config = config