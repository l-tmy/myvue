<template>
  <div id="app">
    <ul>
      <router-link to='/'>
        <li >to hello world</li>
      </router-link>
      <router-link :to="{name:'apple',params:{color:'red'}}">
        <li>to apple</li>
      </router-link>
    </ul>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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
