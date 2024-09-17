const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductShema = new Schema({

    name: { type: String, requeired: true, max:[60, '最大60文字までです']},
    price: Number,
    description: String,
    coverImage: String,
    heading:[]
});

module.exports = mongoose.model('Product', ProductShema)