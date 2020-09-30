<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6 btn btn-primary" v-if="allDiseases">
                <router-link :to="{ name: 'adminDiseases'}"  tag="h3" style="cursor:pointer;" >Total Diseases {{ allDiseases.length }}</router-link>      
          </div>
          <div class="col-md-6 btn btn-success" v-if="getAllUser">
                <!-- <h3> <a href="" class="btn-primary">User </a> </h3> -->
                <router-link :to="{ name: 'users'}"  tag="h3" style="cursor:pointer;" >User ({{ getAllUser.length }})</router-link>
                <!-- <router-link :to="{ name: 'postdelete', params: {id: id}}" class="delete-post btn btn-danger ml-2" tag="a"> Delete  </router-link> -->

          </div>
          <!-- <div class="col-md-3 btn btn-primary">
                <h3> <a href="" class="btn-info">5 new latest post </a> </h3>             
          </div>
          <div class="col-md-3 btn btn-success">
             <h3> <a href="" class="btn-primary">most viewed</a> </h3>
          </div> -->
      </div>
      <div class="row">
          <div class="col-md-6 m-2">
              <h3 class="alert alert-info"> Name: {{ authUser.name }}</h3>
              <p class="alert alert-info"> Email: {{ authUser.email }} </p>
              <p class="alert alert-info" v-if="authUser.phone"> Phone: {{ authUser.phone }} </p>
              <p class="alert alert-info"> Role: {{ authUser.role }} </p>
              <p v-if="authUser.isVerified" class="alert alert-success">Status:  Verified </p>
              <p v-else class="alert alert-warning"> Status: Unverified </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
computed:{
    allDiseases(){
      return this.$store.getters.getAllDiseases;
    },
    getAllUser(){
            return this.$store.getters.getAllUser;
        },
        authUser(){
            return this.$store.getters.authUser;
        }
},
created(){
    this.$store.dispatch('getAllDiseases');
    this.$store.dispatch('getAllUser');
}
}
</script>

<style scoped>
.col-md-3{
    /* background-color:#CDE; */
    padding:20px;
}
.col-md-3 .btn h3{
    color:red;
}
</style>