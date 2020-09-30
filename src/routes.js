import FrontendHome from './components/frontend/Home.vue';
import AdminHome from './components/admin/AdminHome.vue';
import PostList from './components/admin/post/PostList.vue'
import CreatePost from './components/admin/post/Create.vue'
import Details from './components/admin/post/Details.vue'
import Solutions from './components/frontend/post/Solutions.vue';
import Dashboard from './components/admin/Dashboard';
// import DeletePostModel from './components/admin/post/Delete.vue';
import User from './components/admin/user/Index.vue';
import Profile from './components/admin/user/Profile.vue'
import Disease from './components/frontend/post/PostList.vue'
import Welcome from './components/frontend/Welcome.vue';
import Terms from './components/frontend/pages/Terms.vue'
import About from './components/frontend/pages/About.vue'
import Contact from './components/frontend/pages/Contact.vue'
import Chat from './components/frontend/chat/Chat.vue';
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue'
import DeleteModal from './components/admin/post/DeleteModal.vue'

import Test from './components/admin/Test.vue';

export const routes = [
    { path :'/', component: FrontendHome ,
        children: [
            {   path: '/', component: Welcome },
            {   path: 'diseases', component: Disease },
            {   path: 'disease/:id/solutions' , component : Solutions , name:'diseasesolutions'},
            { path : '/chat' , component :Chat, name: 'chat'},

        ]
    },
    { path: '/about' , component: About},
    { path: '/terms-conditions' , component: Terms},
    { path: '/contact',component: Contact},
    { path : '/disease/:id' , component :FrontendHome, name: 'diseasebycategory'},
    { path: '/auth/register', component: Register,
        beforeEnter(from, to, next){
            if(localStorage.getItem('accessToken'))
                    next('/admin');
                else
                next();
        }},
    { path: '/auth/login', component: Login,
        beforeEnter(from ,to ,next){
            if(localStorage.getItem('accessToken'))
                    next('/admin');
                else
                next();
        }},
    { path: '/admin' , component: AdminHome, 
        children: 
            [
                { path : '' , component: Dashboard },
                { path: 'posts' , component : PostList, name: 'adminDiseases' },
                { path: 'post/create' , component : CreatePost },
                { path: 'post/:id/details' , component : Details , name:'postdetails' },
                { path: 'post/:id/delete' , component : DeleteModal , name:'postdelete' },
                { path: 'user' , component : User , name:'users' },
                { path: 'user/:id/profile' , component : Profile , name:'userprofile' },
                // { path: 'user/:userid/verify' , component : VerifyUserAlert , name:'verifyuser'},
                { path: 'test' , component : Test }
            ],
            beforeEnter(to,from, next){
                if(localStorage.getItem('accessToken'))
                    next();
                else
                next('/auth/login');
            }
     },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
]