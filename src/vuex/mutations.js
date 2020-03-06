import {INCREMENT,DECREMENT} from './mutations-type'
export default {
    [INCREMENT](state){
        state.count++;
    },
    [DECREMENT](state){
        state.count--;
    }
}