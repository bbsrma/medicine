<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6" v-if ="isPostDetailsLoading">
                <p> loading....</p>
                <p  class="go-back-link" @click="goBack">Go Back</p>
          </div>
          <div class="col-md-6" v-else>
              <h3> {{ postDetails.name }} </h3>
              <ul>
                    <li v-for = "solution in postDetails.solutions" 
                        :key="solution.id"
                        class="justified">
                        {{ solution.solution}}
                    </li>
              </ul>
              <p v-if="postDetails.solutions.length <= 0">
                   no solution
              </p>
              <p v-if="postDetails.user">
                  <label for="">Posted By: </label>
                    {{ postDetails.user.name}}
              </p>
              <p  class="go-back-link" @click="goBack">Go Back</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
        
        }
    },
    created(){
        // alert(this.$route.params.id);
        let id = this.$route.params.id;
        this.$store.dispatch('fetchPostDetails',id);
    },
    computed:{
        postDetails(){
            return this.$store.getters.getPostDetails;
        },
        isPostDetailsLoading(){
            return this.$store.getters.isPostDetailsLoading;
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .go-back-link{
        color:rgb(6, 50, 196);
    }
    .go-back-link:hover{
        cursor:pointer;
        color:rgb(39, 86, 240);
        font-weight:600;
    }
</style>