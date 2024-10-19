import { fetchWrapper } from '../base'
import type { CreateUserRequest, CreateUserResponse } from './types'

const endpoint = 'users'

export async function createUser(payload: CreateUserRequest) {
  const data = await fetchWrapper<CreateUserResponse>(`${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  return data
}
