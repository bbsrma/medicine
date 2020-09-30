<template>
  <div class="login-main-container" >
      <div class="login-container">
    <div class="login-img-container">
          <img src="~@/assets/user.png" alt="">
      </div>
          <form @submit.prevent="logInTutorAccount">
              <div class="email-input">
                  <label for=""> <i class="fa fa-user"></i> Email</label>
                  <input type="text" name="" id="" class="form-control" placeholder="Enter Email"
                  v-model="email">
              </div>
              <div class="pass-input">
                  <label for=""> <i class="fa fa-key"></i> Password</label>
                  <input type="text" name="" id="" class="form-control" placeholder="*******"
                  v-model="password">
              </div>
                <div class="forget-section">
                    <a href="#" id="forgot-pass">Forgot Password?</a>
                </div>
          </form>
          <div class="login-btn">
              <button
              type="submit" 
              class="btn btn-block"
              @click="logInTutorAccount"
              >LOGIN</button>
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
export default {
    data(){
        return{
            'email': '',
            'password': '',
        }
    },
    methods: { 
        logInTutorAccount(){
            const userData = {
                'email' : this.email,
                'password' : this.password,
            }
            console.log("login clicked");
            this.$store.dispatch('tutorLogin',userData);

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
</style>