const mongoose = require('mongoose');
//Schema constructor
const Schema = mongoose.Schema;

//New Schema
const prodSchema = new Schema({
    prod_name: {
        type: String,
        required: true
    },
    prod_id: {
        type: String,
        required: true
    },
    prod_desc: {
        type: String
    }
}, {timestamps: true});

//Model
const product = mongoose.model('Product', prodSchema);

//Exporting model
module.exports = product;

