import './body.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueRouter);

const Home = ()=>import(/* webpackChunkName: "home" */'./home.vue');
const User = ()=>import(/* webpackChunkName: "user" */'./user.vue');
const Article = ()=>import(/* webpackChunkName: "article" */'./article.vue');
const UserInfo = ()=>import(/* webpackChunkName: "userinfo" */'./userinfo.vue');


const router = new VueRouter({
	routes:[
		{
			path:'/',
			component:Home
		},
		{
			path:'/user',
			component:User,
			children:[
				{
					path:':uid',
					component:UserInfo,
					props:true,
				}
			]
		},
		{
			path:'/article',
			component:Article
		},
	]
});

const vm = new Vue({
	el:'#app',
    router,
	data:{
		loading:false
	}
});