const express = require('express')
const managerController = require('../controllers/managerController')

const router = express.Router()

router
  .route('/:id')
  .get(managerController.getManager)
  .patch(managerController.updateManager)
  .delete(managerController.deleteManager)

router
  .route('/')
  .get(managerController.getManagers)
  .post(managerController.createManager)

module.exports = router
