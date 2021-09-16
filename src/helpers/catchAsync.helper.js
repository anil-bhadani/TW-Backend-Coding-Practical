/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable node/file-extension-in-import */
import { resError } from './response.helper.js'
import { SOMETHING_WENT_WRONG } from '../common/msg.js'

export default (fn) => {
    return (req, res) => {
        fn(req, res).catch((err) => {
            console.log('error :: ', err)
            return resError(res, SOMETHING_WENT_WRONG, 500)
        })
    }
}
