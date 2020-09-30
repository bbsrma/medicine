<template>
  <div>
      <div class="row">
          <div class="col-md-9">
              <div class="post-wrapper">
                  <div class="post-title">
                    <router-link :to="{ name: 'userprofile', params: {id: user.id}}" class="see-more title" tag="a"> {{ user.name }}  </router-link>
                </div>                
              </div>
              <div class="more-info">
                  <div class="post-description">
                    <p> {{ user.role }} </p>                    
                      <div class="verification-section">
                        <div class="" v-if="authUser.role != 'admin'">
                          <div v-if="user.isVerified">
                            <label for=""   class="alert alert-info"> Verified</label>
                          </div>
                          <label for=""  v-else class="alert alert-warning"> UnVerified</label>
                        </div>
                        
                        <div class="link" v-if="authUser.role != 'admin'">
                          <router-link :to="{ name: 'postdelete', params: {id: 1}}" class="delete-post btn btn-danger ml-2" tag="a"> Delete  </router-link>
                  <!-- <router-link :to="{ name: 'postdetails', params: {id: key}}" class="see-more btn btn-primary" tag="a"> View Profile  </router-link>
                    <router-link :to="{ name: 'postdelete', params: {id: key}}" class="delete-post btn btn-danger ml-2" tag="a"> Delete  </router-link> -->
                  
                  <!-- postdetails -->
                  <!-- <a href="" > Delete </a> -->
                  </div>

                  <div v-if="authUser.role== 'admin'">
                    <div class="" v-if="user.isVerified">
                          <label for=""  v-if="user.isVerified" class="alert alert-info"> Verified</label>
                          <button @click.prevent="promoteUser(user.id)" class="btn btn-warning" v-if="user.role!=='admin'">Promote to Admin</button>
                    </div>
                    <div v-else>
                        <label for=""
                          class="alert alert-warning"
                          @click="verifyUser(user.id)" style="cursor:pointer;">
                          <p v-if="isVerifying"> verifying......</p>                     
                          <p v-else> click here to verify </p>           
                        </label>
                    </div>

                  </div>
                        
                      </div>
                    </div>
                  <!-- <a href="/admin/post/ {{ id }}  /details" class="see-more btn btn-primary"> See More {{ id }} </a> -->
                  <div class="link" v-if="authUser.role == 'admin'">
                    <router-link :to="{ name: 'userprofile', params: {id: user.id}}" class="see-more btn btn-primary" tag="a"> View Profile  </router-link>
                    <router-link :to="{ name: 'postdelete', params: {id: 1}}" class="delete-post btn btn-danger ml-2" tag="a"> Delete  </router-link>
                  <!-- <router-link :to="{ name: 'postdetails', params: {id: key}}" class="see-more btn btn-primary" tag="a"> View Profile  </router-link>
                    <router-link :to="{ name: 'postdelete', params: {id: key}}" class="delete-post btn btn-danger ml-2" tag="a"> Delete  </router-link> -->
                  
                  <!-- postdetails -->
                  <!-- <a href="" > Delete </a> -->
                  </div>
                  
                </div>            
          </div>
      </div>
      <hr>
  </div>
</template>

<script>
export default {
props : {
  user: Object,
  name : String,
  email : String,
  role: String,
  },
  data(){
    return {
      // name:'',
    }
  },
  methods:{
    verifyUser(userId){
      this.$store.dispatch('verifyUser',userId);
    },
    promoteUser(userId){
      console.log('promoting user to admin'+userId);
      this.$store.dispatch('promoteUser',userId);
    }
  },
  computed:{
    isVerifying(){
      return this.$store.getters.isVerifying;
    },
    authUser(){
      return this.$store.getters.authUser;
    }
  }
}
</script>

<style scoped>
/* .more-info{
    display:flex;
} */
.post-title a{
  font : 50px bold 'open-sans';
  text-decoration : none;

}
.more-info  .link {
  float:right;
}
.more-info  .post-description {
  float:left;
}
</style>