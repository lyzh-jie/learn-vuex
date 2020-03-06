<template>
  <div>
    <p>次数{{count}},如果是偶数显示{{addEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementEven">increment if even</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0
    }
  },
  computed:{
    addEven:function(){
      return this.count % 2===0?'偶数':'奇数';
    }
  },
  methods:{
    increment:function(){
      this.count++
    },
    decrement:function(){
      this.count--;
    },
    incrementEven(){
      if(this.count%2===0){
        this.count++
      }
    },
    incrementAsync(){
      setTimeout(()=>{
        this.count++;
      },1000)
    }
  }
}
</script>

<style lang="scss" scoped>
 
</style>