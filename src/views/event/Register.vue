<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  name: 'EventRegister',
  props: ['event'],
  methods: {
    register() {
      // Call to API and if successfull, go to event details
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
