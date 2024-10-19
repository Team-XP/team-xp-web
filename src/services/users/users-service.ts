import { fetchWrapper } from '../base'
import type { CreateUserRequest, CreateUserResponse } from './types'

const endpoint = 'users'

export async function createUser(body: CreateUserRequest) {
  const response = await fetchWrapper<CreateUserResponse>(`${endpoint}`, {
    method: 'POST',
    body
  })

  return response
}
