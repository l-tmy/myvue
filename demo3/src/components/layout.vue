<template>
	<div id='layout'>
		<div class='app-head'>header</div>
		<div class='app-content'>
			<router-view></router-view>
		</div>
		<div @click='update("success")'>{{test}}</div>
		<div class='app-footer'>footer</div>
	</div>
</template>
<script type="text/javascript">
	import {mapState,mapMutations} from 'vuex'
	export default{
		name:'layout',
		data(){
			return{

			}
		},
		computed:{
			...mapState({
				test:state=>state.show
			})
		},
		methods:{
			...mapMutations({
				update:'updatedata'
			})
		}
	}
</script>
<style>
	
</style>