<template>
  <div class="network-error">
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues, please take a
      breath and <a href="#" @click="goBack">click here</a> to try again.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NetworkError',
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
