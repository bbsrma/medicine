<template>
    <transition name="slide" appear type="animation">
        <div class="right-alert alert"
            :class="{ 'alert-success': alertMessage.status,
                        'alert-danger': !alertMessage.status}">
        <span style="float:right; font-weight:bolder;">X</span>
        <!-- <p class="p-4">deleted successfully</p> -->
        <!-- {{ adminPostDeletedMessage }} -->
        <!-- <p> {{ ispostCreated }} </p> -->
        <p class="p-2"> {{ alertMessage.message }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    props:['alertMessage'],
    created(){
        console.log('admin alert  created');
    },
    computed:{

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
    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-out 2s ease-in forwards;
        transition: opacity 0.5s;

    }
    .slide-leave{

    }
    .slide-leave-active{
        animation: slide-out 2s forwards;
        transition: 1s;
        opacity: 0;

    }
    @keyframes slide-in{
        from{
            transform: translateY(10px);
        }
        to{
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY(0px);
        }
        to{
            transform: translateY(-10px);
        }
        
    }

    /* fade component */
    /* .fade-enter{
        opacity: 0;
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
</style>