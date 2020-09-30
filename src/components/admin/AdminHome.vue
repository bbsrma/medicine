<template>
  <div>
    <app-header></app-header>
        <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components : {
        appHeader: Header,
        appFooter: Footer
    },
    created(){
    }

}
</script>

<style>

</style>