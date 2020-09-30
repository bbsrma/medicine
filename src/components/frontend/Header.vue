<template>
<div>
<!-- top-navigation -->
    <div class="top-navigation-container">
    <div class="container">
    <div class="row">
        <!-- social icon -->
        <div class="col-md-6 p-1">
            <div class="socil-icon-main-container">
                <div class="social-icon-container" id="icon-facebook">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </div>
                <div class="social-icon-container" id="icon-instagram">
                    <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
                <div class="social-icon-container" id="icon-twitter">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </div>
                <div class="social-icon-container" id="icon-linkedin">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <!-- social icon -->

           <!-- <p style="color:#fff"> {{ testuser }} </p> -->
        
        <!-- dashboard-section -->
        <div class="col-md-6"  v-if="authUser">
            
            <div class="top-navigation-button-login">
                <router-link to="/admin" tag="a" v-if="authUser">{{ authUser.name | to-firstLetter-capital }}</router-link> <br>
                <small @click="logOut" style="cursor:pointer; color:white;" class="mt-0">Logout</small>
                
            </div>
        </div>
        <!-- dashboard-section -->
        <!-- login-section -->
        <div class="col-md-6 p-1" v-else>
            <div class="top-navigation-button-register">
                <a href="/auth/register"><i class="fa fa-sign-in"></i> Register</a>
            </div>
            <div class="top-navigation-button-login">
                <a href="/auth/login"><i class="fa fa-user"></i> Login</a>
                
            </div>
        </div>
        <!-- login-section -->
    </div>
</div>
</div>
<!-- top-navigation -->

<!-- main-navigation-section -->
<div class="main-navigation-container">
    <div class="container">
        <div class="row">
            <!-- logo -->
            <div class="col-md-2">
                <!-- <div class="logo-container"><img src="~@/assets/Logo_Final13.png" alt=""></div> -->
                <div class="logo-container"> <p>Header Logo</p> </div>
            </div>
            <!-- logo -->

            <!-- menu -->
            <div class="col-md-6">
                <div class="menu">
                    <ul>
                        <router-link to="/" tag="li" id="active" exact> Home</router-link>
                        <router-link to="/about" tag="li">About Us</router-link>
                        <router-link to="/terms-conditions" tag="li">TermsCondidtion</router-link>
                        <router-link to="/contact" tag="li">Contact</router-link>
                    </ul>
                </div>
            </div>
            <!-- menu -->

            <!-- search -->
            <div class="col-md-4">
                <div class="searchbar">
                        <input class="search_input" 
                                type="text" name="" 
                                placeholder="Search..."
                                v-model="searchText">
                        <input type="button" @click="search" value="search"/>
                        <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                </div> 
            </div>
            <!-- search -->
        </div>
    </div>  
</div>
<!-- main-navigation-section -->

</div>
        <!-- <div class="row header">
        <div class="col-md-2">
            <div class="brand-logo">
                <h4>HomeTutor Finder</h4>
            </div>
        </div>
        <div class="col-md-6">
            <div class="menu">
                <ul>
                    <li><a href="/" id="active">Home</a></li>
                    <li><a href="/tutor">Tutor</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact-us">Contact US</a></li>                    
                </ul>                
            </div>
        </div>
            <div class="col-md-4">
                <div class="menu">
                    <div class="search-form">
                        <input 
                            type="text"
                            class="search-box mt-3"
                            :class="{ 'empty-text' : isEmpty }"
                            placeholder="search here..."
                            v-model="query">
                        <a class="btn mt-3" @click="showResult"><i class="fa fa-search"></i></a>
                    </div>                
                </div>
            </div>
        </div>       -->

</template>

<script>
export default {
    data(){
        return {
            searchText: '',
        }
    },
    computed:{
        authUser(){
            return this.$store.getters.authUser;
        }
    },
    watch:{
        // searchText(){
        //     this.$router.push('/diseases');
        //     this.$store.dispatch('searchDiseases', this.searchText);
        // }
    },
    methods:{
        search(){
            if(this.$route.path != '/diseases'){
                this.$router.push('/diseases');
            }
            this.$store.dispatch('searchDiseases', this.searchText);
        },
        logOut(){
            this.$store.dispatch('logout');
        }
    }
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
</style>