const express = require('express')
const router = express.Router()

const Product = require("../model/product");

router.get('', function(req, res){
    Product.find().then(
        (data) => {
            res.json(data);
            // console.log('respond-list');
        })
})

router.get('/:productId', function(req, res){
    const productId = req.params.productId
    Product.findById(productId).then(
            (data) => {
                res.json(data)
                // console.log('respond-by-id');
        })
        .catch(
            (err) => {console.log(err);
            res.status(422).json( {'errors': [ {'title': 'Product error', detail: 'not found'} ] } )}
        );
})

module.exports = router