<template>
  <div class="hello">
    {{msg}}
    <button @click='childclick'>myevent</button>
    {{numberToDo}}
    <slot>no data</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    'number-to-do':[String,Number]
  },
  methods:{
  	childclick(){
  		this.$emit('my-event',this.msg)
  	}
  },
  data () {
    return {
      msg: 'HelloWorld!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
