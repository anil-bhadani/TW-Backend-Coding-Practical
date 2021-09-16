import mongoose from 'mongoose'

export const required = async (element) => {
    if (element === '' || element == null || element === undefined) return true
}

export const validID = async (id) => {
    const { ObjectId } = mongoose.Types
    if (!ObjectId.isValid(id)) return true
}

export const isId = async (element) => {
    const letters = /^[A-Za-z0-9]+$/
    if (!element.match(letters)) return true
}

export const isNumber = async (element) => {
    const letters = /^[0-9]+$/
    if (!element.toString().match(letters)) return true
}

export const isGreaterThanZero = async (element) => {
    if (Math.sign(Number(element)) === 1) return true
}

export const isValidLatitude = async (element) => {
    const latitude = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/g
    if (!latitude.test(element)) return true
}

export const isValidLongitude = async (element) => {
    // eslint-disable-next-line security/detect-unsafe-regex
    const longitude = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/g
    if (!longitude.test(element)) return true
}
