import axios from 'axios'

import {
    IModelVersionSchema,
    ICreateModelVersionSchema,
    IFinishedUploadModelVersionSchema,
} from '@/schemas/model_version'
import { IListQuerySchema, IListSchema } from '@/schemas/list'

export async function listModelVersions(
    modelName: string,
    query: IListQuerySchema
): Promise<IListSchema<IModelVersionSchema>> {
    const resp = await axios.get<IListSchema<IModelVersionSchema>>(`/api/v1/models/${modelName}/versions`, {
        params: query,
    })
    return resp.data
}

export async function fetchModelVersion(modelName: string, version: string): Promise<IModelVersionSchema> {
    const resp = await axios.get<IModelVersionSchema>(`/api/v1/models/${modelName}/versions/${version}`)
    return resp.data
}

export async function createModelVersion(
    modelName: string,
    data: ICreateModelVersionSchema
): Promise<IModelVersionSchema> {
    const resp = await axios.post<IModelVersionSchema>(`/api/v1/models/${modelName}/versions`, data)
    return resp.data
}

export async function startModelVersionUpload(modelName: string, version: string): Promise<IModelVersionSchema> {
    const resp = await axios.post<IModelVersionSchema>(`/api/v1/models/${modelName}/versions/${version}/start_upload`)
    return resp.data
}

export async function finishModelVersionUpload(
    modelName: string,
    version: string,
    data: IFinishedUploadModelVersionSchema
): Promise<IModelVersionSchema> {
    const resp = await axios.post<IModelVersionSchema>(
        `/api/v1/models/${modelName}/versions/${version}/finish_upload`,
        data
    )
    return resp.data
}