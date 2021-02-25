import { createRouter, createWebHistory } from 'vue-router'
const Test = () => import('@/components/Test')
const IndexDB = () => import('@/components/IndexDB')
const Dexie_test = () => import('@/components/Dexie_test')
const Media = () => import('@/components/Media')
const GoTopTest = () => import('@/components/GoTopTest')

const Test2 = () => import('@/components/Test2')
const Table_Widh = () => import('@/components/Table/Table_Widh')
const Table_gun = () => import('@/components/Table/Table_gun')
const Form_NumValide = () => import('@/components/Form/Form_NumValide')
const Form_Validate = () => import('@/components/Form/Form_Validate')
const Form_CustomValidate = () => import('@/components/Form/Form_CustomValidate')
const FontAweSome = () => import('@/components/FontAweSome')

const Home = { template: '<div>Home</div> ' }
const Home2 = { template: '<div>Home2<router-view class="view"></router-view></div> ' }
const About = { template: '<div>About</div>' }
const About2 = { template: '<div>About2<router-view class="view"></router-view></div>' }
const About21 = { template: '<div>About21</div>' }
const About22 = { template: '<div>About22</div>' }
const Login = { template: '<div>Login</div>' }
const NotFound = { template: '<div>NotFound 404</div>' }

export const router = createRouter({
  history: createWebHistory(),  
  routes: [
	  { 
		  path: '/', 
		  component: Home ,  
		  name:'Home',
		  iconCls: 'el-icon-s-home',
		  
	  },
	  {
		  path: '/Test', 
		  component: Test ,  
		  name:'Test',
		  iconCls: 'el-icon-s-promotion'
	  },
	  {
	  		  path: '/Media', 
	  		  component: Media ,  
	  		  name:'Media',
	  		  iconCls: 'el-icon-s-promotion'
	  },	  
	  {
	  		  path: '/Test2', 
	  		  component: Test2 ,  
	  		  name:'Test2',
	  		  iconCls: 'el-icon-s-promotion'
	  },
	  {
	  		  path: '/IndexDB', 
	  		  component: IndexDB ,  
	  		  name:'IndexDB',
	  		  iconCls: 'el-icon-s-promotion'
	  },
	  {
	  		  path: '/Dexie_test', 
	  		  component: Dexie_test ,  
	  		  name:'Dexie_test',
	  		  iconCls: 'el-icon-s-promotion'
	  },
	  {
		  path: '/Form', 
		  // component:{ render: c=> c('router-view') },  
		  component:{ template:'<router-view/>'}, 
		  name:'表单',
		  iconCls: 'el-icon-s-promotion',
		  children:[
			  { name:'表单校验', path:'/Form_Validate', component: Form_Validate},
			  { name:'表单自定义校验', path:'/Form_CustomValidate', component: Form_CustomValidate},
			   { name:'表单数字校验', path:'/Form_NumValide', component: Form_NumValide},
			  
		  ]
	  },{
	  		  path: '/Table', 
	  		  // component:{ render: c=> c('router-view') },  
	  		  component:{ template:'<router-view/>'}, 
	  		  name:'表格',
	  		  iconCls: 'el-icon-s-promotion',
	  		  children:[
	  			  { name:'表格固定宽度', path:'/Table_Widh', component: Table_Widh},
	  			  { name:'固定列和表头', path:'/Table_gun', component: Table_gun},
	  			   // { name:'表单数字校验', path:'/Form_NumValide', component: Form_NumValide},
	  			  
	  		  ]
	  },{
		  path: '/FontAweSome', 
		  component: FontAweSome ,  
		  name:'FontAwe',	  		  
		  iconCls: 'fab fa-font-awesome'
	  },{
		  path: '/GoTopTest', 
		  component: GoTopTest ,  
		  name:'GoTopTest',	  		  
		  iconCls: 'fab fa-font-awesome'
	  },
	  // { 
		 //  path: '/About', 
		 //  component: About , 
		 //  name:'About',
		 //  iconCls: 'el-icon-question'
	  // },
	  {
		path: '/Home2',
		component: Home2,
		name: 'Home2',
		iconCls: 'el-icon-s-flag',
		// leaf: true,//只有一个节点
		children: [
			{ 
			  path: '/Home2About', 
			  component: About, 
			  name: 'Home2About',
			  iconCls: 'el-icon-s-flag'
			}
		]
	  },
	  {
		path: '/About2',
		component: About2,
		name: 'About2',
		iconCls: 'el-icon-s-flag',
		// leaf: false, //多个节点
		children: [
			{ path: '/About21', component: About21, name: 'About21', iconCls: 'el-icon-star-on'},
			{ path: '/About22', component: About22, name: 'About22', iconCls: 'el-icon-star-on'}
		]
	  },
	  {
		path: '/login',
		name: 'Login',
		component: Login,
		hidden: true
	  },	  
	  {
		path: '/404',
		hidden: true,
		name: '',
		component: NotFound
	  },
	  {
		path: '/:pathMatch(.*)*',
		hidden: true,
		redirect: { path: '/404' }
	  }
  ],
})

import { START_LOCATION } from 'vue-router'
router.beforeEach((to, from) => {
  if (from === START_LOCATION) {
    console.log('initial navigation', router.options)
  }
})
