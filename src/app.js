import express from 'express'
import 'dotenv/config'
import { connectToDatabase } from './helpers/connectToDatabase.helper.js'

// TASK-003 Move PORT to environment file
const PORT = process.env.PORT

export const app = express()

export async function startServer() {
    await connectToDatabase()

    app.get('/health', (req, res) => {
        // TASK-001 Fix health route. The above console is printing but the response is not sent to client.

        return res.sendStatus(200)
    })

    app.listen(PORT, async () => {
        console.log(`Listening on port ${PORT}`)

        return Promise.resolve()
    })
}
