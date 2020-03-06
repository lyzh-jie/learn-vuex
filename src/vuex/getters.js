export default {
    addEven:function(state){
        return state.count % 2===0?'偶数':'奇数';
    }
}