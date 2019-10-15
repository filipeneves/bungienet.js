const Group = function Group(bungie) {
    this.bungie = bungie
}

Group.prototype.getAvailableAvatars = function getAvailableAvatars() {
    return this.bungie.get('/GroupV2/GetAvailableAvatars/')
}

Group.prototype.getAvailableThemes = function getAvailableThemes() {
    return this.bungie.get('/GroupV2/GetAvailableThemes/')
}

Group.prototype.getGroup = function getGroup({ groupId }) {
    return this.bungie.get(`/GroupV2/${groupId}/`)
}

Group.prototype.getGroupByName = function getGroupByName({ name, groupType }) {
    return this.bungie.get(`/GroupV2/Name/${name}/${groupType}`)
}

Group.prototype.getGroupOptionalConversations = function getGroupOptionalConversations({ groupId }) {
    return this.bungie.get(`/GroupV2/${groupId}/OptionalConversations`)
}

Group.prototype.getMembersOfGroup = function getMembersOfGroup({ groupId, currentPage = 1 }) {
    return this.bungie.get(`/GroupV2/${groupId}/Members?currentpage=${currentPage}`)
}

Group.prototype.getAdminsAndFounderOfGroup = function getAdminsAndFounderOfGroup({ groupId, currentPage = 1 }) {
    return this.bungie.get(`/GroupV2/${groupId}/AdminsAndFounder?currentpage=${currentPage}`)
}

Group.prototype.getBannedMembersOfGroup = function getBannedMembersOfGroup({ groupId, currentPage = 1 }) {
    return this.bungie.get(`/GroupV2/${groupId}/Banned?currentpage=${currentPage}`)
}

module.exports = Group