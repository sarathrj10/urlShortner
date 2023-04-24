import urlModel from '../../models/url.js'

export const getUrl =async(params={}) => await urlModel.findOne(params)
export const saveUrl = async(payload={}) => await urlModel.create(payload)