<template>
  <div class="pagination-link" v-if="paginationDetails">
            <span class="page-link" v-for="pageNumber in paginationDetails.last_page" :key="pageNumber">
              <!-- <a class="same-page"  v-if="paginationDetails.current_page === pageNumber"> =  </a> -->
              <a @click="getPostsFromPagination( pageNumber)" href="#"   > {{ pageNumber}} &rsaquo; </a>
              <!-- <a @click="getPostsFromPagination( pageNumber)" href="#"  else-if="paginationDetails.current_page === (pageNumber-1)" > next  </a>
              <a @click="getPostsFromPagination( pageNumber)" href="#" else-if="paginationDetails.current_page !== pageNumber">{{ pageNumber }}</a>
              <a @click="getPostsFromPagination( pageNumber)" href="#" else-if="paginationDetails.last_page === pageNumber"> >> </a> -->
            </span>
        </div>
</template>

<script>
export default {
    props:['paginationDetails','parentComponent'],
    methods:{
        getPostsFromPagination(pageNumber){
            this.$store.dispatch('getPaginationLink',
                        {
                          'paginationDetails': this.paginationDetails,
                          'parentComponent':this.parentComponent,
                          'pageNumber': pageNumber});
                        }
        }
    }
</script>

<style scoped>
    .pagination-link{
        margin-top:10px;
        padding:-10px;
    }
    span.page-link {
      /* height:24px;
      width:24px;  */
      /* border-radius: 50%;
      background-color: seagreen; */
      margin-left:2px;
      /* padding:20px; */
      float:left;
    }
    .page-link{
      padding:-10px;
      /* padding-top:-5px;; */
      /* color:white; */
      
    }
    .pagination-link span a:hover{
      text-decoration: none;
    }
    .page-link a.same-page:hover{
      color:white;
    }
</style>