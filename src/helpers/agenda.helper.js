/* eslint-disable import/prefer-default-export */
/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
/* eslint-disable node/file-extension-in-import */
/* eslint-disable import/extensions */
import { Agenda } from 'agenda/es.js'
import { deleteRidesAfterOneDay } from '../services.js/cron.services.js'

const mongoConnectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/'${process.env.DB_NAME}`
const agenda = new Agenda({ db: { address: mongoConnectionString } })

export const agendaCron = async () => {
    agenda.define('delete old rides', async () => {
        console.log(`Running on every ${process.env.AGENDA_TIME}`)
        await deleteRidesAfterOneDay()
    })

    await agenda.start()
    await agenda.every(process.env.AGENDA_TIME, 'delete old rides')
}
