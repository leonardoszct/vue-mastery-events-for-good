import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state() {
    return {
      user: 'Leo C.',
    }
  },
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    },
  },
})
