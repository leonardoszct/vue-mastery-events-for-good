import axios from 'axios'

const EVENTS_ENDPOINT = '/events'
const BASE_URL = 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get(EVENTS_ENDPOINT)
  },
  getEvent(id) {
    return apiClient.get(`${EVENTS_ENDPOINT}/${id}`)
  },
  postEvent(event) {
    return apiClient.post(EVENTS_ENDPOINT, event)
  },
}
