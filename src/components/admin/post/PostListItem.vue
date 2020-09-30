<template>
  <div>
      <div class="row">
          <div class="col-md-9">
              <div class="post-wrapper">
                  <div class="post-title">
                  <h3 v-if="disease.view">{{ disease.name }} ( {{ disease.view.view_count }} )</h3>
                  <h3 v-else>{{ disease.name }} ( 0 )</h3>
                </div>                
              </div>
              <div class="more-info">
                  <div class="post-description">
                    <p v-if="disease.solutions.length > 0"> {{ disease.solutions[0].solution }} </p>
                    <p v-else> no solution </p>
                    </div>
                  <!-- <a href="/admin/post/ {{ id }}  /details" class="see-more btn btn-primary"> See More {{ id }} </a> -->
                  <div class="link">
                    <router-link :to="{ name: 'postdetails', params: {id: disease.id}}" class="see-more btn btn-primary" tag="a"> See More  </router-link>
                    <!-- <router-link :to="{ name: 'postdelete', params: {id: disease.id}}" class="delete-post btn btn-danger ml-2" tag="a"> Delete  </router-link> -->
                    <button class="btn btn-danger" style="cursor:pointer;" @click="deletePost">Delete</button>
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
  // name : String,
  disease : Object,
  frontendId : Number,
  // solution: Array ,
  // view : Object
  },
  data(){
    return {
      // name:'',
    }
  },
  computed:{
    isPostDeletingModal(){
      return this.$store.getters.adminIsPostDeletingModal;
    }
  },
  methods:{
    deletePost(){
      this.$store.dispatch('adminDeletePostModal',{'disease': this.disease, 'frontendId':this.frontendId});
    }
  }
}
</script>

<style scoped>
/* .more-info{
    display:flex;
} */
.more-info  .link {
  float:right;
}
.more-info  .post-description {
  float:left;
}
</style>