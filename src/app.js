/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
import express from 'express'
import 'dotenv/config'
import { connectToDatabase } from './helpers/connectToDatabase.helper'
import index from './routes/index'

// TASK-003 Move PORT to environment file
const { PORT } = process.env

export const app = express()

export async function startServer() {
    await connectToDatabase()

    app.use(express.json())

    app.use('/', index)

    app.listen(PORT, async () => {
        console.log(`Listening on port ${PORT}`)

        return Promise.resolve()
    })
}
