/**
 * @file Exports the Users API methods
 * @module src/users 
 */

/**
 * Users class constructor
 * 
 * @constructor
 * @param {Object} bungie A BungieNet.js instance 
 */
const Users = function Users(bungie) {
    this.bungie = bungie
}

/**
 * Loads a bungienet user by membership id
 * 
 * @param {Object} userId The user ID
 * @return {Promise} A then-able Promise reference
 */
Users.prototype.getUserById = function getUserById({ userId: id }) {
    return this.bungie.get(`/User/GetBungieNetUserById/${id}/`)
}

/**
 * Returns a list of possible users based on the search string
 * 
 * @param {Object} query The search string
 * @return {Promise} A then-able Promise reference
 */
Users.prototype.searchUsers = function searchUsers({ query })
{
    return this.bungie.get(`/User/SearchUsers?q=${query}`)
}

/**
 * Returns a list of all available user themes
 * 
 * @return {Promise} A then-able Promise reference
 */
Users.prototype.getAvailableThemes = function getThemes() {
    return this.bungie.get('/User/GetAvailableThemes')
}

/**
 * Returns a list of possible users based on the search string
 * 
 * @param {Object} membershipId The membership Id of the target user
 * @param {Object} membershipType Type of the supplied membership ID
 * @return {Promise} A then-able Promise reference
 */
Users.prototype.getMembershipDataById = function getMembershipDataById({ membershipId, membershipType }) {
    return this.bungie.get(`/User/GetMembershipsById/${membershipId}/${membershipType}`)
}

module.exports = Users