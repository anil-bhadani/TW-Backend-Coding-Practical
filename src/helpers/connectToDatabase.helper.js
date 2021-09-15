import mongoose from 'mongoose'

export const connectToDatabase = () => {
    // TASK-002 Connect to Database.
    mongoose
        .connect('mongodb://' + 'localhost' + ':' + '27017' + '/' + 'gorides', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        .then(() => console.log('Mongo Connected'))
        .catch(() => console.log('Mongo connection Failed'))
}
