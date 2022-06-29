import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Leo C.',
    events: [],
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
  },
  actions: {},
  modules: {},
})
