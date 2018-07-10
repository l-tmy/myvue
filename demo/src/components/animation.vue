<template>
	<div>
		<h1>animation</h1>
		<transition name="fade">
			<p v-show='show'>i am show</p>
		</transition>		
		<button v-on:click='toggleShow'>
			切换
		</button>

	</div>
</template>
<script type="text/javascript">
	export default{
		name:'animation',
		data(){
			return{
				show:true
			}
		},
		methods:{
			toggleShow(){
				this.show=!this.show;
			}
		}
	}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
		  transition: opacity .5s;
		}
		.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
		  opacity: 0;
		}
</style>