import express from 'express'
import { getRides, addDummyData, addRide, updateRide, getRide } from '../controllers/rides.controller'
import {
    getAllRidesValidator,
    createRideValidator,
    updateRideValidator,
    getRideValidator,
} from '../middlewares/validator'

const router = express.Router()

router.get('/dummy', addDummyData)
router.get('/get-all-rides', getAllRidesValidator, getRides)
router.post('/register', createRideValidator, addRide)
router.put('/update', updateRideValidator, updateRide)
router.get('/get-ride', getRideValidator, getRide)

export default router
