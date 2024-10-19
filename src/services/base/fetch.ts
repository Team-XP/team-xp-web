export async function fetchWrapper<T = unknown>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${input}`, {
    ...init,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    const error = await response.json().catch(() => response.text())
    throw error
  }

  const result = await response.json()

  return result
}
