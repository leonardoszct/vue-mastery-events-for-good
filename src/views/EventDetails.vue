<template>
  <div v-if="currentEvent">
    <h1>{{ currentEvent.title }}</h1>
    <p>
      {{ currentEvent.time }} on {{ currentEvent.date }} @
      {{ currentEvent.location }}
    </p>
    <p>{{ currentEvent.description }}</p>
  </div>
</template>

<script>
import { useEventStore } from '@/store/EventStore'

export default {
  name: 'EventDetails',
  props: ['id'],
  setup() {
    const eventStore = useEventStore()

    return {
      eventStore,
    }
  },
  created() {
    this.eventStore.fetchEvent(this.id).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    currentEvent() {
      return this.eventStore.event
    },
  },
}
</script>
