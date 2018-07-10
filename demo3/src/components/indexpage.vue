<template>
	<div>
		index
		<v-date-picker :readonly="true" format="YYYY-MM-DD" width='100px' value='2015-9-5'></v-date-picker>
	</div>
</template>
<script type="text/javascript">
	import _ from 'lodash'
	import VDatePicker from './vueDatePicker'
	export default{
		name:'indexpage',
		components:{VDatePicker},
		created:function(){
			/*this.$http.get('list')
			.then(function(data){
				console.log(data);
			},function(err){
				console.log(err)
			})*/
		},
		data(){
			return {
				arr:[1,2,3,4,5,6,7,8],
				result:[]
			}
		},
		methods:{
			testlodash(){
				this.result=_.remove(this.arr,(n)=>{
					return n%2===0
				});
			}
		},
		created (){
			this.testlodash()
			console.log(this.result)
		}
	}
</script>
<style>
	
</style>