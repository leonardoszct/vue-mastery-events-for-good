<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  name: 'ErrorDisplay',
  props: ['error'],
}
</script>

<style>
p {
  padding: 12px;
  border-radius: 8px;
  background-color: #ffc8c8;
  color: #8b0000;
}
</style>
