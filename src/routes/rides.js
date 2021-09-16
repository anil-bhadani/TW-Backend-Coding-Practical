import express from 'express'
import { getRides, addDummyData } from '../controllers/rides.controller.js'
import { getAllRidesValidator } from '../middlewares/validator.js'

const router = express.Router()

router.get('/dummy', addDummyData)
router.get('/get-all-rides', getAllRidesValidator, getRides)

export default router
