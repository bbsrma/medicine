<template>
  <div class="container">
      <div v-if="getAllUser">
          <h3 v-if="authUser.role == 'admin'"> Total System user ( {{ getAllUser.length }} ) </h3>
        <app-user v-for="user in getAllUser" 
            :key="user.id"
            :user="user">
        </app-user>
      </div>
  </div>
</template>

<script>
import User from './User.vue'

export default {
    mounted(){
        this.$store.dispatch('getAllUser');
    },
    components:{
        appUser: User
    },
    computed:{
        getAllUser(){
            return this.$store.getters.getAllUser;
        },
        authUser(){
            return this.$store.getters.authUser;
        }
    }

}
</script>

<style>

</style>