const Fp = require('fastify-plugin')
const { productRoutes } = require('./product')
const { userRoutes } = require('./user')

async function routes(fastify, options, next) {
    fastify.register(productRoutes, (prefix = '/products'))
    fastify.register(userRoutes, (prefix = '/user'))

    next()
}

module.exports = Fp(routes)
