export const getDetailById = async (collection, key, value, fields) => {
    const data = await collection.findOne({ [key]: value }, fields)
    return data || false
}

export const update = async (collection, condition, data) => {
    const dataUpdate = await collection.updateOne(condition, data)
    return !(dataUpdate.nModified || dataUpdate.ok) ? false : dataUpdate
}

export const deleteById = async (collection, id) => {
    const data = await collection.findByIdAndUpdate(id, { isDeleted: true })
    return data || false
}

export const create = async (collection, data) => {
    const newData = new collection(data)
    const dataResponse = await collection.create(newData)
    return dataResponse || false
}
