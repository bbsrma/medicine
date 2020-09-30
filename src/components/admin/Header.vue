<template>
<div>
    <!-- main-navigation-section -->
    <div class="main-navigation-container">
        <div class="container">
            <div class="row">
                <!-- logo -->
                <div class="col-md-2">
                    <div class="logo-container">
                        <router-link to="/" tag="a">
                            <img src="~@/assets/Logo_Final13.png" alt="">
                        </router-link>
                        </div>
                </div>
                <!-- logo -->
                <!-- menu -->
                <div class="col-md-6">
                    <div class="menu">
                        <ul>
                            <router-link to="/admin" tag="li" id="active" v-if="auth"> {{ authUser.name }}  </router-link>
                            <router-link to="/admin/posts" tag="li" v-if="auth">Posts</router-link>
                            <router-link to="/admin/post/create" tag="li" v-if="auth">Create Post </router-link>
                            <router-link :to="{ name : 'users'}" tag="li" v-if="auth">Users </router-link>
                            <span  v-if="auth" @click="logout" class="pointer">Logout</span>
                            <span  v-else><a href="/auth/login" class="pointer">Login </a></span>
                        </ul>
                    </div>
                </div>
                <!-- menu -->
            </div>
        </div>  
    </div>
    <!-- main-navigation-section -->
</div>

</template>

<script lang="js">

export default{
    methods:{
        logout(){
            this.$store.dispatch('logout');
        }
    },
    created(){
    },
    computed:{
        // loggedInUser(){
        //     return this.$store.getters.loggedInUser;
        // },
        auth(){
            return this.$store.getters.isAuthenticated;
        },
        authUser(){
            return this.$store.getters.authUser;
        }
    },
    
}

</script>

<style scoped>
/* top-navigation */
.top-navigation-container
{
    background: #0d1128;
    padding: 3px 0px;
}
.social-icon-container
{
    background: #ff5601;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 2px solid #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
    margin: 3px;
    float: left;
}
.social-icon-container a i
{
    font-size: 14px;
    color: #fff;
}
#icon-facebook
{
	background: #4a6fbe;
}
#icon-instagram
{
	background: #ea4c89;
}
#icon-linkedin
{
	background: #4a6fbe;
}
#icon-google
{
	background: #dd4b39;
}
#icon-twitter
{
    background: #00acee;
}
.top-navigation-button-login, .top-navigation-button-register
{
    float: right;
}
.top-navigation-button-login a
{
    color: #fff;
    margin-right: 15px;
    font-size: 14px;
    text-decoration: none;
}
.top-navigation-button-register a
{
    color: #fff;
    font-size: 14px;
    text-decoration: none;
}
/* top-navigation */
/* ------------------------------------- */
/* main-navigation */
.menu ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 60px;
    line-height: 77px;
    display: flex;
}
.menu ul li 
{
    width: 100%;
}
.menu ul li 
{
    position: relative;
    width: 100%;
    display: block;
    text-align: center;
    color: #0d1128;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    transition: 0.3s linear;
    cursor: pointer;
}
.menu ul li a:hover
{
    color: #c94a38;
    transition: 0.3s linear;
}
.logo-container img
{
    height: auto;
	width: 50%;
	margin-top: 4px;
    margin-bottom: 4px; 
}
.searchbar
{
    height: 60px;
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
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    border-bottom: 2px solid #c94a38;
    transition: width 0.3s linear;
}
.searchbar:hover > .search_input
{
    padding: 0 2px;
    width: 130px;
    caret-color:red;
    transition: width 0.4s linear;
}
.searchbar:hover > .search_icon
{
    background: #c94a38;
    color: #fff;
}
.search_icon
{
    height: 40px;
    width: 40px;
    font-size: 20px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:#c94a38;
    text-decoration:none;
}
.pointer{
    cursor: pointer;
}
.pointer:hover{
    font-weight: 600;

}
</style>