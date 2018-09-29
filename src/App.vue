<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <index msg="Welcome!"/>
  </div>
</template>

<script>
import index from './page/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
