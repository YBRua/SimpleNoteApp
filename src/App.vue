<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #101010;
}
</style>

<script>
import RoundedButton from './components/RoundedButton.vue';

export default {
  components: {
    RoundedButton
  }
}
</script>
