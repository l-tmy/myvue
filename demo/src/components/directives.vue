<template>
	<div>
		<p v-color="'red'" v-fontsize="'20px'">自定义指令</p>
		<input type="text" name="" v-focus>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'directives',
		directives:{
			color:function(el,binding){
				el.style.color=binding.value
			}
		}
	}
</script>
<style>
	
</style>