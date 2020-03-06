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
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['count']),
    ...mapGetters(['addEven'])
  },
  methods:{
    increment(){
      this.$store.commit('increment');
    },
    decrement(){
      this.$store.commit('decrement');
    },
    incrementEven(){
      const obj = this.$store.state;
      this.$store.dispatch('incrementEven',obj);
      // 传的参数一般为对象，其他也可
    },
    incrementAsync(){
      const obj = this.$store.state;
      this.$store.dispatch('incrementAsync',obj)
    }

  }
  
}
</script>

<style lang="scss" scoped>
 
</style>