<template>
  <div class="infinite-list-wrapper hidden-md-and-down" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" :key='i' class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
  <el-button @click="openFullScreen2">openFullScreen2</el-button>
  <div class="demo ">这是一个测试</div>
   <div class="amazon1 ">这是一个测试2</div>
    <div class="android ">这是一个测试3</div>
   <i class="fas fa-angle-left">yes</i>
</template>
<style>
@font-face {
  font-family: 'FontAwesome5Free';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf") format("truetype"); 
}
.android:before {
  content: "\F00C"; 
  font-family: FontAwesome5Free;
}
.amazon1:before{
	content: "\F031"; 
	font-family: FontAwesome5Free;
}	
.demo:before{
	content: "\F00C";
	font-family: FontAwesome5Free;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: #000;
	/* position: absolute; */
	/* top: 0px; */
	/* right: 5px; */
	/* z-index: 10 */
}
.demo:after{
	content: "hello";
	font-family: 'Font Awesome 5 Free';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: #000;

}
</style>
<script>
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      },
	  openFullScreen2() {
	          const loading = this.$loading({
	            lock: true,
	            text: 'Loading',
	            spinner: 'el-icon-loading',
	            background: 'rgba(0, 0, 0, 0.7)'
	          });
	          setTimeout(() => {
	            loading.close();
	          }, 2000);
	        }
    }
  }
</script>