<template>
  <div class="container">
      <div class="row">
          <div class="col-md-9">
              <h3>User Profile </h3>
              <div class="profile" v-if="getUserProfileLoading">
                <p> Loading..... </p>
              </div>
              <div class="profile" v-if="!getUserProfileLoading && user">
                <p> {{ user.id }} </p>
                <p> {{ user.name }} </p>
                <p> {{ user.email }} </p>
                <p> {{ user.phone }} </p>
                <p> {{ user.role }} </p>
                <p v-if="user.isVerified"> <span class="bg-success p-2"> Verified </span></p>
                <p v-else ><span class="bg-warning p-2" style="border-radius:5px;"> UnVerified </span></p>
              </div>
               
          </div>
      </div>
      <div class="goback">
          <p style="cursor:pointer; color:tomato;font-weight:600;"
            @click="goBack">GO Back</p>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        let userId = this.$route.params.id;
        this.$store.dispatch('setUserProfile', userId);
    },
    computed:{
        user(){
            return this.$store.getters.getUser;
        },
        getUserProfileLoading(){
            return this.$store.getters.getUserProfileLoading;
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>

<style>

</style>