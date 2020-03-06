import {INCREMENT,DECREMENT} from './mutations-type'
export default {
    incrementEven({commit},state){
        if(state.count%2===0){
            commit(INCREMENT);
        }
      },
      incrementAsync({commit}){
        setTimeout(()=>{
            commit(DECREMENT);
        },1000)
      }
}