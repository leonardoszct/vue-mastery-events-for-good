<template>
  <h1>Events For Good</h1>

  <div>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />

      <div class="pagination">
        <router-link
          id="page-prev"
          v-if="page != 1"
          :to="{ name: 'EventList', query: { page: page - 1 } }"
          rel="prev"
        >
          &#60; Previous
        </router-link>

        <router-link
          id="page-next"
          v-if="hasNextPage"
          :to="{ name: 'EventList', query: { page: page + 1 } }"
          rel="next"
        >
          Next &#62;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import NProgress from 'nprogress'

const PAGE_SIZE = 2

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    next((vm) => {
      vm.getEvents(routeTo, vm)
    })
  },
  beforeRouteUpdate(routeTo) {
    this.getEvents(routeTo, this)
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / PAGE_SIZE)
      return this.page < totalPages
    },
  },
  methods: {
    getEvents(routeTo, comp) {
      NProgress.start()
      const page = parseInt(routeTo.query.page) || 1

      EventService.getEvents(PAGE_SIZE, page)
        .then((response) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          console.log('error')
          comp.$router.push({ name: 'NetworkError' })
        })
        .finally(() => {
          NProgress.done()
        })
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
