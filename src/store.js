import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count:0
}
const getters = {
    addEven:function(){
                return state.count % 2===0?'偶数':'奇数';
            }

}
const actions = {
    incrementEven({commit}){
        if(state.count%2===0){
            commit('INCREMENT');
        }
      },
      incrementAsync({commit}){
        setTimeout(()=>{
            commit('INCREMENT');
        },1000)
      }
}
const mutations = {
    INCREMENT:function(){
        state.count++
    },
    DECREMENT(){
        state.count--
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})