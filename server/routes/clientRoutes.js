const express = require('express')
const clientController = require('../controllers/clientController')

const router = express.Router()

router
  .route('/:id')
  .get(clientController.getClient)
  .patch(clientController.updateClient)
  .delete(clientController.deleteClient)

router
  .route('/')
  .get(clientController.getClients)
  .post(clientController.createClient)

module.exports = router
