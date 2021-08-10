const Fp = require('fastify-plugin')
const { fetchProducts } = require('../controllers/product')

async function routes(fastify, options, next) {
    fastify.get('/products', fetchProducts)
    next()
}

module.exports.productRoutes = Fp(routes)
