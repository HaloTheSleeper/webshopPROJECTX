const mongoose = require('mongoose')

const orderData = mongoose.Schema({
    orderRef: String,
    exists: {type: Boolean, default: true},
    orderPassword: String,
    uploadPassword: String,
    ready: {type: Boolean, default: false},
    picturesNeeded: [{}], //ilma bracketiteta lihtalt "Array" vist parem
    emailToCreatorSent: {type: Boolean, default: false}
})

module.exports = mongoose.model('OrderData', orderData)