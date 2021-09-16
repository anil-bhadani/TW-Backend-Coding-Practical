/* eslint-disable import/prefer-default-export */
/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
/* eslint-disable node/file-extension-in-import */
/* eslint-disable import/extensions */
import moment from 'moment'
import Ride from '../models/rides.model.js'

export const deleteRidesAfterOneDay = async () => {
    let date = Date.now() - 24 * 60 * 60 * 1000

    date = moment(date).format('LLLL')

    const rides = await Ride.aggregate([
        {
            $match: {
                creayedAt: {
                    $lte: new Date(date),
                },
            },
        },
        {
            $project: {
                _id: 1,
            },
        },
    ])

    if (rides.length > 0) {
        rides.forEach(async (element) => {
            const ride = await Ride.findByIdAndDelete(element._id)

            if (ride) {
                console.log(ride)
            }
            return users
        })
    }

    return rides
}
