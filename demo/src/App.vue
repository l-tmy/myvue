<template>
  <div id="app" v-bind:tilte='tilte'>
    <directives></directives>
    <HelloWorld></HelloWorld>
    <div v-html='html'></div>
    <div v-text='html'></div>

   {{status?'count+1':'count-1'}}

   <ul>
    <li v-for="(item,index) in list"
        :key='index'
      >{{item.name}}-{{index}}</li>
   </ul>
   <p v-for='(value,key) in jsonob'>{{key}}-{{value}}</p>
   <!-- 事件 -->
   <button v-on:click='addItem'>addItem</button>

   <a v-bind:href='link' target="_blank">to baidu</a>
   <br>
   <input @keydown.enter='onkeydown'>
   <HelloWorld @my-event='myevent'></HelloWorld>
   <input type='radio' v-model='mybox' value='1'>1
   <input type='radio' v-model='mybox' value='2'>2
   <input type='radio' v-model='mybox' value='3'>3
   {{mybox}}
   <select v-model='mysele'>
     <option>one</option>
     <option>two</option>
     <option>three</option>
   </select>
   {{mysele}}
   <input placeholder="lazy" v-model.lazy='myvalue'>{{myvalue}}
   <HelloWorld number-to-do=12>
     <p>测试插槽功能test</p>
   </HelloWorld>
   <p :is='currentView'></p>
   <animation></animation>
  </div>
</template> 

<script>
import HelloWorld from './components/HelloWorld.vue'
import animation from './components/animation.vue'
import directives from './components/directives.vue'
export default {
  components:{
      HelloWorld: HelloWorld,
      animation:animation,
      directives:directives
  },
  name: 'App',
  methods:{
    addItem (){
      console.log(this.list)
      this.list.push({
        name:'pinaapple',
        price:56
      });
    },
    onkeydown(){
      console.log('on key down')
    },
    myevent(paramshelloword){
      console.log('onmyevent'+paramshelloword)
    }
  },
  data () {
    return {
      currentView:HelloWorld,
      myvalue:'',
      mysele:null,
      mybox:[],//必须要初始化     
      tilte:'123',
      status:true,
      count:1,
      html:'<h1>我是有格式的字符串</h1>',
      list:[ //遍历数组v-for
      {
        name:'apple',
        price:1
      },
      {
        name:'banana',
        price:2      
      }
      ],
      jsonob:{
        name:'apple',
        age:12,
        color:'red',
        weight:14
      },
      link:'http://www.baidu.com'
    }
  }
}
</script>

<style>
 div{
  cursor:pointer;
 }
</style>
