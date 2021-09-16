/* eslint-disable import/extensions */
/* eslint-disable node/file-extension-in-import */
import { SUCCESS, ERROR } from '../common/msg.js'

// Send success response
export const resSuccess = async (res, message, statusCode = 200, data = null) => {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json',
    })
    res.write(
        JSON.stringify({
            statusCode,
            data,
            message,
            statusMessage: SUCCESS,
        })
    )
    res.end()
}
// Send error response
export const resError = async (res, message, statusCode = 500, data = null) => {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json',
    })
    res.write(
        JSON.stringify({
            statusCode,
            data,
            message,
            statusMessage: ERROR,
        })
    )
    res.end()
}
