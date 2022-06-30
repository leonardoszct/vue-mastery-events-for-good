import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state() {
    return {
      name: 'Leo C.',
      id: 'leoc',
    }
  },
  getters: {
    firstName() {
      return this.name.split(' ')[0]
    },
  },
})
