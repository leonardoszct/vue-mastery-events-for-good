<template>
  <div v-if="event">
    <h1>{{ currentEvent.title }}</h1>
    <p>
      {{ currentEvent.time }} on {{ currentEvent.date }} @
      {{ currentEvent.location }}
    </p>
    <p>{{ currentEvent.description }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'EventDetails',
  props: ['id'],
  created() {
    this.fetchEvent(this.id).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    ...mapState(['event']),
    currentEvent() {
      return this.event.currentEvent
    },
  },
  methods: {
    ...mapActions('event', ['fetchEvent']),
  },
}
</script>
