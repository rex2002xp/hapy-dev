'use strict'

const Fake = require('faker')

async function getCustomers () {
  const data = []
  for (let item = 0; item <= 1700; item++) {
    data.push({
      id: Fake.random.uuid(),
      username: Fake.internet.userName().toLowerCase(),
      email: Fake.internet.email().toLowerCase(),
      fullName: Fake.fake('{{name.lastName}}, {{name.firstName}}'),
      status: Fake.random.arrayElement(['A', 'D', 'L'])
    })
  }
  return data
}

module.exports = {
  getCustomers
}
