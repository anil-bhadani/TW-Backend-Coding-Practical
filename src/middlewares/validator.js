import { required, isNumber, isGreaterThanZero } from '../common/validators.js'
import { resError } from '../helpers/response.helper.js'
import { PAGE_REQUIRED, LIMIT_REQUIRED, PARA_SHOULD_NUMBER, PARA_SHOULD_POSITIVE } from '../common/msg.js'

export const getAllRidesValidator = async (req, res, next) => {
    if (await required(req.query.page)) return resError(res, PAGE_REQUIRED, 422)
    if (await required(req.query.limit)) return resError(res, LIMIT_REQUIRED, 422)
    if (await isNumber(req.query.page)) return resError(res, PARA_SHOULD_NUMBER, 422)
    if (await isNumber(req.query.limit)) return resError(res, PARA_SHOULD_NUMBER, 422)
    // if (await isGreaterThanZero(req.query.limit)) return resError(res, PARA_SHOULD_POSITIVE, 422)
    // if (await isGreaterThanZero(req.query.page)) return resError(res, PARA_SHOULD_POSITIVE, 422)

    next()
}
