<template>
<div class="container">
  <div id="app">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  export default {
    name: 'App',
    created(){
        this.$store.dispatch('tryAutoLogin');
    }
  }
</script>

<style scoped>
#app 
{
  max-width: 100%;
}
.container
{
  max-width: 100%;
  padding: 0;
  overflow: hidden;
}
</style>
