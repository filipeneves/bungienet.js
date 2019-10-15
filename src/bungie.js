/**
 * @file Exports for BungieNet.js
 * @module src/bungie
 * @requires axios
 * @requires src/users
 * @requires src/group
 */
const axios = require('axios')
const Users = require('./users')
const Group = require('./group')

/**
 * BungieNet.js Constructor
 * 
 * @constructor
 * @param {String} key The API Key from Bungie.net
 * @param {Object} instance An axios compatible instance configuration
 */
const Bungie = function Bungie(key, instance) {

    this.key = key
    this.axios = axios.create(instance)

    /**
     * Users API methods
     * 
     * @member {Object}
     * @see {@link src/users}
     */
    this.users = new Users(this)

    /**
     * Group API methods
     * 
     * @member {Object}
     * @see {@link src/group}
     */
    this.group = new Group(this)

}

/**
 * Performs a single GET request to the Bungie.net API
 * 
 * @param {String} path The pathname of the API resource
 */
Bungie.prototype.get = function get(path) {
    return this.axios.get(this.buildURL(path), {
        headers: {
            'X-API-Key': this.key,
            'User-Agent': `Node.js/${process.versions.node} DestinyAPI.js/1.0`
        }
    })
}

/**
 * Performs a single POST request to the Bungie.net API
 * 
 * @param {String} path The pathname of the API resource
 */
Bungie.prototype.post = function post(path, data) {
    return this.axios({
        method: 'post',
        url: this.buildURL(path),
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': this.key,
            'User-Agent': `Node.js/${process.versions.node} DestinyAPI.js/1.0`
        },
        data: args
    })
}

/**
 * Builds the endpoint for the Bungie.net API resource
 * 
 * @param {String} path The pathname of the API resource
 */
Bungie.prototype.buildURL = function buildURL(path) {
    const baseURL = 'https://www.bungie.net/Platform'
    return `${baseURL}${encodeURI(path)}`
}

/**
 * Perform multiple requests to the Bungie.net API
 * 
 * @param {Array} requests A list of Bungie.net GET requests
 * @return {Promise} A then-able Promise reference
 */
Bungie.prototype.all = function all(requets) {
    return this.axios.all(requets)
}

module.exports = Bungie