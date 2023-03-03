const mongoose = require('mongoose')

const adminBoardUser = mongoose.Schema({
    userName: String,
    accessAllowed: {type: Boolean, default: true},
    logInPassword: String,
    identifierCookie: String,
    timeCookieWasCreated: Date
})

module.exports = mongoose.model('adminBoardUser', adminBoardUser)