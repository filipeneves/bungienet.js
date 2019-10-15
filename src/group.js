/**
 * @file Exports the group API methods
 * @module src/group 
 */

 /**
  * Group class constructor
  * 
  * @constructor
  * @param {Object} bungie A bungieNet.js instance
  */
const Group = function Group(bungie) {
    this.bungie = bungie
}

/**
 * Returns a list of all available group avatars for the signed-in user
 * 
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getAvailableAvatars = function getAvailableAvatars() {
    return this.bungie.get('/GroupV2/GetAvailableAvatars/')
}

/**
 * Returns a list of all available group themes
 * 
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getAvailableThemes = function getAvailableThemes() {
    return this.bungie.get('/GroupV2/GetAvailableThemes/')
}

/**
 * Get information about a specific group of the given ID.
 * 
 * @param {Object} groupId Requested group's id.
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getGroup = function getGroup({ groupId }) {
    return this.bungie.get(`/GroupV2/${groupId}/`)
}

/**
 * Get information about a specific group with the given name and type.
 * 
 * @param {Object} name Exact name of the group to find.
 * @param {Object} groupType Type of group to find.
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getGroupByName = function getGroupByName({ name, groupType }) {
    return this.bungie.get(`/GroupV2/Name/${name}/${groupType}`)
}

/**
 * Gets a list of available optional conversation channels and their settings.
 * 
 * @param {Object} groupId Requested group's id.
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getGroupOptionalConversations = function getGroupOptionalConversations({ groupId }) {
    return this.bungie.get(`/GroupV2/${groupId}/OptionalConversations`)
}

/**
 * Get the list of members in a given group.
 * 
 * @param {Object} groupId The ID of the group
 * @param {Object} currentPage Page number (starting with 1). Each page has a fixed size of 50 items per page.
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getMembersOfGroup = function getMembersOfGroup({ groupId, currentPage = 1 }) {
    return this.bungie.get(`/GroupV2/${groupId}/Members?currentpage=${currentPage}`)
}

/**
 * Get the list of members in a given group who are of admin level or higher.
 * 
 * @param {Object} groupId The ID of the group
 * @param {Object} currentPage Page number (starting with 1). Each page has a fixed size of 50 items per page.
 * @return {Promise} A then-able Promise reference
 */
Group.prototype.getAdminsAndFounderOfGroup = function getAdminsAndFounderOfGroup({ groupId, currentPage = 1 }) {
    return this.bungie.get(`/GroupV2/${groupId}/AdminsAndFounder?currentpage=${currentPage}`)
}

module.exports = Group