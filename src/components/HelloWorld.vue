<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onClick: function () {
      console.log('clicked!');
    }
  }
}
</script>

<template>
  <fast-card>
    <h2>{{msg}}</h2>
    <fast-button appearance="accent" v-on:click="onClick">Click Me</fast-button>
  </fast-card>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
