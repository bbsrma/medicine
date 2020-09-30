<template>
  <div class="container">
      <!-- <app-alert></app-alert> -->
      <!-- {{ adminPostDeletedMessage }} -->
      <div v-if="adminPostDeletedMessage">
        <appAdminAlert :alertMessage="adminPostDeletedMessage"></appAdminAlert>
      </div>
      <div v-if="isPostLoading"> loading...</div>
      <div v-if="allDiseases"> 
        <h3>Post Count ({{ allDiseases.length }}) </h3>
        <div v-if="allDiseases">
          <app-post-list-item v-for="(disease, index) in allDiseases" 
                  :key="index"
                  :frontendId="index"
                  :disease="disease">
          </app-post-list-item>
          
          <!-- {{ adminDiseasePagination }} -->
          <app-pagination 
            :paginationDetails="adminDiseasePagination"
            parentComponent='admin_PostList'></app-pagination>


            <app-delete-modal v-if="isAdminPostDeletingModal"></app-delete-modal>

        </div>
      </div>
  </div>
</template>

<script>
import PostListItem from './PostListItem.vue'
import Pagination from '../../frontend/Pagination'
import DeleteModal from './DeleteModal.vue';
// import Alert from './Alert.vue';
import AdminAlert from './AdminAlert.vue';
export default {
  components: {
    appPostListItem : PostListItem,
    appPagination : Pagination,
    appDeleteModal : DeleteModal,
    // appAlert: Alert,
    appAdminAlert : AdminAlert,
  },
  mounted(){
    this.$store.dispatch('getAllDiseases');
  },
  computed:{
    allDiseases(){
      return this.$store.getters.getAllDiseases;
    },
    diseaseCount(){
        return this.$store.getters.getAllDiseases;
    },
    isPostLoading(){
      return this.$store.getters.isPostLoading;
    },
    adminDiseasePagination(){
          return this.$store.getters.adminDiseasePagination;
    },
    isAdminPostDeletingModal(){
      return this.$store.getters.isAdminPostDeletingModal;
    },
    isAdminPostDeleted(){
      return this.$store.getters.isAdminPostDeleted;
    },
    adminPostDeletedMessage(){
      return this.$store.getters.adminPostDeletedMessage;
    }
  }

}
</script>

<style scoped>
  .right-alert{
    position:fixed;
    border-radius:5px;
    font-weight:600;
    right: 0;
    top: 150px;
    height: 80px;
    width: 250px;
    z-index:1;
  }

</style>