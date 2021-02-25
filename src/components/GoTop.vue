<template>
	 <div id="goTop" v-show="goTopShow" @click="goTop">
		 <slot >
			 <div class="__goTop">				 
				 UP
			 </div>
		 </slot>
	 </div>
 </template>
 <script>
 export default {
     name: "goTop",
	 props:['target','bottom'],
     data() {
         return {
             s: null,
             goTopShow: false
         };
     },     
     methods: {
         handleScroll() {
			 // console.log("this.s.scrollTop:",this.s.scrollTop)             
             if (this.s.scrollTop > 100) {
                 this.goTopShow = true;
             }
			 else{
				 this.goTopShow = false;
			 }
         },		 
         goTop() {
             let timer = null,
                 _that_s = this.s,
				 _that = this;
             cancelAnimationFrame(timer);
             timer = requestAnimationFrame(function fn() {
                 if (_that_s.scrollTop > 0) {
                     _that_s.scrollTop -= 250;              
                     timer = requestAnimationFrame(fn);
                 } else {
                     cancelAnimationFrame(timer);
                     _that.goTopShow = false;
                 }
             });
         }
     },	 
     mounted() {
		 this.s = document.querySelector(this.target)	
		 if(this.s)this.s.addEventListener("scroll", this.handleScroll);
		 if(this.s && this.bottom){
			 let t =document.getElementById("goTop")
			 t.style.bottom = this.bottom + 'px'
			console.log("this.bottom:",this.bottom)
		}
     },
     unmounted() {
         if(this.s)this.s.removeEventListener("scroll", this.handleScroll);
     }
 };
 </script>
  
 <style scoped>
#goTop {
	position: fixed;
	right: 40px;
	bottom: 100px;
	width: 40px;
	height: 40px;	
	cursor: pointer;
}
 .__goTop {     
	 font-size: 18px;
	 line-height: 40px;
	 text-align: center;
     border-radius: 10%;	 
	 color: #1989fa;
     background: #f2f5f6;
     box-shadow: 0 0 6px rgba(0, 0, 0, 0.12); 	 
 }
 .__goTop:hover {
     color: rgba(51, 153, 255, 1);
 }


 </style>
