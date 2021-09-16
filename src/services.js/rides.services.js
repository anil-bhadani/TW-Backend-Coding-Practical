import mongoose from 'mongoose'
import Ride from '../models/rides.model.js'
import { create, update } from '../helpers/service.helper.js'
const { Types } = mongoose

export const getAllRides = async ({ page, limit }) => {
    try {
        const pipeline = [
            {
                $lookup: {
                    from: 'drivers',
                    localField: 'driver',
                    foreignField: '_id',
                    as: 'driver',
                },
            },
            {
                $unwind: {
                    path: '$driver',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $lookup: {
                    from: 'customers',
                    localField: 'customers',
                    foreignField: '_id',
                    as: 'customers',
                },
            },
            {
                $project: {
                    'driver.createdAt': 0,
                    'driver.updatedAt': 0,
                    'driver.__v': 0,
                    'customers.createdAt': 0,
                    'customers.updatedAt': 0,
                    'customers.__v': 0,
                    __v: 0,
                },
            },
            {
                $skip: (page - 1) * limit || 0,
            },
        ]
        if (limit > 0) {
            pipeline.push({
                $limit: Number(limit) || 0,
            })
        }

        const rides = await Ride.aggregate(pipeline)

        return !rides ? false : rides
    } catch (err) {
        return false
    }
}

export const createRide = async (data) => {
    try {
        const ride = await create(Ride, data)

        return !ride ? false : ride
    } catch (err) {
        return false
    }
}

export const updateRideData = async (data) => {
    try {
        const ride = await update(Ride, { _id: data.ride }, data)

        return !ride ? false : true
    } catch (err) {
        return false
    }
}

export const getRideData = async (id) => {
    try {
        const pipeline = [
            {
                $match: {
                    _id: Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    from: 'drivers',
                    localField: 'driver',
                    foreignField: '_id',
                    as: 'driver',
                },
            },
            {
                $unwind: {
                    path: '$driver',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $lookup: {
                    from: 'customers',
                    localField: 'customers',
                    foreignField: '_id',
                    as: 'customers',
                },
            },
            {
                $project: {
                    'driver.createdAt': 0,
                    'driver.updatedAt': 0,
                    'driver.__v': 0,
                    'customers.createdAt': 0,
                    'customers.updatedAt': 0,
                    'customers.__v': 0,
                    __v: 0,
                },
            },
        ]

        const ride = await Ride.aggregate(pipeline)

        return !ride ? false : ride
    } catch (err) {
        return false
    }
}
