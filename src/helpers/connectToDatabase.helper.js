/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
import mongoose from 'mongoose'

// eslint-disable-next-line import/prefer-default-export
export const connectToDatabase = () => {
    // TASK-002 Connect to Database.
    mongoose
        .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/'${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        .then(() => console.log('Mongo Connected'))
        .catch(() => console.log('Mongo connection Failed'))
}
