<template>  
   <div id="demo" class="demo ">这是一个测试</div>
   {{ va.menuBg }}
   <button @click="change">change</button>
   <!-- <div class="criticalError">criticalError</div> -->
   <!-- {{ bg_computed }} -->
</template>

<style lang="scss">
:root{
	--bg: #369;
}
.demo {
  background-color: var(--bg);
}
	
$coa:#af3 !default;	
	
.demo {
	color:$coa;
}
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
.criticalError {
  @extend .seriousError;
  position: fixed;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
}
@debug 10em + 12em;

</style>
<script>
import vars from "./vars.scss"

  export default {
    data () {
      return {        
		  bg:0
      }
    },
	computed:{			
		va(){
			return vars
		},
		// bg_computed(){
		// 	let  demo = document.getElementById('demo')	
		// 	return getComputedStyle(demo).getPropertyValue("--bg");	  
		// }		
	},
	methods:{			
		change(){					
			let  demo = document.getElementById('demo')	
			// this.bg = demo.style.getPropertyValue('--bg')
			this.bg = getComputedStyle(demo).getPropertyValue("--bg");
			console.log(this.bg)
			demo.style.setProperty('--bg',"red")
		}
	}
    
  }
</script>