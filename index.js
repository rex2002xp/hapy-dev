'use strict'

const Hapi = require('@hapi/hapi')
const customerRouters = require('./routers/customers-routers')

const routers = [
  ...customerRouters
]

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  })

  server.route(routers)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
