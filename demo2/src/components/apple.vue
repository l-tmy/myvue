<template>
	<div>
		<h1>apple</h1>
		<button @click='getparams'>获取参数</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Apple',
		methods:{
			getparams(){
				console.log(this.$route.params);
			}
		}
	}
</script>
<style>
	
</style>