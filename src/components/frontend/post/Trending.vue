<template>
  <div>
      <h3 class="heading">Most Viewed</h3>
        <transition name="zoom" type="transition" v-if="topViewPostFetching">
            <div class="status-box bg-warning" style="margin-left:5%;">
                
            </div>
        </transition>
      <transition appear
                enter-active-class="animated pulse"
                leave-active-class="animated pulse">
                    <div v-if="topViewPostFetchingFailed">
                        <p class="alert alert-danger">couldn't fetch data from server</p>
                    </div>
                </transition>
      <div class="row">
            <app-post-list-item v-for="(disease, index) in getTopViewed" 
                :key="index"
                :disease="disease"></app-post-list-item>
      </div>
  </div>
</template>

<script>
import PostListItem from './PostListItem';
export default {
    created(){
        this.$store.dispatch('mostViewed');
    },
    components:{
        appPostListItem :PostListItem,
    },
    computed:{
        getTopViewed(){
            return this.$store.getters.getTopViewed;
        },
        topViewPostFetching(){
            return this.$store.getters.topViewPostFetching;
        },
        topViewPostFetchingFailed(){
            return this.$store.getters.topViewPostFetchingFailed;
        }
    }

}
</script>

<style scoped>
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
</style>