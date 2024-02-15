const router = require('express').Router();
const Product = require('../models/Producto.js'); 

/* Esquema de Validación */
const Joi = require('@hapi/joi');

const schemaProds = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    category: Joi.string().min(3).max(255).required(),
    stock: Joi.number().min(1).required(),
    price: Joi.number().min(1).required(),
    img: Joi.string()
});

router.post('/addProd', async (req, res) => {

    const { error } = schemaProds.validate(req.body)

    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }

    const isProdExist = await Product.findOne({ name: req.body.name });
    if (isProdExist) {
        return res.status(400).json(
            { error: 'El producto ya existe' }
        )
    }

    const prod = new Product({
        name: req.body.name,
        category: req.body.category,
        stock: req.body.stock,
        price: req.body.price,
        img: req.body.img
    });

    try {
        const savedProd = await prod.save();
        res.json({
            error: null,
            data: savedProd
        })
    }
    catch (error) {
        res.status(400).json({ error })
    }

});

module.exports = router;