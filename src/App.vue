<template>
  <div>
    <p>次数{{$store.state.count}},如果是偶数显示{{$store.getters.addEven}}</p>
    <button @click="$store.commit('INCREMENT')">+</button>
    <button @click="$store.commit('DECREMENT')">-</button>
    <button @click="$store.dispatch('incrementEven')">increment if even</button>
    <button @click="$store.dispatch('incrementAsync')">increment async</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 
</style>