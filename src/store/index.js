import EventService from '@/services/EventService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Leo C.',
    events: [],
    event: {},
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(() => {
          alert('Error creating events')
        })
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data)
        })
        .catch(() => {
          alert('Error getting events')
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data)
          })
          .catch(() => {
            alert('Error getting event')
          })
      }
    },
  },
  modules: {},
})
