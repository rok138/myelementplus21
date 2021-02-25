<template>
	<el-menu 					
		router
		:default-active="$route.path"
		background-color="#1d2228" 
		text-color="#8e9093"
		active-text-color="#fafafb"
		class="el-menu-vertical-demo text-left" 					
		@open="handleOpen" 
		@close="handleClose" 
		@select="handelSelect"			
		:collapse-transition="true"
		:collapse="isCollapse"> 
		<template v-for="(item, index) in $router.options.routes" :key="index">
			<template v-if="item.hidden"></template>
			<template v-else>
				<!--二级菜单-->
				<template v-if="item.children">
					<el-submenu :index="item.path">
						<template #title>
							<i :class="item.iconCls"></i>
							<span>{{item.name}}</span>
						</template>
						<!-- <el-menu-item-group> -->
							<el-menu-item :index="child.path" :key="index" v-for="(child, index) in item.children">
								{{child.name}}
							</el-menu-item>
						<!-- </el-menu-item-group> -->
					</el-submenu>						
				</template>
				<!-- 一级菜单 -->
				<template v-else >
					<el-menu-item :index="item.path" >
					  <i :class="item.iconCls"></i>
					  <template #title>{{item.name}}</template>
					</el-menu-item>
				</template>
			</template>
		</template>
	  </el-menu>
</template>


<script>

export default {
	props:{
		isCollapse:{
			type:Boolean,
			default:true			
		}
	},
    data() {
      return {			
      };
    },	
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
	  handelSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .text-left{
	  text-align: left;	  
  }
  i.fas,
  i.fab {	
	  font-size: 20px;
	  margin: 0 9px 0 3px;
  }

</style>
