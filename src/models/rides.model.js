import mongoose from 'mongoose'

const { Schema, Types } = mongoose

// TASK-004 - Define rides model
const schema = new Schema(
    {
        start: {
            type: Object,
        },
        end: {
            type: Object,
        },
        driver: {
            type: Types.ObjectId,
        },
        customers: [
            {
                type: Types.ObjectId,
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

export default mongoose.model('rides', schema, 'rides')
