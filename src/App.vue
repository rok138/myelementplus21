<template>
	<div id="app">
	  <div class="baner">
	  	<i class="fab fa-github-square fa-3x"></i>	<!-- <i class="fa fa-github fa-3x"></i>	 -->		
	  	<img v-show="!isCollapse" src="@/assets/logo2.png" />				
	  	<div class="baner_icon"  >
	  		<i class="fas fa-bars" @click="isCollapse=!isCollapse"/>	 <!-- <i class="fa fa-bars" @click="isCollapse=!isCollapse"/>	 -->					
	  		<i class="fas fa-search"/>  <!-- <i class="fa fa-search"/> -->
	  	</div>
	  </div>
	  <div class="container">
	  	<NavBarLeft class="nav" :isCollapse="isCollapse" ></NavBarLeft>							
	  	<div class="main_relative">						
	  		<div class="main">
	  			<router-view></router-view>
	  		</div>			
			<GoTop target=".main" ></GoTop>
	  		<div class="footer">© 2021 — Admin Pro Admin by tac.com</div>
	  	</div>			
	  </div>
	</div>
</template>

<script>
import NavBarLeft from '@/components/NavBarLeft'
import GoTop from '@/components/GoTop'

export default {
	name: 'App',
	data() {
		return {
		  isCollapse: true
		}
	},
	components:	{
		NavBarLeft,
		GoTop
	},
	methods:{					
	}
}
</script>

<style scoped>
/* @import url("./assets/fonts/fonts.css"); */
#app {
	position: absolute;
	height: 100%;
	width: 100%;
	/* background-color: green; */
	
	font-family:  Helvetica, Arial, sans-serif, SourceHanSansCN-Regular-2, impact;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */	
}
.baner {
	position: fixed;
	top:0;
	height: 65px;
	width: calc(100% - 17px);				
	background-color: #ffffff;  
	z-index: 200;
	
	display: flex;
	align-items: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.baner>i {
	margin: 10px;
}
.baner_icon {
	position: absolute;
	left:200px;
	display: flex;
	flex-direction:row;
	align-items: center;
	justify-content: center;
}
.baner_icon i {	
	display: flex;
	flex-direction:row;
	align-items: center;
	justify-content: center;
	font-size:19px;	
	color:#b2b2b2;
	width: 50px;
	height: 50px;	
	border-radius: 50%;
}
.baner_icon i:hover {
	background-color:#f1f1f1;
}
.baner_icon i:active {
	background-color:#afafaf;
}
.container {		
	display: flex;
	background-color: #e9eef3;
	height: 100%;
	width: 100%;
	overflow: hidden;		
}			
.nav {			
/* 	width: 70px;
	position: fixed;
	left:0;
	z-index: 300; */	
	box-sizing: border-box;
	height: calc(100%-65px);
	margin-top: 65px;								
	word-wrap: break-word;
	word-break: break-all;
	overflow: auto;						
	/* background-color: #85d989;			 */
}			
.nav::-webkit-scrollbar { width: 0 !important } /* 隐藏滚动条 chrome 和Safari*/
.nav { -ms-overflow-style: none; } 				/* 隐藏滚动条 兼容IE 10+ */
.nav { scrollbar-width: none;}					/* 隐藏滚动条 兼容Firefox */

.main_relative {
	position: relative;
	height: 100%;
	width: 100%;	
	/* margin-left: 65px; */
	
}
.main {
	box-sizing: border-box;	
	word-wrap: break-word;
	word-break: break-all;
	overflow: auto;
	overflow-y:scroll;
	width: 100%;
	height: 100%;
	padding-top:80px;
	padding-bottom: 80px;
	padding-left: 20px;
	padding-right: 20px;					
}
.footer {
	position: absolute;			
	bottom: 0px;					
	width: calc(100% - 17px);				
	height: 65px;
	background-color: #ffffff; 	
	display: flex;
	flex-direction:row;
	align-items: center;
	z-index: 200;
}

</style>
