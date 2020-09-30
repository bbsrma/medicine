<template>
  <div>
      <h3> Welcome </h3>
      <p>welcome to gharelu aausadhi, here you find  solution of diseases at home </p>
      <p>welcome to gharelu aausadhi, here you find  solution of diseases at home </p>
      <router-link :to="{path: '/diseases'}" tag="li" class="btn btn-primary" style="cursor:pointer;">Go to Disease Page</router-link>
      <div class="trending">
        <app-trending></app-trending>
      </div>
  </div>
</template>

<script>
import Trending from './post/Trending.vue'
export default {

  components:{
    appTrending: Trending
  },

}
</script>

<style scoped>

</style>