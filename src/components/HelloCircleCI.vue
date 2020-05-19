<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    This is a test file for CircleCI.
    <div>
    <p>{{ message }}</p>
    <input v-model="message" />
    <button v-on:click="click1()">Click here</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloCircleCI',
  props: {
    msg: String,
  },
  data: function () {
    return {
      message: 'Hello Vue.js!',
    }
  },
  methods: {
    click1: function () {
      this.message = this.message.split('').reverse().join('')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
