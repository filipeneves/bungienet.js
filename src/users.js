const Users = function Users(bungie) {
    this.bungie = bungie
}

Users.prototype.getUserById = function getUserById({ userId: id }) {
    return this.bungie.get(`/User/GetBungieNetUserById/${id}/`)
}

Users.prototype.searchUsers = function searchUsers({ query, ...args })
{
    return this.bungie.get(`/User/SearchUsers?q=${query}`, args)
}

Users.prototype.getThemes = function getThemes() {
    return this.bungie.get('/User/GetAvailableThemes')
}

Users.prototype.getMembershipDataById = function getMembershipDataById({ membershipId, membershipType }) {
    return this.bungie.get(`/User/GetMembershipsById/${membershipId}/${membershipType}`)
}

module.exports = Users