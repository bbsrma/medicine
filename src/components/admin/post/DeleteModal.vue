<template>
<!-- name="slide" -->
    <transition  appear
        enter-active-class="animated pulse"
        >
        <!-- leave-active-class="animated pulse" -->
        <div class="row delete-modal alert alert-danger">            
            <div class="col-md-12">
                <div class="close-btn"
                    @click="closeDeleteModal">
                    X
                </div>                
                <div>
                    <div class="info" v-if="postDeletingGetter">
                        <p>Are you sure want to delete disease Id {{ postDeletingGetter.disease.id }} <br> frontendid  {{ postDeletingGetter.frontendId }} </p>
                        <div v-if="isAdminPostDeleting" class="ml-4">
                            <appPreloader></appPreloader>
                        </div>
                    </div>
                     
                    <!-- <div class="info text-center">
                        <label for=""> Loading... </label>
                    </div> -->

                    <div class="footer">
                        <button  @click="deletePost" class="btn btn-danger"> Delete </button>
                        <button  @click="closeDeleteModal" class="btn btn-primary m-3"> Cancel </button>
                    </div>                    
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Preloader from '../Preloader.vue';
export default {
    props:['success'],
    components:{
        appPreloader: Preloader,
    },
    methods:{
        deletePost(){
            console.log('delete post clicked');
            this.$store.dispatch('deleteAdminPost', {'postId':this.postDeletingGetter.disease.id,'frontendId':this.postDeletingGetter.frontendId})
            // setTimeout(()=>{
            //     this.$router.replace('/admin/posts');
            // },10000);
        },
        closeDeleteModal(){
            this.$store.dispatch('closeDeleteModal')
        },
        goBack(){
            console.log('go back clicked');
            this.$router.replace('/admin/posts');
        }
    },
    computed:{
        getDiseaseId(){
            return this.$route.params.id;
        },
        isPostDeleting(){
            return this.$store.getters.isPostDeleting;
        },
        postDeletedMessage(){
            return this.$store.getters.postDeletedMessage;
        },
        postDeletingGetter(){
            return this.$store.getters.adminPostDeletingGetters;
        },
        isAdminPostDeleting(){
            return this.$store.getters.isAdminPostDeleting;
        }
    }

}
</script>

<style scoped>
    .footer{
        float:left;
    }
    .delete-modal{
        position:fixed;
        border-radius:5px;
        color:white;
        font-weight:600;
        left: 30%;
        top: 150px;
        z-index:1;
    }
    .close-btn{
        float:right;
        font-weight:bolder;
        margin-right:-30px;
        margin-top:-15px;
        cursor:pointer;
        font-size: 18px;
    }
    /* .fade-enter{
        opacity: 0;
        transition: 2s;
    }
    .fade-enter-active{
        transition: opacity 2s;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: opacity 2s;
        opacity: 0;
    } */

    .slide-enter{
        /* transform: translateY(0px); */
    }
    .slide-enter-active{
        animation:slide-in .6s ease-in-out forwards;
    }
    .slide-leave{
    }
    .slide-leave-active{
        animation: slide-out .6s ease-in-out forwards;
    }

    @keyframes slide-in {
        from{
            transform: translateY(-10px);
        }
        to{
            transform :translateY(0px);
        }
    }
    @keyframes slide-out {
        from{
            transform :translateY(0px);
        }
        to{
            transform: translateY(-10px);
        }
    }

</style>