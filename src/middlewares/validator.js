/* eslint-disable import/extensions */
/* eslint-disable node/file-extension-in-import */
import {
    required,
    isNumber,
    isGreaterThanZero,
    validID,
    isValidLatitude,
    isValidLongitude,
} from '../common/validators.js'
import { resError } from '../helpers/response.helper.js'
import {
    PAGE_REQUIRED,
    LIMIT_REQUIRED,
    PARA_SHOULD_NUMBER,
    PARA_SHOULD_POSITIVE,
    VALID_ID_REQ,
    VALID_LAT_REQ,
    VALID_LONG_REQ,
    CUST_REQ,
} from '../common/msg.js'

export const getAllRidesValidator = async (req, res, next) => {
    const { page, limit } = req.query
    if (await required(page)) return resError(res, PAGE_REQUIRED, 422)
    if (await required(limit)) return resError(res, LIMIT_REQUIRED, 422)
    if (await isNumber(page)) return resError(res, PARA_SHOULD_NUMBER, 422)
    if (await isNumber(limit)) return resError(res, PARA_SHOULD_NUMBER, 422)
    // if (await isGreaterThanZero(limit)) return resError(res, PARA_SHOULD_POSITIVE, 422)
    if (await isGreaterThanZero(page)) return resError(res, PARA_SHOULD_POSITIVE, 422)

    next()
}

export const createRideValidator = async (req, res, next) => {
    const { start, end, driver, customers } = req.body
    if (await required(driver)) return resError(res, VALID_ID_REQ, 422)
    if (await validID(driver)) return resError(res, VALID_ID_REQ, 422)
    if (await required(start.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await required(start.long)) return resError(res, VALID_LONG_REQ, 422)
    if (await required(end.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await required(end.long)) return resError(res, VALID_LONG_REQ, 422)
    if (await required(customers)) return resError(res, CUST_REQ, 422)
    if (await isValidLatitude(start.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await isValidLongitude(start.long)) return resError(res, VALID_LONG_REQ, 422)
    if (await isValidLatitude(end.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await isValidLongitude(end.long)) return resError(res, VALID_LONG_REQ, 422)

    next()
}

export const updateRideValidator = async (req, res, next) => {
    const { start, end, driver, customers, ride } = req.body
    if (await required(ride)) return resError(res, VALID_ID_REQ, 422)
    if (await required(driver)) return resError(res, VALID_LONG_REQ, 422)
    if (await validID(ride)) return resError(res, VALID_ID_REQ, 422)
    if (await validID(driver)) return resError(res, VALID_ID_REQ, 422)
    if (await required(start.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await required(start.long)) return resError(res, VALID_LONG_REQ, 422)
    if (await required(end.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await required(end.long)) return resError(res, VALID_LONG_REQ, 422)
    if (await required(customers)) return resError(res, CUST_REQ, 422)
    if (await isValidLatitude(start.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await isValidLongitude(start.long)) return resError(res, VALID_LONG_REQ, 422)
    if (await isValidLatitude(end.lat)) return resError(res, VALID_LAT_REQ, 422)
    if (await isValidLongitude(end.long)) return resError(res, VALID_LONG_REQ, 422)

    next()
}

export const getRideValidator = async (req, res, next) => {
    const { ride } = req.query
    if (await required(ride)) return resError(res, VALID_ID_REQ, 422)
    if (await validID(ride)) return resError(res, VALID_ID_REQ, 422)

    next()
}
