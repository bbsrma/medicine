import axios from 'axios';
import router from '../router/index';
import { authHeader } from '../_helpers/auth-header';

export const actions = {
    async mostViewed( context ){
      context.commit('TOP_VIEWED_POST_LOADING');
      let response= null;
      try{
        response = await axios.get('disease/view/top');
      }
      catch{
        context.commit('FETCHING_TOP_VIEW_POST_FAIL');
        setTimeout(()=>{
          context.dispatch('mostViewed');
        },10000);
        return;
      }
      context.commit('SET_TOP_VIEWED_DISEASES', response.data);

    },
    async createPost({ commit , state}, payload){
      commit('POST_CREATING');
        let requestOptions = {
            headers : authHeader()
        };
        try{
          const postdata = {'postdetails': payload, 'created_by': state.authUser.id};
          const result = await axios.post('/admin/post/create',postdata, requestOptions)
           const responsedata =  {
              'status' : 1,
              'message' : 'post Created Successfully!!',
              'data' : result.data
            }
          commit('POST_CREATED', responsedata);
          setTimeout(()=>{
            commit('CLEAR_ADMIN_ALERT');
          },8000)
        }
        catch{
          const responsedata =  {
            'status' : 0,
            'message' : 'post couldnt created!!',
            'data' : ''
          }
          // alert('something went wrong post cant created')
          commit('ERROR_MEFSSAGE',responsedata);
          setTimeout(()=>{
            commit('CLEAR_ADMIN_ALERT');
          },8000)
          return 
        }
    },
    
    //adminpost delete related actions
    adminDeletePostModal({commit}, payload){
      // const diseaseData = { 'disease': disease, 'frontendId': frontendId}
      commit('ADMIN_DELETE_POST_MODAL', payload);
    },
    closeDeleteModal({ commit }){
      commit('CLOSE_ADMIN_POST_DELETE_MODAL');
    },
    async deleteAdminPost({ commit, dispatch }, postDetails){
      try{
          let requestOptions = {
              headers : authHeader()
          };
          commit('ADMIN_POST_DELETING');
          const response = await axios.post('/admin/post/'+postDetails.postId+'/delete','', requestOptions);
          // console.log(response);
          // // return
          if(response.data.status === 'success')
            {
              commit('ADMIN_POST_DELETED', {'data' : response.data.disease, 'message': response.data.message, 'status': 1});
              dispatch('deleteFromFrontend',postDetails.frontendId);
              dispatch('clearPostDeleteMessages');
          }
          else
          commit('ADMIN_POST_DELETE_FAIL', { 'message': response.data.message , 'status': 0});
          dispatch('clearPostDeleteMessages');
      }
      catch{
        // alert('something went wrong');
        commit('ADMIN_POST_DELETE_FAIL', { 'message': 'post couldnt deleted' , 'status': 0});
        commit('ADMIN_POST_DELETING_ERROR');
        dispatch('clearPostDeleteMessages')
      }
    },
    clearPostDeleteMessages({ commit }){
      setTimeout(()=> {
        commit('CLEAR_ADMIN_POST_DELETED_MESSAGE');
      },4000)
    },
    deleteFromFrontend(context,frontendId){
      context.state.diseases.splice(frontendId, 1); 
      // commit('DELETE_ADMIN_POST_FROM_FRONTEND',frontendId);
      console.log(context)
      console.log('frontendId'+frontendId);
    },



    async getAllDiseases(context){
      context.commit('POST_LOADING')
      const requestOptions = {
          headers: authHeader()
      };
      const response = await axios.get('/admin/'+ context.state.authUser.id+'/posts/',requestOptions);
      context.commit('GET_ALL_DISEASES',response.data.data);
      // context.commit('SET_HOME_PAGE_DISEASES', response.data.data)
        context.commit('SET_ADMIN_DISEASE_PAGINATION', 
            {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
    },
    async fetchPostDetails({ commit }, payload){
        const requestOptions = {
            headers: authHeader()
        };
      commit('POST_DETAILS_LOADING');
      const result = await axios.get('/admin/post/'+ payload +'/details', requestOptions);
      commit('GET_POST_DETAILS', result.data);
    },
    async getAllUser( context ){
      const requestOptions = {
        headers: authHeader()
    };
    console.log('ID TOKEN '+ JSON.stringify(context.state.idToken))
      try{
        const result = await axios.get('admin/users', requestOptions);
        context.commit('GET_ALL_USER', result.data);
      }
      catch{
        console.log('something went wrong')
        alert('something went wrong');
      }
    },
    async verifyUser(context, payload){
      const requestOptions = {
        headers: authHeader()
    };

      context.commit('VERIFYING_USER');
      const response = await axios.get('admin/user/'+payload+'/verify', requestOptions);
      context.commit('VERIFY_USER',response.data);
    },
    async promoteUser(context, payload){
      const requestOptions = {
        headers: authHeader()
    };

      context.commit('PROMOTING_USER');
      const response = await axios.post('admin/user/'+payload+'/promote', '', requestOptions);
      context.commit('PROMOTE_USER',response.data);
    },

    async setUserProfile(context, payload){
      context.commit('USER_PROFILE_LOADING')
      const requestOptions = {
        headers: authHeader()
    };
      const response = await axios.get('/admin/user/'+payload, requestOptions);
      context.commit('SET_USER_PROFILE', response.data);
    },
    async registerAccount({ commit }, payload){
      commit('REGISTERING');
      const response = await axios.post('admin/user/create', payload);
      console.log(response.data);
      if(response.data.user){
        commit('REGISTER_ACCOUNT', response);
        router.replace('auth/login');
      }
      else{
        commit('REGISTRATION_FAILURE', response.data);
        setTimeout( () => {
          commit('CLEAR_SERVER_REGISTRATION_ERROR');
        },4200);
        return
      }
    },
    async login(context, user){
      let response = await axios.post('auth/login', user);
      console.log(JSON.stringify(response.data));

      // if(response.statusText == 'OK' || response.status == 200){
      if(response.data.user){
  
        context.commit('LOGIN', response.data)
        context.commit('AUTH_USER',  response.data);
          router.push( { path: '/admin'});
        }
      else{
        context.commit('LOGIN_FAIL', response.data);
        context.dispatch('clearLoinError');
        setTimeout( ()=> {
          context.commit('CLEAR_SERVER_LOGIN_ERROR');
        },4200)
        return;
      }
      const expirationTime =  new Date(response.data.expires_at).getTime() - new Date().getTime() ;
      // alert('logout after response'+ response.data.expires_at);
      // alert('logout after in milisecond'+ expirationTime);
      context.dispatch('setAutoLogOutTimer', expirationTime);
    },
    logout(context){
      context.commit('LOGOUT');
    },
  
    // frontend related actions 
    async categoryListing(context){
      let response = null;
      context.commit('CATEGORY_LOADING');
      try{
        response = await axios.get('disesbycategory');
      }
      catch{
        // alert('something went wrong');
        context.commit('CATEGORY_FETCHING_ERROR');
        setTimeout(()=>{
          context.dispatch('categoryListing');
        },10000);
      }
      console.log(response);
      context.commit('CATEGORY_LISTING', response.data.data);
      context.commit('SET_CATEGORY_PAGINATION', 
              {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
      
      return;      
    },
    // async gettingByCategory(context, category){
    //   context.commit('CATEGORIES_POST_LOADING'); 
    //   let result = await axios.get('post/bycategory/'+category);
    //   context.commit('GETTING_BY_CATEGORY', result.data);
    // },
    async getAllPost(context){
      context.commit('POST_LOADING');
      let response =null;
      try{
        response = await axios.get('posts');
      }
      catch{
        context.commit('FETCH_POST_ERROR');
        setTimeout(()=>{
          context.dispatch('getAllPost');
        },10000)
      }
      context.commit('SET_HOME_PAGE_DISEASES',response.data.data);
      context.commit('SET_DISEASE_PAGINATION', 
            {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
    },
    async getPostByLink(context, pageNumber){
      let response = await axios.get('posts?page='+pageNumber);
      context.commit('SET_HOME_PAGE_DISEASES', response.data.data)
    },
    async getPaginationLink(context, payload){
      let response;
      if(payload.parentComponent === 'admin_PostList'){
        const requestOptions = {
          headers: authHeader()
      };
      response = await axios.get(payload.paginationDetails.path+'?page='+payload.pageNumber, requestOptions);
      }
      else{
        response = await axios.get(payload.paginationDetails.path+'?page='+payload.pageNumber);
      }
      if(payload.parentComponent === 'Categories'){
        context.commit('CATEGORY_LISTING', response.data.data)
        context.commit('SET_CATEGORY_PAGINATION', 
              {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
        }
      if(payload.parentComponent === 'Diseases'){
        context.commit('SET_HOME_PAGE_DISEASES', response.data.data)
        context.commit('SET_DISEASE_PAGINATION', 
            {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
        }
        if(payload.parentComponent === 'admin_PostList'){
          context.commit('GET_ALL_DISEASES', response.data.data)
        context.commit('SET_ADMIN_DISEASE_PAGINATION', 
            {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
        }
    },
    async productByCategory(context, category){
      context.commit('POST_LOADING');
      let response = await axios.get('post/bycategory/'+category);
      
      context.commit('SET_HOME_PAGE_DISEASES',response.data.data);
      context.commit('SET_DISEASE_PAGINATION', 
            {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
    },
    async searchDiseases(context, name){
      context.commit('SEARCHING');
      let response;
      if(name){
        response = await axios.get('post/postByName/'+ name);
      }
      else{
        response = await axios.get('posts')
      }
      context.commit('SET_HOME_PAGE_DISEASES', response.data.data);
      context.commit('SET_DISEASE_PAGINATION', 
            {'current_page': response.data.current_page,
              'from':response.data.from,
              'last_page': response.data.last_page,
              'path': response.data.path,
              'next_page_url': response.data.next_page_url
              });
    },

    async fetchPostDetailsFromFrontend({ commit }, payload){
      commit('POST_DETAILS_LOADING_FOR_FRONTEND');  
      const result = await axios.get('/post/'+ payload +'/details');
      commit('GET_POST_DETAILS_FOR_FRONTEND', result.data);
    },
    
    setAutoLogOutTimer( { commit }, expirationTime){
      setTimeout(() => {
        alert('logout user ');
        commit('LOGOUT')
      }, expirationTime)
    },
    tryAutoLogin(context){
      const token = localStorage.getItem('accessToken');
      if(!token)
        return
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      let expirationTime = localStorage.getItem('expirationTime');
      const now = new Date();
      if( now >= expirationTime){
        alert('now is greater than expiration time')
        return 
      }
      context.commit('AUTH_USER' , 
                      {'accessToken': token, 
                        'user': authUser, 
                        'expires_at':expirationTime});
      expirationTime =  new Date(expirationTime).getTime() - new Date().getTime() ;
      // alert('log out after' + expirationTime + ' milisecond');
      context.dispatch('setAutoLogOutTimer', expirationTime);
    },
    clearLoinError(context){
      setTimeout(() => {
        context.commit('CLEAR_LOGIN_ERROR')
      },4200)
    },



//chat related
  async sendMessage({ commit}, payload){
    commit('SENDMESSAGE', payload);
  }
}

  