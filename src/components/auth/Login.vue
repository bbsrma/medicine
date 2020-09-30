<template>
    <div class="login-main-container" >
        <div class="login-container">
            <div class="login-img-container">
                <img src="~@/assets/user.png" alt="">
            </div>
            <form @submit.prevent="logInTutorAccount">
                <div class="input" 
                    :class="{ invalid: !$v.user.email.email,
                            success : !$v.user.email.$invalid
                            }">
                <p style="color:red;text-align:center;" v-if="!loginGetters"> incorrect email password</p>
                    <label for=""> <i class="fa fa-user"></i> Email</label>
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Enter Email"
                        @input="$v.user.email.$touch()"
                        v-model="user.email">
                    <p v-if="serverValidation" class="invalid">
                        <span v-for="error in serverValidation.email" :key="error"> {{ error }} </span>
                    </p>
                </div>
                <div class="input"
                    :class="{ invalid: !$v.user.password.minLength,
                            success : !$v.user.password.$invalid
                            }">

                    <label for=""> <i class="fa fa-key"></i> Password</label>
                    <input 
                        type="password"
                        class="form-control" placeholder="*******"
                        @input="$v.user.password.$touch()"
                        v-model="user.password">
                    <p v-if="serverValidation" class="invalid">
                        <span v-for="error in serverValidation.password" :key="error"> {{ error }} </span>
                    </p>
                </div>
                <div class="forget-section">
                    <a href="#" id="forgot-pass">Forgot Password?</a>
                </div>
            </form>
            <div class="login-btn">
                <!-- <button
                type="submit" 
                class="btn btn-block"
                @click="login"
                :disabled="$v.user.$invalid"
                >Login</button> disabled with frontend validation -->
                <button
                type="submit" 
                class="btn btn-block"
                @click="login"
                >Login</button>
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
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    data(){
        return{
            user: {
                email: '',
                password: '',
            }
        }
    },
    validations:{
        user:{
            email:{
                required,
                email,                
            },
            password:{
                required,
                minLength: minLength(8)

            }

        },

    },
    methods: { 
        login(){
            this.$store.dispatch('login', this.user);
            // this.user.password = '';
        }
    },
    computed:{
        loginGetters(){
            return this.$store.getters.loginGetters;
        },
        serverValidation(){
            return this.$store.getters.serverValidation;
        }
    },
    created(){
    }

}
</script>

<style scoped>
.error-message{
    border:red;
}
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
    .invalid{
        color:red;
    }
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
</style>