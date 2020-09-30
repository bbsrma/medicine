<template>
<div>
  <app-header></app-header>

  <div class="container">
      <div class="row">
        <div class="col-md-9">
          <router-view></router-view>
            <!-- <app-post-list></app-post-list>             -->
        </div>

        <div class="col-md-3">
          <!-- search -->                
                <app-categories></app-categories>
        </div>
      </div>
    </div>  
    <app-footer></app-footer>
</div>
    
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue'
import Categories from './Categories.vue';
// import PostList from './post/PostList.vue'
export default {
  data(){
    return{
      category : this.$route.query.category,
    }
  },
  watch:{
    '$route'( to  ){
      // alert('parameter changed' + this.$route.query.category);
      this.category = to.query.category;
      // this.$store.dispatch('gettingByCategory', this.category);
      this.$store.dispatch('productByCategory', this.$route.query.category);
      // this.$forceUpdate();
    }
  },
  components: {
    appHeader : Header,
    appFooter : Footer,
    appCategories : Categories,
    // appPostList : PostList,

  },
  mounted(){
    console.log("component mounted!!");
  },
   created(){
    // this.$store.dispatch('gettingByCategory', this.$route.query.category);
    this.$store.dispatch('productByCategory', this.$route.query.category);

  },
  computed:{
    categoriesListing(){
      return this.$store.getters.categoriesListing;
    },
    categoriesListingLoading(){
      return this.$store.getters.categoriesPostListingLoading;
    }
  }


}

</script>
<style scoped>

.searchbar
{
    /* height: 60px; */
    background-color: #fff;
    color: #c94a38;
    border-radius: 30px;
    padding: 10px;
    margin-left: 140px;
    margin-top: 5px;
}
.search_input
{
    color: #000;
    border: 0;
    outline: 0;
    background: none;
    /* width: 0; */
    caret-color:transparent;
    line-height: 40px;
    caret-color:red;
    border-bottom: 2px solid #c94a38;
    /* transition: width 0.3s linear; */
}
.search_icon
{
    /* height: 40px; */
    /* width: 40px; */
    font-size: 20px;
    float: left;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* border-radius: 50%; */
    color:#fff;
    text-decoration:none;
}
.title{
  color:tomato;
}

</style>