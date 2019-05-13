import axios from 'axios'
import get from 'lodash/get'

export default async (url, params) => {
  const response = await axios.get(url, {
    params
  })
  const error = get(response, 'data.error')
  if (error) {
    throw new Error(error.info)
  }
  return response
}

