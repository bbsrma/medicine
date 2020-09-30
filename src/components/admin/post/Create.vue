<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6" v-if="authUser.isVerified">
            
            
          <h3>Create new post</h3>
          <div v-if="alertMessage">
              <app-admin-alert                 
                :alertMessage="alertMessage">
              </app-admin-alert>
              <!-- {{ alertMessage.status }} -->
              <div class="alert-link" v-if="alertMessage.status">
                  <router-link :to="{ name : 'diseasesolutions', params:{id: alertMessage.data.id}}" tag="a" target="_blank"> View your post</router-link>
              </div>
            </div>
            <!-- <transition name="rotate" appear type="animation">
              <div class="post-creating ">

              </div>
            </transition> -->
            <!-- {{ isPostCreating }} -->
            <div v-if="isPostCreating">
              <transition name="flip" type="animations" appear >
                    <div class="status-box" style="margin-left:5%;">
                        
                    </div>
                </transition>
            </div>
            
            <div class="input" 
                      :class="{invalid: $v.name.required &&  !$v.name.minLength,
                      success: !$v.name.$invalid}">
              <label for="title">Name of Dieses
                <input type="text" 
                  name="name" 
                  id="name"
                  @blur="$v.name.$touch()"
                  class="form-control"
                  v-model="name">
              </label>
            </div>
            <div class="input"
                :class="{invalid: $v.category.required &&  !$v.category.minLength,
                      success: !$v.category.$invalid}">
              <label for="title">Category of  Dieses 
                <input 
                  type="text" 
                  class="form-control"
                  v-model="category"
                  @blur="$v.category.$touch()">
              </label>
            </div>
            <div class="input"
            :class="{invalid: $v.solution.required &&  !$v.solution.minLength,
                      success: !$v.solution.$invalid}">
              <label for="desc" style="verticle-align:top;">solutions</label>
              <div class="desc-wrapper">
                <textarea 
                  cols="30" rows="1" 
                  class="form-control"
                  v-model="solution"
                  @input="$v.solution.$touch()"
                ></textarea>
                <input type="button" 
                  class="btn btn-primary add-button" 
                  value="ADD"
                  style="display:inline;"
                  @click.prevent="addSolution"
                  :disabled="$v.solution.$invalid"> <br>
                  <!-- @submit.prevent -->
              </div>
              <div class="post-solutions">
                <label for="">Final Solutions list  </label>
              <ul>          
                <li v-for ="solution in solutions" :key="solution.id" class="alert alert-success mt-2">
                  {{ solution }}
                </li>
              </ul>
            </div>
                
            </div>
            <div class="submit-form">
              <button 
                class="btn btn-primary"
                :disabled="$v.name.$invalid || $v.category.$invalid"
                @click="savePost">
                Create
              </button>
            </div>
            
          </div>
          <div class="col-md-6" v-else>
            <p>you can't create post  </p>
            <p>you are not verified please contact us </p>
          </div>
      </div>
      
      <!-- <div class="row" >
        <div class="col-md-12 mt-5">
          <div v-if="postedId">
            <p class="alert alert-success">Post Created Successfully!!</p>
            <router-link :to="{name :'diseasesolutions', params: { id : postedId}}" target="_blank"> Go to Disease Details</router-link> || 
            <a href="#" @click="goBack">Create New Post</a>
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
import AdminAlert from './AdminAlert.vue';
import { required , minLength} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      name : '',
      category: '',
      solution: '',
      solutions: [],
      inputText : null,
      creating : false,
    }
  },
  components: {
    // appPostListItem : PostListItem,
    // appPagination : Pagination,
    // appDeleteModal : DeleteModal,
    appAdminAlert: AdminAlert,
  },
  validations:{
      name:{
        required: required,
        minLength : minLength(3)
      },
      category:{
        required,
        minLength : minLength(3)
      },
      solution: {
          required,
          minLength : minLength(20)
        }


  },
  mounted(){
    // alert('mounted');
    // this.$store.dispatch('resetPostId');
  },
  created(){
    // alert('created');
  },
  methods:{
    savePost(){
      this.creating = true;
      let inputdata = { 'name': this.name, 'category': this.category, 'solutions': this.solutions}
      this.$store.dispatch('createPost',inputdata);
      // if(poststatus){
        // if(this.alertMessage.status){
            this.name = '';
            this.category= '';
            this.solution= '';
            this.solutions= [];
        // }
        
        // } 
    },
    addSolution(){
      this.solutions.push(this.solution);
      this.solution ='';
    },
    categorySuggest(){

    },
    goBack(){
      this.$router.go();
    }
  },
  computed:{
    postedId(){
      return this.$store.getters.getPostedDiseaseId;
    },
    isPostCreating(){
      return this.$store.getters.isPostCreating;
    },
    ispostCreated(){
      return this.$store.getters.ispostCreated;
    },
    authUser(){
      return this.$store.getters.authUser;
    },
    alertMessage(){
      return this.$store.getters.alertMessage;
    }
  }

}
</script>

