import { BASE_API_PATH } from '../constants'

const fetchAccessToken = async () => {
  try {
    const headers = new Headers({ 'Content-Type': 'application/json' })

    const body = {
      username: 'admin',
      password: 'admin',
      provider: 'db',
      refresh: true,
    }

    const response = await fetch(`${BASE_API_PATH}/security/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    })

    const jsonResponse = await response.json()

    return jsonResponse?.access_token
  } catch (err) {
    console.error(err)
  }
}

export const fetchGuestToken = async () => {
  const accessToken = await fetchAccessToken()
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  })

  try {
    const body = {
      resources: [
        { type: 'dashboard', id: '11db5515-9b83-4bd7-b4a3-9ee1bbdb9365' },
      ],
      rls: [],
      user: {
        username: 'guest',
        first_name: 'Guest',
        last_name: 'User',
      },
    }

    const response = await fetch(`${BASE_API_PATH}/security/guest_token/`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    })

    const jsonResponse = await response.json()
    return jsonResponse?.token
  } catch (err) {
    console.error(err)
  }
}
