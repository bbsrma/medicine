import  router  from '../router/index';

export const mutations = {
  
    POST_CREATING(state){
      state.isPostCreating = true;
    },
    POST_CREATED(state, payload){
      console.log(state + JSON.stringify(payload));
      state.isPostCreated = true;
      state.isPostCreating = false;
      state.alertMessage = payload;
    },
    CLEAR_ADMIN_ALERT(state){
      state.alertMessage = null;
    },
    ERROR_MEFSSAGE(state, payload){
      state.isPostCreating =false;
      state.alertMessage = payload;
    },


    // admin post deleted related Mutations 
    ADMIN_POST_DELETING(state){
      state.isAdminPostDeleting = true;
    },
    ADMIN_POST_DELETED(state, payload){
      state.isAdminPostDeleting = false;
      state.isAdminPostDeleted = true;
      state.isAdminPostDeletingModal = false;
      state.adminPostDeletedMessage = payload;
    },
    ADMIN_POST_DELETING_ERROR(state){
      state.isAdminPostDeleting = false;
    },
    ADMIN_POST_DELETE_FAIL(state,payload){
      state.isPostDeleting = false;
      state.adminPostDeletedMessage = payload;
      state.isAdminPostDeletingModal = false;
    },
    ADMIN_DELETE_POST_MODAL(state, payload){
      state.isAdminPostDeletingModal = true;
      state.adminDeletingPost = payload;
    },
    CLOSE_ADMIN_POST_DELETE_MODAL(state){
      state.isAdminPostDeletingModal = false;
      // state.isAdminPostDeleted = true;
    },
    CLEAR_ADMIN_POST_DELETED_MESSAGE(state){
      state.isAdminPostDeleted = false;
      state.adminPostDeletedMessage = null;
    },

    VIEW_POST_LINK(state, payload){
      state.diseaseId = payload.id;
      state.isPostCreating = false;
    },
    POST_LOADING(state){
      state.isPostLoading = true;
    },
    FETCH_POST_ERROR(state){
      state.postFetchingError = true;
      state.isPostLoading = false;
    },
    GET_ALL_DISEASES(state, payload){
      state.isPostLoading = false;
      state.diseases= payload;
    },
    POST_DETAILS_LOADING(state){
      state.isPostDetailsLoading = true;
    },
    GET_POST_DETAILS(state, payload){
      state.isPostDetailsLoading = false;
      state.postDetails = payload;
    },
    GET_ALL_USER(state,payload){
      state.allUser= payload;
    },
    REGISTERING(state){
      state.isRegistering = true;
    },
    REGISTER_ACCOUNT(state, payload){
      console.log('account create successfully');
      state.isRegistering = false;
      state.idToken = payload.id;
    },
    REGISTRATION_FAILURE(state, payload){
      state.registrationErrorFromServer = payload;
      return
    },
    CLEAR_SERVER_REGISTRATION_ERROR(state){
      state.registrationErrorFromServer = null;
    },
    LOGIN(state, payload){
      localStorage.setItem('accessToken', payload.accessToken);
      localStorage.setItem('authUser' , JSON.stringify(payload.user));
      localStorage.setItem('expirationTime' , payload.expires_at);
    },
    CLEAR_SERVER_LOGIN_ERROR(state){
      state.serverValidation = null;
    },
    AUTH_USER(state, payload){
      state.idToken = payload.accessToken;
      state.authUser = payload.user;
      state.expirationTime = payload.expires_at;
    },
    LOGIN_FAIL(state, payload){
      state.login = false;
      state.serverValidation = payload;
    },
    LOGOUT(){
      localStorage.removeItem('accessToken');
      localStorage.removeItem('authUser');
      localStorage.removeItem('expirationTime');
      router.go();
    },
    VERIFYING_USER(state){
      state.isVerifying = true;
    },
    VERIFY_USER(state, payload){
      state.allUser = payload
      state.isVerifying = false;
    },
    PROMOTING_USER(state){
      state.isPromoting = true;
    },
    PROMOTE_USER(state, payload){
      state.allUser = payload
      state.isPromoting = false;
    },

    USER_PROFILE_LOADING(state){
      state.isProfileLoading = true;
    },
    SET_USER_PROFILE(state, payload){
      state.user = payload;
      state.isProfileLoading = false;
    },
    CATEGORY_LISTING(state, payload){
      state.categories = payload;
      state.isCategoryLoading = false;
      state.categoryFetchingError = false;
    },
    SET_CATEGORY_PAGINATION(state, payload){
      state.categoryPagination = payload;
      state.isCategoryLoading = false;
      state.categoryFetchingError = false;
    },
    SET_DISEASE_PAGINATION(state, payload){
      state.diseasePagination = payload;
    },
    SET_ADMIN_DISEASE_PAGINATION(state, payload){
      state.adminDiseasePagination = payload;
    },
    CATEGORY_LOADING(state){
      state.isCategoryLoading = true;
    },
    GETTING_BY_CATEGORY(state, payload){
      state.categoreisPost = payload;
      state.isCategoriesPostLoading= false;
    },
    CATEGORIES_POST_LOADING(state){
      state.isCategoriesPostLoading= true;
    },
    SET_HOME_PAGE_DISEASES(state, payload){
      state.homePageDiseases = payload;
      state.postFetchingError = false;
      state.isPostLoading = false;
      state.searching = false;
    },


    TOP_VIEWED_POST_LOADING(state){
      state.topViewPostFetching =true;
    },
    SET_TOP_VIEWED_DISEASES(state, payload){
      state.topViewed = payload;
      state.topViewPostFetching= false;
      state.topViewPostFetchingFailed = false;
    },
    FETCHING_TOP_VIEW_POST_FAIL(state){
      state.topViewPostFetching= false;
      state.topViewPostFetchingFailed = true;
    },
    POST_DETAILS_LOADING_FOR_FRONTEND(state){
      state.postDetailsLoadingF = true;
    },
    SET_PAGINATION(state, payload){
      state.paginationDetails = payload;
    },
    GET_POST_DETAILS_FOR_FRONTEND(state, payload){
      state.postDetailsF = payload;
      state.postDetailsLoadingF = false;
    },
    SEARCHING(state){
      state.searching = true;
    },
    CLEAR_LOGIN_ERROR( state ){
      state.login= true;
    },
    CATEGORY_FETCHING_ERROR(state){
      state.isCategoryLoading = false;
      // alert('is category loading'+ state.isCategoryLoading);
      state.categories = [];
      state.categoryFetchingError = true;
    },


    //chat related

    SENDMESSAGE(state, payload){
      state.messages.push(payload);
    }
  };

  export default mutations;