<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>This is a test file for CircleCI.</h3>
    <div>
    <p>{{ greeting }}</p>
    <input id="username" v-model="username" />
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
      username: 'kubotti',
      greeting: 'Hello',
    }
  },
  methods: {
    click1: function () {
      //console.log("click1 clicked.")
      this.greeting = 'Hello, ' + this.username
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
