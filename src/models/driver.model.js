import mongoose from 'mongoose'

const { Schema } = mongoose

// TASK-004 - Define rides model
const schema = new Schema(
    {
        name: String,
        vehicleNumber: String,
        vehicleType: {
            type: String,
            enum: ['CAR', 'BIKE'],
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('drivers', schema, 'drivers')
