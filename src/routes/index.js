import express from 'express'

// API Router
import rideRoute from './rides'

const router = express.Router()

router.use('/ride', rideRoute)

export default router
