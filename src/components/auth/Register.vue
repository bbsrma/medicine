<template>
    <div class="login-main-container" >
        <div class="login-container">
            <div class="login-img-container">
                <img src="~@/assets/user.png" alt="">
            </div>
            <form @submit.prevent="logInTutorAccount">
                <!-- {{ registrationErrorFromServer }} -->
                <div class="input" :class="{ invalid: !$v.user.name.minLength, success: !$v.user.name.$invalid}">
                    <label for=""> <i class="fa fa-user"></i> Full Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        class="form-control" 
                        placeholder="Full Name"
                        v-model="user.name"
                        @blur="$v.user.name.$touch()">
                    <p v-if="registrationErrorFromServer"> 
                        <span v-for="error in registrationErrorFromServer.name" :key="error"> {{ error}}</span>
                    </p>
                </div>
                <div class="input"
                        :class="{ invalid: !$v.user.phone.minLength || !$v.user.phone.numeric, success:!$v.user.phone.$invalid}">
                    <label for=""> <i class="fa fa-user"></i> Contact Number</label>
                    <input
                        id="phone"
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Phone no"
                        v-model="user.phone"
                        @input="$v.user.phone.$touch()">
                    <p v-if="registrationErrorFromServer"> 
                        <span v-for="error in registrationErrorFromServer.phone" :key="error"> {{ error}}</span>
                    </p>
                </div>

                <div class="input" 
                :class="{
                    invalid:  $v.user.email.$error,
                    success: !$v.user.email.$invalid && $v.user.email.$model,
                    }"
                >
                    <!-- success:  !$v.user.email.$error, -->

                    <label for="email"> <i class="fa fa-user"></i> Email</label>
                    <input
                        name="email"
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Email"
                        id="email"
                        @blur="$v.user.email.$touch()"
                        v-model="user.email">
                        <!-- <p v-if="!$v.user.email.email "> provide a valid email</p> -->
                        <p v-if="$v.user.email.$error && !$v.user.email.isUnique"> email already taken</p>
                        <p v-if="registrationErrorFromServer"> 
                            <span v-for="error in registrationErrorFromServer.email" :key="error"> {{ error}}</span>
                        </p>
                </div>
                <div class="input" :class="{ invalid: ! $v.user.password.minLength, success: !$v.user.password.$invalid}">
                    <label for=""> <i class="fa fa-key"></i> Password</label>
                    <input
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="*******"
                        v-model="user.password"
                        @input="$v.user.password.$touch()">
                        <p v-if="registrationErrorFromServer"> 
                            <span v-for="error in registrationErrorFromServer.password" :key="error"> {{ error}}</span>
                         </p>
                </div>
                <div class="input"
                        :class="{ invalid: $v.user.confirmpassword.$error, 
                        success: !$v.user.confirmpassword.$invalid &&  $v.user.confirmpassword.$model}">
                    <label for=""> <i class="fa fa-key"></i>Password Confirmation</label>
                    <input
                        name="repassword"
                        type="password"
                        class="form-control" 
                        placeholder="*******"
                        v-model="user.confirmpassword"
                        @input="$v.user.confirmpassword.$touch()">
                        <p v-if="registrationErrorFromServer"> 
                            <span v-for="error in registrationErrorFromServer.confirmpassword" :key="error"> {{ error}}</span>
                        </p>
                </div>
                    <div class="forget-section">
                        <a href="#" id="forgot-pass">Forgot Password?</a>
                    </div>
            </form>
            <div class="login-btn">
                <button
                type="submit" 
                class="btn btn-block"
                @click="registerAccount"
                >Register</button>
                <!-- :disabled="$v.user.$invalid" -->
            </div>
            <div>
                <h6 class="login-with">Login With</h6>
            <div class="login-icon-container">
                <div class="icon-fb-container mr-2" id="facebook">
                    <a href="#"><i class="fa fa-facebook text-white"></i></a>
                </div>
                <div class="icon-gmail-container" id="gmail">
                    <a href="#"><i class="fa fa-google-plus text-white"></i></a>
                </div>
            </div>
            </div>
            <a href="#" id="already-have">Already Have Account!</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { required, email, minLength, numeric, sameAs } from 'vuelidate/lib/validators';
