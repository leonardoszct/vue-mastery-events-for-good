<template>
  <div class="flash-message">
    <div class="message" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashMessage',
  inject: ['GStore'],
  computed: {
    message() {
      return this.GStore.flashMessage
    },
  },
}
</script>

<style>
@keyframes yellowfade {
  from {
    background: #e4e1b4;
  }
  to {
    background: transparent;
  }
}

.flash-message {
  min-height: 34px;
}

.message {
  padding: 8px;
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
