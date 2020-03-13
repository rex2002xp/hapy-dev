'use strict'

const customerDomain = require('../domains/customer-domain')

async function getUsers (req, h) {
  const data = await customerDomain.getCustomers()

  return {
    header: {
      code: 200,
      message: 'Successfully transaction'
    },
    transaction: Date.now(),
    data
  }
}

module.exports = {
  getUsers
}
