/* eslint-disable node/prefer-global/console */
/* eslint-disable no-console */
import { resError } from './response.helper'
import { SOMETHING_WENT_WRONG } from '../common/msg'

export default (fn) => {
    return (req, res) => {
        fn(req, res).catch((err) => {
            console.log('error :: ', err)
            return resError(res, SOMETHING_WENT_WRONG, 500)
        })
    }
}
