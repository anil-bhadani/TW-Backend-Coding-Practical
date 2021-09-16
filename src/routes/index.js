/* eslint-disable import/extensions */
/* eslint-disable node/file-extension-in-import */
import express from 'express'

// API Router
import rideRoute from './rides.js'

const router = express.Router()

router.use('/ride', rideRoute)

export default router
