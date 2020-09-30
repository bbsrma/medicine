export const getters = {
    getAllDiseases(state){
      return state.diseases;
    },
    postFetchingError(state){
      return state.postFetchingError;
    },


    getTopViewed(state){
      return state.topViewed;
    },
    topViewPostFetching(state){
      return state.topViewPostFetching;
    },
    topViewPostFetchingFailed(state){
      return state.topViewPostFetchingFailed;
    },


    getPostedDiseaseId(state){
      return state.diseaseId;
    },
    isPostCreating(state){
      return state.isPostCreating;
    },
    ispostCreated(state){
      return state.isPostCreated;
    },
    isPostDeleting(state){
      return state.isPostDeleting;
    },

    alertMessage(state){
      return state.alertMessage;
    },

    //admin post deleting getters 
    isAdminPostDeletingModal(state){
      return state.isAdminPostDeletingModal;
    },
    adminPostDeletingGetters(state){
      return state.adminDeletingPost;
    },
    isAdminPostDeleted(state){
      return state.isAdminPostDeleted;
    },
    isAdminPostDeleting(state){
      return state.isAdminPostDeleting;
    },



    adminPostDeletedMessage(state){
      return state.adminPostDeletedMessage;
    },
    diseaseCount(state){
      return state.disease.length;
    },
    isPostLoading( state ){
      return state.isPostLoading;
    },
    getPostDetails(state){
      return state.postDetails;
    },
    isPostDetailsLoading(state){
      return state.isPostDetailsLoading
    },
    isRegistering(state){
      return state.isRegistering;
    },
    getAllUser(state){
      return state.allUser;
    },
    getUserProfileLoading(state){
      return state.isProfileLoading
    },
    getUser(state){
      return state.user;
    },
    isVerifying(state){
      return state.isVerifying;
    },
  

    getCategories(state){
      return state.categories;
    },
    isCategoryLoading(state){
      return state.isCategoryLoading;
    },
    categoriesListing(state){
      return state.categoreisPost;
    },
    categoriesPagination(state){
      return state.categoryPagination;
    },
    categoryFetchingError(state){
      return state.categoryFetchingError;
    },




    diseasePagination(state){
      return state.diseasePagination;
    },
    adminDiseasePagination(state){
      return state.adminDiseasePagination;
    },
    categoriesPostListingLoading(state){
      return state.isCategoriesPostLoading;
    },
    getHomepageDiseases(state){
      return state.homePageDiseases;
    },
    isSearching(state){
      return state.searching;
    },
    isPostDetailsLoadingF(state){
      return state.postDetailsLoadingF;
    },
    getPostDetailsF(state){
      return state.postDetailsF;
    },
    getPaginationLink(state){
      return state.paginationDetails;
    },
    isLoggedIn( state){
      return !!state.token;
    },
    isAuthenticated(state){
      return state.idToken !== null;
    },
    loginGetters(state){
      return state.login;
    },
    authUser(state){
        return state.authUser;
    },
    serverValidation(state){
      return state.serverValidation;
    },
    registrationErrorFromServer(state){
      return state.registrationErrorFromServer;
    },

    messages(state){
      return state.messages;
    }
  }