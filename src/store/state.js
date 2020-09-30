export const state = {
      diseases: null,
      diseaseId: null,

      isPostCreating: false,
      isPostCreated: false,

      isPostDeleting: false,      
      adminPostDeletedMessage: '',

      isAdminPostDeleting : false,
      isAdminPostDeletingModal : false,
      isAdminPostDeleted : false,
      adminDeletingPost : null,

      alertMessage :null, //use alertmessage for all post create delete edit operations
      
      

      isPostLoading: false,
      postFetchingError :false,
      postDetails : [],
      isPostDetailsLoading: false,
      
      isProfileLoading: false,
      isRegistering: false,


      isVerifying: false,
      isPromoting: false,

      authUser : null, //store authenticated user info
      allUser : null, //it is used in user listing (in admin)
      user : null, //it is used in user profile
      serverValidation : null,
      registrationErrorFromServer : null,

      topViewed: null,
      topViewPostFetching : false,
      topViewPostFetchingFailed :false,

      categories: [],
      isCategoryLoading : false,
      categoryPagination: null,

      categoryFetchingError : false,

      diseasePagination: null,
      adminDiseasePagination : null,
      
      getQuery:'',
      categoreisPost:[],
      isCategoriesPostLoading: false,
      homePageDiseases: [],
      searching: false,
      postDetailsF : null,
      postDetailsLoadingF: false,

      paginationDetails: '',
    
      //authentication related
      idToken: null,
      login: true,

      //chat related
      messages : []
    }
