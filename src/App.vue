<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
  // import Home from './page/Home'
  export default {
    // components: {
    //   Home
    // }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .flex {
    display: flex;
  }

  .j-c {
    justify-content: center;
  }

  .j-a {
    justify-content: space-evenly;
  }

  .a-i {
    align-items: center;
  }

  #app {
    height: 100vh;
  }
</style>