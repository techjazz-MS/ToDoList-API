const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String,
        required: true
    },
}, {timestamps: true, collection: 'items'});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;