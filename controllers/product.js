const { product } = require('../resources/model/Product')

async function fetchProducts(req, reply, next) {
    const products = await product.find({}).sort({ created: 'desc' })
    reply.send({ products })

    next()
}

module.exports = {
    fetchProducts,
}
