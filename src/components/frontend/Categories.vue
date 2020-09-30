<template>
    <div class="container">
        <h3 class="heading">Category</h3>
        
        <div class="category-listing" v-if="isCategoryLoading">
            <!-- <li style="list-style-type:none;">loading...</li> -->
                <transition name="zoom" type="transition">
                    <div class="status-box bg-warning" style="margin-left:5%;">
                        
                    </div>
                </transition>
                
        </div>
        <div class="category-listing" v-else>
            <li v-for="diseasecategory in categories" 
                :key="diseasecategory.id"
                class="category-list-item text-info"
                @click="showInnerList">
                <router-link class="text-info" :to="{ path: '/diseases', query:{ 'category': diseasecategory[0].category}}">
                {{ diseasecategory[0].category}} ({{ diseasecategory.length}})
                </router-link>
                <!-- <ul
                :class="{'inner-list': isdisplay}"
                >
                    <li v-for="disease in diseasecategory" 
                        :key="disease.id"
                        class="inner-list-item">
                        {{ disease.name }}
                    </li>
                </ul> -->

            </li>
            <appPagination
              :paginationDetails="{
                  'current_page':categoriesPagination.current_page,
                  'last_page': categoriesPagination.last_page,
                  'path': categoriesPagination.path,
                  'next_page_url': categoriesPagination.next_page_url
                  }"
              parentComponent='Categories'
              v-if="categoriesPagination"> </appPagination>
        </div>
        <div>
          <transition appear
            enter-active-class="animated pulse"
            leave-active-class="animated pulse">
              <div v-if="categoryFetchingError">
                  <p class="alert alert-danger">couldn't fetch data from server</p>
              </div>
          </transition>
        </div>               
    </div>
</template>

<script>
import Pagination from './Pagination.vue';
export default {
    data(){
        return{
            isdisplay: true
        }
    },
    created(){
        this.$store.dispatch('categoryListing');
    },
    components:{
      appPagination: Pagination,
    },
    computed:{
        categories(){
            return this.$store.getters.getCategories;
        },
        isCategoryLoading(){
            return this.$store.getters.isCategoryLoading;
        },
        categoriesPagination(){
          return this.$store.getters.categoriesPagination;
        },
        categoryFetchingError(){
          return this.$store.getters.categoryFetchingError;
        }
    },
    watch:{
      // isCategoryLoading(){
      //   alert('is categoryloading changed');
      // }
    },
    methods:{
        showInnerList(){
            this.isdisplay = !this.isdisplay;
        },
    }
}
</script>

<style scoped>
.outer-list-item{
    cursor:pointer;
}
.inner-list{
    display: none;
}
.category-listing li{
    list-style-type: none;
    /* margin-left:15px; */
}
.category-listing li a{
    text-decoration: none;
    font-family: 'popins';
    font-weight: 600;
    /* color: #d14734; */


}
.category-listing li a:hover{
    font-weight: 600;
}
.heading{
    font-weight:600;
    color: #0d1128;
    font-size: 20px;
}

.status-box {
        height:50px;
        width:50px;
        border-radius:25px;
        cursor:pointer;
        animation: zoom-in 2s infinite;
    }
    .zoom-enter-active {
      animation: zoom-in .5s infinite;
    }
    .zoom-leave-active {
      /* animation: zoom-out 2s reverse infinite; */
      animation: zoom-in;
      opacity:0.5s;
    }
    @keyframes zoom-in {
      0% {
        transform: scale(.1);
        transition: .1s;
        opacity: .2;
      }
      10% {
        transform: scale(.2);
        transition: .1s;
        opacity: .4;
      }
      20% {
        transform: scale(.3);
        transition: .1s;
        opacity: .6;
      }
      30% {
        transform: scale(.4);
        transition: .1s;
        opacity: .8
      }
      40% {
        transform: scale(.5);
        transition: .1s;
        opacity: 1
      }
      50% {
        transform: scale(.5);
        transition: .1s;
        opacity: 1;
      }
      60% {
        transform: scale(.5);
        transition: .1s;
        opacity: 1;
      }
      70% {
        transform: scale(.4);
        transition: .1s;
        opacity: .8;
      }
      80% {
        transform: scale(.3);
        transition: .1s;
        opacity: .6;
      }
      90% {
        transform: scale(.2);
        transition: .1s;
        opacity: .4;
      }
      100% {
        transform: scale(.1);
        transition: .1s;
        opacity: .2;
      }
    }
    @keyframes zoom-out {

      /* 0% {
        transform: scale(1);
      }
      50% {
        transform: scale(.5);
      }
      100% {
        transform: scale(0);
      } */
      /* 100% {
        transform: scale(.1);
        transition: .1s;
        opacity: .1;
      }
      90% {
        transform: scale(.2);
        transition: .2s;
        opacity: .2;
      }
      80% {
        transform: scale(.3);
        transition: .3s;
        opacity: .3;
      }
      70% {
        transform: scale(.3);
        transition: .3s;
        opacity: .3
      }
      60% {
        transform: scale(.4);
        transition: .4s;
        opacity: .4
      }
      50% {
        transform: scale(0.5);
        transition: .5s;
        opacity: .5;
      }
      40% {
        transform: scale(0.6);
        transition: .6s;
        opacity: .6;
      }
      30% {
        transform: scale(0.7);
        transition: .7s;
        opacity: .7;
      }
      30% {
        transform: scale(0.8);
        transition: .8s;
        opacity: .8;
      }
      20% {
        transform: scale(0.9);
        transition: .9s;
        opacity: .9;
      }
      10% {
        transform: scale(1);
        transition: 1s;
        opacity: 1;
      } */
    }
</style>