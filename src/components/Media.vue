<template>
	<video id="myVideoElement" src="http://localhost:65411/a.webm" controlsList="nodownload" controls  width=320 height=240 />
	<!-- <video id="myVideoElement2" src="http://localhost:65411/a.mp4" controls autoplay width=320 height=240/> -->
	<!-- <audio id="myaudio" src="http://localhost:50117/a.mp3" controls  width=320 height=240/> -->
	
	<!-- <i v-if="fullMode" class="fas fa-compress-arrows-alt"></i>
	<i v-else @click="fullscreenMode" class="fas fa-expand-arrows-alt"></i> -->	
	<i id="full" @click="fullscreenMode" class="fas fa-expand-arrows-alt"></i>
	<button @click="changeclass">changeclass</button>
</template>

<script>
function show_canplay_type(){
	let video_list={
		ogg: 'video/ogg',
		mp4: 'video/mp4',
		webm: 'video/webm',
		hls: 'application/x-mpegURL',
	}		
	const video = document.createElement('video');
	for(let key  in video_list){
		if(video.canPlayType(video_list[key])){
			console.log('can play video:'+key+" # " + video_list[key])
		}
	}
	
	let audio_list={
		mp3: 'audio/mpeg',			
		mp4: 'audio/mp4',
		aif: 'audio/x-aiff',
		wav:'audio/wav',
	}		
	const audio = document.createElement('audio');
	for(let key  in audio_list){
		if(audio.canPlayType(audio_list[key])){
			console.log('can play audio:'+key+" # " + audio_list[key])
		}
	}
}	
show_canplay_type()
export default {
    data () {
		return {        
			bg:0,
			fullMode:false
		}
    },
	methods:{
		fullscreenMode() {
		  this.fullMode=!this.fullMode
		  let elem = document.getElementById("myVideoElement")		  
		  if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) {
		    elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) {
		    elem.webkitRequestFullscreen();
		  }
		},
		changeclass(){
			// let full = document.getElementById("full")	
			// full.removeClass("fas fa-expand-arrows-alt").addClass("fa-compress-arrows-alt")			
		}
	}
}		
	
</script>

<style>
	video::-webkit-media-controls-fullscreen-button {
		/* display: none; */
		content: "aa";
		border: #0000CC 2px solid;
		background-color: red;
		width: 20px;
		height: 20px;
		/* z-index: 300; */		
	}
/* 	video{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1300;
	} */
	
	video::-webkit-media-controls-timeline {
		/* display: none; */
	}
</style>
