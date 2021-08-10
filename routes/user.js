async function routes(fastify, options) {
    fastify.get('/user', (req, reply) => {
        reply.send({ message: 'Hello this is the user' })
    })
}

module.exports.userRoutes = routes
