import mongoose from 'mongoose'

const { Schema } = mongoose

// TASK-004 - Define rides model
const schema = new Schema(
    {
        name: String,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('customers', schema, 'customers')
