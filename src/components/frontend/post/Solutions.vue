<template>
  <div class="container">
       <div class="row" v-if ="isPostDetailsLoadingF">
          <div class="col-md-12">
              <!-- <transition name="fade" appear>
                    <div class="alert alert-warning text-center"> loading....</div>
              </transition> -->
              <transition name="fade" appear>
                  <div class="progress-bar text-center" 
                        style="" 
                        :style="{width:initialWidth +'%'}">
                  </div>
              </transition>
          </div>
        </div>
      <div class="row" v-if="postDetailsF">
          <div class="col-md-12 col-sm-12">
              <h3 class="header disease-name"> {{ postDetailsF.name | to-firstLetter-capital }} <span class="text-info small-heading pt-4"> ({{ postDetailsF.category | to-firstLetter-capital }}) </span></h3>
              <div class="solutions-listing mt-4">
                  <ul class="list">
                        <li v-for = "solution in postDetailsF.solutions" 
                            :key="solution.id"
                            class="alert alert-success">
                            {{ solution.solution}}
                        </li>
                    </ul>
              </div>
              <p v-if="postDetailsF.solutions.length <= 0">
                   no solution.
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
        // isLoading : true,
        // name : this.$route.query.name,
        initialWidth: 1, 
        }
    },
    created(){
            setInterval(() => {
                if(this.initialWidth <= 100)
                this.initialWidth+=2;
            }, 12);
        let id = this.$route.params.id;
        // alert(this.$route.query.name);
        this.$store.dispatch('fetchPostDetailsFromFrontend',id);
    },
    computed:{
        postDetailsF(){
            return this.$store.getters.getPostDetailsF;
        },
        isPostDetailsLoadingF(){
            return this.$store.getters.isPostDetailsLoadingF;
        }
    },
    watch:{
        // isPostDetailsLoadingF(){
        //     alert('change')
        //     this.initialWidth += 50;
        // }
    },
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .progress-bar{
        height: 6px;
        background-color: rgb(5, 126, 5);
        overflow: hidden;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .fade-enter{
        opacity: 0;        
    }
    .fade-enter-active{
        transition: opacity 1s;
        opacity: 0.8;
    }
    .fade-leave{
        opacity: 0;
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity :0;
    }

    .preloader{
        text-align: center;
        vertical-align: middle;
        font-weight:bolder;
    }
    .go-back-link{
        color:rgb(6, 50, 196);
        position: relative;
        margin-left: 42px;
    }
    .go-back-link:hover{
        cursor:pointer;
        color:rgb(39, 86, 240);
        font-weight:600;
    }

    .header {
        text-align:center;
        font-family: sans-serif;
        font-weight: 600;
        padding-top: 0px;
        padding-bottom: 10px;
        color: rgba(236, 8, 8, 0.973);
    }
    .solutions-listing ul {
        margin: 0px;
        margin-left: 5px;
        width: 100%;
        /* height: 60px; */
        /* line-height: 40px; */
        /* display: flex; */
    }
    /* .solutions-listing ul li 
    {
        width: 100%;
    } */
    .solutions-listing .list  
    {
        list-style-type:square;
        /* list-style-type: none; */
        width: 100%;
        display: block;
        /* text-align: left; */
        /* color: #0d1128; */
        color:rgb(10, 218, 10);
        /* text-decoration: none; */
        font-weight: 600;
        font-family: 'Poppins',sans-serif;
        font-size: 18px;
        transition: 0.3s linear;
        cursor: pointer;
    }

    .small-heading{
        font-size: 16px ;
    }
</style>