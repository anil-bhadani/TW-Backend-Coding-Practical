import Ride from '../models/rides.model.js'

export const getAllRides = async ({ page, limit }) => {
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
}
