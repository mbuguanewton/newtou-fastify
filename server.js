const routes = require('./routes')
const { mongoConnect } = require('./resources/mongodb')
const { Logger } = require('./utils/logger')
const fastify = require('fastify')({ logger: Logger })

// function to start the server
async function start() {
    try {
        await fastify.register(mongoConnect)
        await fastify.register(routes)
        await fastify.listen(3000)
    } catch (error) {
        fastify.logger.error(error)
        process.exit(1)
    }
}

start()
