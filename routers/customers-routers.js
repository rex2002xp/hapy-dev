'use strict'

const controllers = require('../controllers/customers-controller')
const Joi = require('@hapi/joi')

const validations = {
  customerCreate: Joi.object({
    userName: Joi.string().required().min(5),
    email: Joi.string().email().required(),
    fullName: Joi.string().required().min(10)
  })
}

module.exports = [
  {
    method: 'GET',
    path: '/api/customers',
    handler: controllers.getUsers
  },
  {
    method: 'POST',
    path: '/api/customer',
    options: {
      validate: {
        payload: validations.customerCreate
      }
    },
    handler: (req, h) => {
      return req.payload
    }
  }
]