<style scoped>
  .desc-wrapper {
    display:flex;
  }
  .input.invalid input{
    border:1px solid red;
    background-color:#ffc9aa;
  }
    .input.invalid label{
    color:red;
  }
  .input.success input{
    border: solid 2px green;
  }
  
  .input.success textarea{
    border: solid 2px green;
  }
   .input.success label{
    color: green;
  }
  ul li{
    list-style-type: square;
  }

  .post-creating{
    height: 60px;
    width:60px;
    border-radius: 5px;;
    animation: slide 2s infinite;
    
  }
  .alert-link a{
    font: 'popins' bold ;
  }
  .rotate-enter{

  }
  .rotate-enter-active{
    animation: slide 2s infinite;

  }
  .rotate-leave{

  }
  .rotate-leave-active{
    animation: slide 2s reverse infinite;
    /* animation: zoom-out 2s reverse infinite; */
  }
  @keyframes slide{
      /* transform: rotateX(80deg) 1s; */
      /* transform: translateX(60px);
      background-color:seagreen;
      opacity: .2 1s; */
      0% {
        transform: translateX(5px);
        transition: .1s;
        opacity: .2;
        background-color: green;
      }
      25% {
        transform: translateX(10px);
        transition: .1s;
        opacity: .6;
        background-color : green;
      }
      55% {
        transform: translateX(20px);
        transition: .1s;
        opacity: .1;
        background-color : green;

      }
      75% {
        transform: translateX(10px);
        transition: .1s;
        opacity: .6;
        background-color : red;

      }
      100% {
        transform: translateX(5px);
        transition: .1s;
        opacity: .2;
        background-color : red;

      }
    }

    /* to{
    transform: translateY(-60px) 1s;
      background-color: green;
      opacity: 1 1s ;
    } */
    @keyframes slide-down {
    from{
      /* transform: rotateX(80deg) 1s; */
      transform: translateY(-60px);
      background-color: red;
      opacity: .2 1s;

    }
    to{
    transform: translateY(60px) 1s;
      background-color: red;
      opacity: 1 1s ;
    }
  }

.status-box{
  height: 40px;
  width: 40px;
  border-radius: 50%;;
  /* background-color: red; */
  animation: flip 2s infinite ease-out;
}
  .flip-enter-active{
    animation: flip forwards ease-in;
    
    /* flip */
    transition: 1s;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    /* -moz-transform: perspective(1000px); */
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;    
}
  .flip-leave-active{
    animation:flip  ease-in infinite;
  }
      @keyframes flip {
      
    0%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      background-color: yellow;
      /* opacity: 1s; */
      -webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      -o-transform: rotateX(0deg);
      transform: rotateX(0deg);
      
    }
    10%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      background-color: yellow;
      /* opacity: 1s; */
      -webkit-transform: rotateX(30deg);
      -moz-transform: rotateX(30deg);
      -o-transform: rotateX(30deg);
      transform: rotateX(30deg);
      
    }
    20%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      background-color: yellow;
      /* opacity: 1s; */
      -webkit-transform: rotateX(60deg);
      -moz-transform: rotateX(60deg);
      -o-transform: rotateX(60deg);
      transform: rotateX(60deg);
      
    }
    30%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      background-color: yellow;
      /* opacity: 1s; */
      -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      -o-transform: rotateX(90deg);
      transform: rotateX(90deg);
    }
    40%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      /* background-color: green; */
      /* opacity: 1s; */
      -webkit-transform: rotateX(120deg);
      -moz-transform: rotateX(120deg);
      -o-transform: rotateX(120deg);
      transform: rotateX(120deg);  
      background-color: yellow;

    }
    45%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      /* opacity: 1s; */
      -webkit-transform: rotateX(150deg);
      -moz-transform: rotateX(150deg);
      -o-transform: rotateX(150deg);
      transform: rotateX(150deg);
      background-color: yellow;

    }
    50%{
      /* opacity: 1s; */
      -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -o-transform: rotateX(180deg);
      transform: rotateX(180deg);  
      background-color: yellow;

    }
    55%{
      background-color: yellow;
      /* opacity: 1s; */
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }

    60%{
      background-color: green;
      /* opacity: 1s; */
      -webkit-transform: rotateY(-90deg);
      -moz-transform: rotateY(-90deg);
      -o-transform: rotateY(-90deg);
      transform: rotateY(-90deg);      
    }
    70%{
      background-color: green;
      /* opacity: 1s; */
      -webkit-transform: rotateY(-60deg);
      -moz-transform: rotateY(-60deg);
      -o-transform: rotateY(-60deg);
      transform: rotateY(-60deg);      
    }
    80%{
      background-color: green;
      /* opacity: 1s; */
      -webkit-transform: rotateY(-30deg);
      -moz-transform: rotateY(-30deg);
      -o-transform: rotateY(-30deg);
      transform: rotateY(-30deg);      
    }
    85%{
      background-color: red;
      /* opacity: 1s; */
      -webkit-transform: rotateY(-0deg);
      -moz-transform: rotateY(-0deg);
      -o-transform: rotateY(-0deg);
      transform: rotateY(-0deg);
    }
    90%{
      background-color: red;
      /* opacity: 1s; */
      -webkit-transform: rotateY(30deg);
      -moz-transform: rotateY(30deg);
      -o-transform: rotateY(30deg);
      transform: rotateY(30deg);      
    }

    95%{
      background-color: red;
      /* opacity: 1s; */
      -webkit-transform: rotateY(60deg);
      -moz-transform: rotateY(60deg);
      -o-transform: rotateY(60deg);
      transform: rotateY(60deg);
      
    }
    100%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); */
      background-color: red;
      /* opacity: 1s; */
      -webkit-transform: rotateY(90deg);
      -moz-transform: rotateY(90deg);
      -o-transform: rotateY(90deg);
      transform: rotateY(90deg);
      
    }
    /* 10%{
      /* transform: rotateX(80deg) 1s; */
      /* transform: flipX(180); 
      background-color: red;
      opacity: .2 1s;
      -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -o-transform: rotateX(180deg);
      transform: rotateX(180deg);
      
    }
    
    100%{
      -webkit-transform: rotateY(-180deg);
      -moz-transform: rotateY(-180deg);
      -o-transform: rotateY(-180deg);
      transform: rotateY(-180deg);
      background-color: green;
      opacity: 1 1s ;
    /* }  */
  }

</style>