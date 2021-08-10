const Fp = require('fastify-plugin')
const mongoose = require('mongoose')
const config = require('config')

async function dbConnect(fastify, options) {
    const mongodbUrl = config.get('databases.mongodb.uri')
    mongoose.connect(
        mongodbUrl,
        {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                fastify.log.error(err)
            }
            fastify.log.info(`Mongodb is running...`)
        }
    )
}

module.exports.mongoConnect = Fp(dbConnect)
