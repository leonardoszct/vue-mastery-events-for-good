import { defineStore } from 'pinia'

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: {},
    }
  },
  getters: {
    numberOfEvents() {
      return this.events.length
    },
  },
})