export default {
    data(){
        return{
            user: {
                name: '',
                phone: '',
                email: '',
                password: '',
                confirmpassword: '',
            },
        }
    },
    validations:{
        user:{
            name:{
                required: required,
                minLength: minLength(6),
                },
            email:{
                email,
                // unique: val => {
                //     if (val === '')
                //         return true;
                    // let unique  = false;
                    // let res =  axios.get('/users?equalTo="'+ val +'"');
                    // console.log(JSON.stringify(res));
                    // return true;
                    // if(res.data){
                    //     let users = res.data;
                    //     for(let i=0; i<=users.length; i++){

                    //             if(val !== users[i].email ){
                    //                 // find = true;
                    //                 unique = true;
                    //                 console.log('available ')
                    //                 console.log('email unique ' + unique);
                    //             }                                
                    //             else{
                    //                 console.log( val + 'is available');
                    //                 console.log('already exist ');
                    //             }
                    //     }
                    //     console.log('at last comparision email unique '+ unique)
                    //     return unique;
                    // }
                    // return unique;
                    //    for(res.data as user){
                    //         console.log(user)
                    //         if(user.email.match(val)){
                    //             find= true;
                    //         }
                    //     }
                    //     return find;
                    // })
                    // return new Promise(( resolve ) => {
                    //     setTimeout( ()=> {
                    //         resolve(val !== 'test@test.com');
                    //     }, 2000);
                    // })
                // },
                async isUnique (value) {
                if (value === '') return true
                const response = await axios.get('/unique/'+value)
                console.log(response.data);
                return Boolean(await response.data)
            }
            },
            phone:{
                required,
                numeric,
                minLength : minLength (9)
            },
            password:{
                required,
                minLength: minLength(8)
            },
            confirmpassword:{
                minLength: minLength(8),
                sameAs : sameAs('password')
            }
        }
        

    },
    methods:{
        registerAccount(){
            this.$store.dispatch('registerAccount',this.user);
            // this.$router.push('/auth/login');
        }
    },
    computed:{
        isRegistering(){
            return this.$store.getters.isRegistering;
        },
        registrationErrorFromServer(){
            return this.$store.getters.registrationErrorFromServer;
        }
    }
}
</script>


<style scoped>

    .email-input,.pass-input label
    {
        margin-top: 8px;
    }
    .login-icon-container
    {
        display: inline-flex;
        padding: 0px;
    }
    .login-container
    {
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 35px;
        margin-bottom: 35px;
        background: url('~@/assets/img-9.png');
        background-size: cover;
        border-radius: 15px;
        box-shadow: 2px 2px 15px 2px #808080;
        padding: 20px;
    }
    .login-img-container
    {
        height: 70px;
        width: 70px;
        background :transparent;
        border-radius: 100%;
        margin-left: auto;
        margin-right: auto;
        display:flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 9px 2px #000;
        
    }
    .login-img-container img
    {
        height: auto;
        width: 100%;
    }
    .login-btn button
    {
        margin-top: 12px;
        background: #c94a38;
        color: #fff;
    }
    #forgot-pass
    {
        text-decoration: none;
        color: #000;
        float: right;
        padding: 10px;
        font-style: italic;
    }
    #already-have
    {
        text-decoration: none;
        color: #c94a38;
        font-size: 16px;
    }
    .login-icon-container .icon-fb-container,.icon-gmail-container a i
    {
        font-size: 20px;
    }
    .login-icon-container .icon-fb-container,.icon-gmail-container
    {
        background: #ff5601;
        height: 35px;
        width: 35px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }
    #facebook
    {
        background: #3b5998;
    }
    #gmail
    {
        background: #d44638;
    }
    .login-with
    {
        font-weight: 600;
        margin-top: 2%;
    }

    /* form validation  */

    /* input validation validations */
     .input.invalid input{
        border:1px solid red;
        background-color:#ffc9aa;
    }
    .input.invalid label{
        color:red;
    }
    .input.success input{
        border:2px solid rgb(17, 221, 27);
        background-color:#ffffff;
    }
    .input.success label{
        color:rgb(17, 221, 27);
    }
    .input p {
        color: red;
    }

    /* phone validations
     /* .phone-input.invalid input{
        border:1px solid red;
        background-color:#ffc9aa;
    }
    .phone-input.invalid label{
        color:red;
    }
    .phone-input.success input{
        border:2px solid rgb(17, 221, 27);
        background-color:#ffffff;
    }
    .phone-input.success label{
        color:rgb(17, 221, 27);
    }
    /* email validations  */
    /* .email-input.invalid input{
        border:1px solid red;
        background-color:#ffc9aa;
    }
    .email-input.invalid label{
        color:red;
    }
    .email-input.success input{
        border:2px solid rgb(17, 221, 27);
        background-color:#ffffff;
    }
    .email-input.success label{
        color:rgb(17, 221, 27); 
    } */
</style>