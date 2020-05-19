<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloCircleCI msg="Welcome to Your CircleCI Vue.js App"/>
  </div>
</template>

<script>
import HelloCircleCI from './components/HelloCircleCI.vue'

export default {
  name: 'App',
  components: {
    HelloCircleCI
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
