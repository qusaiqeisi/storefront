let initialState={
    list:[],
    display:[],
    show:false,
    count:0
}
const cart = (state = initialState , action)=>{
let {type , payload} = action ;
switch(type){
    case 'DECREMENT':
        console.log(state.display, '_########33_',state.count ,payload.updateProduct.item);
        if(!state.display.includes(payload.updateProduct.item)){
            state.display.push(payload.updateProduct.item)
            state.count = state.count+1
        }
    return { 
        list:[...state.list,payload],
        display:state.display,
        show:true,
        count:state.count
    };

    case 'deleteFromCart':
        const deletedArray =state.display.filter(pro=>pro!==payload)
        state.count = state.count-1

    return { 
        list:[...state.list,payload],
        display:deletedArray,
        show:true,
        count:state.count
    };
    default:
    return state;
}
}
export default cart;