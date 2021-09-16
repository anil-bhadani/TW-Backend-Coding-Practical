/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
/* eslint-disable node/file-extension-in-import */
/* eslint-disable import/extensions */
import express from 'express'
import 'dotenv/config'
import { connectToDatabase } from './helpers/connectToDatabase.helper.js'
import { agendaCron } from './helpers/agenda.helper.js'
import index from './routes/index.js'

// TASK-003 Move PORT to environment file
const { PORT } = process.env

export const app = express()

export async function startServer() {
    await connectToDatabase()

    await agendaCron()

    app.use(express.json())

    app.use('/', index)

    app.listen(PORT, async () => {
        console.log(`Listening on port ${PORT}`)

        return Promise.resolve()
    })
}
