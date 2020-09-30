<template>
<div>
    <div class="">
        <transition appear
          enter-active-class="animated pulse"
          leave-active-class="animated pulse">
              <div v-if="postFetchingError">
                  <p class="alert alert-danger">couldn't fetch data from server</p>
              </div>
          </transition>
    </div>
    
    <div class="row" v-if="isSearching">
        <h3>Searching....</h3>
    </div>

    <div class="row" v-if="isPostLoading && homePageDisease.length <= 0">
        <div class="col-md-12">
          <transition name="zoom" appear mode="out-in">
            <div class="status-box bg-warning">
            </div>
          </transition>
        </div>
    </div>
    <div class="row" v-else>
        <app-post-list-item v-for="disease in homePageDisease"
          :key="disease.id"
          :disease="disease">
        </app-post-list-item>
    </div>
    <!-- <div class="pagination" v-if="diseasePagination.last_page > 1"> -->
      <!-- <appPagination
              :paginationDetails="{
                  'current_page':diseasePagination.current_page,
                  'last_page': diseasePagination.last_page,
                  'path': diseasePagination.path
                  }"
              parentComponent='Diseases'> </appPagination> -->
              <appPagination
              :paginationDetails="diseasePagination"
              parentComponent='Diseases'> </appPagination>
    <!-- </div> -->
    

</div>
    
</template>

<script>
import PostListItem from './PostListItem.vue'
import Pagination from '../Pagination.vue';
export default {
    data(){
        return {
            load: true,
        }
    },
    components:{
        appPostListItem : PostListItem,
        appPagination : Pagination

    },
    created(){
        if(this.$route.query.category)
            {
              // alert('call by parameter');
              this.$store.dispatch('productByCategory', this.$route.query.category);
            }
        else{
            // alert('call all product');
            this.$store.dispatch('getAllPost');
        }
    },
    computed:{
        homePageDisease(){
            return this.$store.getters.getHomepageDiseases;
        },
        isPostLoading(){
            return this.$store.getters.isPostLoading;
        },
        isSearching(){
            return this.$store.getters.isSearching;
        },
        diseasePagination(){
          return this.$store.getters.diseasePagination;
        },
        postFetchingError(){
          return this.$store.getters.postFetchingError;
        }
        // getPaginationLink(){
        //   return this.$store.getters.getPaginationLink;
        // }
    },
    watch:{
        '$route.query.category'(){
            this.$store.dispatch('productByCategory', this.$route.query.category);
        }
    },
    methods:{
      getPostsFrom(pageNumber){
        this.$store.dispatch('getPostByLink',pageNumber);        
      }

    }

}
</script>

<style scoped>
    a.same-class{
      color:red;
      font-weight: 600;
    }
    .fade-enter{
        opacity: 0;        
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        color:yellow;
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity :0 ;
    }
    .block {
        display: inline-block;
        flex-direction: column;
        text-align: center;
        padding-top:10px;
    }
    .status-box {
        height:50px;
        width:50px;
        border-radius:25px;
        cursor:pointer;
        animation: zoom-in 2s infinite ease-in-out;
        margin-left:45%;
    }
    .zoom-enter-active {
      animation: zoom-in 2s infinite;
      background-color: green;
    }
    .zoom-leave-active {
      animation: zoom-out 2s reverse infinite;
      background-color: red;
    }
    @keyframes zoom-in {
      0% {
        transform: scale(.2);
        transition: .1s;
        opacity: .2;
      }
      25% {
        transform: scale(.5);
        transition: .1s;
        opacity: .6
      }
      50% {
        transform: scale(0.7);
        transition: .1s;
        opacity: 1;
      }
      75% {
        transform: scale(.5);
        transition: .1s;
        opacity: .6;
      }
      100% {
        transform: scale(.2);
        transition: .1s;
        opacity: .2;
      }
    }
    @keyframes zoom-out {
      /* 0% {
        transform: scale(0.5);
      }
      50% {
        transform: scale(.3);
      }
      100% {
        transform: scale(0);
      } */
    }
</style>