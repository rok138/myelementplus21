<template>	
	<h4>尺寸大小</h4>
	<div style="font-size: 24px;">
		<i class="fas fa-camera fa-xs"></i>
		<i class="fas fa-camera fa-sm"></i>
		<i class="fas fa-camera fa-lg"></i>
		<i class="fas fa-camera fa-2x"></i>
		<i class="fas fa-camera fa-3x"></i>
		<!-- <i class="fas fa-camera fa-5x"></i> -->
		<!-- <i class="fas fa-camera fa-7x"></i> -->
		<!-- <i class="fas fa-camera fa-10x"></i> -->
	</div>
	<h4>固定宽度:添加fa-fw类,具有fa-fw类的i会具有相同的宽度</h4>
	<div style="font-size: 1rem;">
		<div><i class="fas fa-skating fa-fw" style="background:DodgerBlue"></i> Skating</div>
		<div><i class="fas fa-skiing fa-fw" style="background:SkyBlue"></i> Skiing</div>
		<div><i class="fas fa-skiing-nordic fa-fw" style="background:DodgerBlue"></i> Nordic Skiing</div>
		<div><i class="fas fa-snowboarding fa-fw" style="background:SkyBlue"></i> Snowboarding</div>
		<div><i class="fas fa-snowplow fa-fw" style="background:DodgerBlue"></i> Snowplow</div>
	</div>
	<h4>使用fa-ul和fa-li替换无序列表中的默认项目符号</h4>
	<ul class="fa-ul">
		<li><span class="fa-li"><i class="fas fa-check-square"></i></span>List icons can</li>
		<li><span class="fa-li"><i class="fas fa-check-square"></i></span>be used to</li>
		<li><span class="fa-li"><i class="fas fa-spinner fa-pulse"></i></span>replace bullets</li>
		<li><span class="fa-li"><i class="far fa-square"></i></span>in lists</li>
	</ul>
	<h4>旋转 使用fa-rotate- *和fa-flip- *类</h4>
	<div class="fa-2x">
		<i class="fas fa-snowboarding"></i>
		<i class="fas fa-snowboarding fa-rotate-90"></i>
		<i class="fas fa-snowboarding fa-rotate-180"></i>
		<i class="fas fa-snowboarding fa-rotate-270"></i>
		<i class="fas fa-snowboarding fa-flip-horizontal"></i>
		<i class="fas fa-snowboarding fa-flip-vertical"></i>
		<i class="fas fa-snowboarding fa-flip-both"></i>
	</div>
	<h4>使用fa-spin类使任何图标旋转，或者使用fa-pulse使其进行8方向旋转 </h4>
	<div class="fa-2x">
		<i class="fas fa-spinner fa-spin"></i>
		<i class="fas fa-circle-notch fa-spin"></i>
		<i class="fas fa-sync fa-spin"></i>
		<i class="fas fa-cog fa-spin"></i>
		<i class="fas fa-spinner fa-pulse"></i>
		<i class="fas fa-stroopwafel fa-spin"></i>
	</div>
	<h4>使用fa-border和fa-pull-right或fa-pull-left可以轻松获得引号或文章图标。</h4>
	<i class="fas fa-quote-left fa-2x fa-pull-left"></i>
	Gatsby believed in the green light, the orgastic future that year by year recedes before us.
	It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
	And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
	<br/><br/>
	<i class="fas fa-arrow-right fa-2x fa-pull-right fa-border"></i>
	##Gatsby believed in the green light, the orgastic future that year by year recedes before us.
	It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
	And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
	
	<h4>要堆叠的2个图标的父HTML元素上使用fa-stack类。 然后为常规尺寸的图标添加fa-stack-1x类，为较大的图标添加fa-stack-2x类。 fa-inverse可以与fa-stack-1x一起添加到图标中，以帮助实现剔除效果。</h4>
	<span class="fa-stack ">
		<i class="fas fa-square fa-stack-2x"></i>
		<i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
	  </span>
	  <span class="fa-stack ">
		<i class="fas fa-circle fa-stack-2x"></i>
		<i class="fas fa-flag fa-stack-1x fa-inverse"></i>		
	  </span>
	  <span class="fa-stack ">
		<i class="fas fa-square fa-stack-2x"></i>
		<i class="fas fa-terminal fa-stack-1x fa-inverse"></i>
	  </span>
	  <span class="fa-stack fa-2x">
		<i class="fas fa-square fa-stack-2x"></i>
		<i class="fas fa-terminal fa-stack-1x fa-inverse"></i>
	  </span>
	  <span class="fa-stack ">
		<i class="fas fa-camera fa-stack-1x"></i>
		<i class="fas fa-ban fa-stack-2x" style="color:Tomato"></i>
	  </span>	 
	<h4>堆叠图标默认为单个图标大小的两倍</h4>
	<i class="far fa-circle fa-2x"></i>
	  <span class="fa-stack" style="vertical-align: top;">
		<i class="far fa-circle fa-stack-2x"></i>
		<i class="fas fa-flag fa-stack-1x"></i>
	  </span>	
	<i class="fab fa-font-awesome fa-2x"></i>
	<i class="fab fa-github-square fa-2x"></i> 
</template>

<script>
	export default {
		name: 'FontAweSome',
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
