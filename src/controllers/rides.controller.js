// eslint-disable-next-line import/extensions
/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable node/file-extension-in-import */
import Ride from '../models/rides.model.js'
import Driver from '../models/driver.model.js'
import Customer from '../models/customer.model.js'
import { resError, resSuccess } from '../helpers/response.helper.js'
import catchAsyncHelper from '../helpers/catchAsync.helper.js'
import {
    GET_ALL_RIDES_SUC,
    GET_ALL_RIDES_ERR,
    DUMMY_SUCC,
    CREATE_RIDE_SUCC,
    CREATE_RIDE_ERR,
    UPDATE_RIDE_ERR,
    UPDATE_RIDE_SUCC,
    GET_RIDE_SUC,
    GET_RIDE_ERR,
} from '../common/msg.js'
import { create } from '../helpers/service.helper.js'
import { getAllRides, createRide, updateRideData, getRideData } from '../services.js/rides.services.js'

/**
 * Method to add dummy data
 * @param {Request} req
 * @param {Response} res
 * @returns nothing
 */

const drivers = [
    {
        name: 'Rahim',
        vehicleNumber: 'GJ01BS1234',
        vehicleType: 'CAR',
    },
    {
        name: 'Raju',
        vehicleNumber: 'GJ03BS1234',
        vehicleType: 'CAR',
    },
    {
        name: 'Kahan',
        vehicleNumber: 'GJ03BS1234',
        vehicleType: 'BIKE',
    },
    {
        name: 'Chiman',
        vehicleNumber: 'GJ04BS1234',
        vehicleType: 'BIKE',
    },
]

const rides = [
    {
        start: {
            lat: 10.4185,
            long: 122.45854,
        },
        end: {
            lat: 10.4185,
            long: 122.45854,
        },
        driver: '6142c2a1a98e245fb0e03c41',
        customers: ['6142c2a1a98e245fb0e03c46', '6142c2a1a98e245fb0e03c45'],
    },
    {
        start: {
            lat: 11.4185,
            long: 122.45854,
        },
        end: {
            lat: 12.4185,
            long: 122.45854,
        },
        driver: '6142c2a1a98e245fb0e03c42',
        customers: ['6142c2a1a98e245fb0e03c46', '6142c2a1a98e245fb0e03c45'],
    },
    {
        start: {
            lat: 13.4185,
            long: 122.45854,
        },
        end: {
            lat: 34.4185,
            long: 122.45854,
        },
        driver: '6142c2a1a98e245fb0e03c43',
        customers: ['6142c2a1a98e245fb0e03c46', '6142c2a1a98e245fb0e03c45'],
    },
]

const customers = [
    {
        name: 'Manoj',
    },
    {
        name: 'John',
    },
    {
        name: 'Chintan',
    },
    {
        name: 'Keyur',
    },
]

export const addDummyData = catchAsyncHelper(async (req, res) => {
    drivers.forEach(async (e) => {
        const driverDummyData = await create(Driver, e)
        if (driverDummyData) console.log(driverDummyData)
    })
    customers.forEach(async (e) => {
        const customersDummyData = await create(Customer, e)
        if (customersDummyData) console.log(customersDummyData)
    })
    rides.forEach(async (e) => {
        const rideDummyData = await create(Ride, e)
        if (rideDummyData) console.log(rideDummyData)
    })
    return resSuccess(res, DUMMY_SUCC, 200)
})

/**
 * Method to get all rides
 * @param {Request} req
 * @param {Response} res
 * @returns rides
 */

export const getRides = catchAsyncHelper(async (req, res) => {
    const { page, limit } = req.query

    const response = await getAllRides({ page, limit })

    return !response ? resError(res, GET_ALL_RIDES_ERR, 400) : resSuccess(res, GET_ALL_RIDES_SUC, 200, response)
})

/**
 * Method to create ride
 * @param {Request} req
 * @param {Response} res
 * @returns ride
 */

export const addRide = catchAsyncHelper(async (req, res) => {
    const response = await createRide(req.body)

    return !response ? resError(res, CREATE_RIDE_ERR, 400) : resSuccess(res, CREATE_RIDE_SUCC, 200, response)
})

/**
 * Method to update ride
 * @param {Request} req
 * @param {Response} res
 * @returns ride
 */

export const updateRide = catchAsyncHelper(async (req, res) => {
    const response = await updateRideData(req.body)

    return !response ? resError(res, UPDATE_RIDE_ERR, 400) : resSuccess(res, UPDATE_RIDE_SUCC, 200, response)
})

/**
 * Method to get ride
 * @param {Request} req
 * @param {Response} res
 * @returns ride
 */

export const getRide = catchAsyncHelper(async (req, res) => {
    const response = await getRideData(req.query.ride)

    return !response ? resError(res, GET_RIDE_ERR, 400) : resSuccess(res, GET_RIDE_SUC, 200, response)
})
