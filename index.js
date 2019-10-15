const Bungie = require('./src/bungie')

const config = function config(key, instance = {}) {
    return new Bungie(key, instance)
}

exports.config = config