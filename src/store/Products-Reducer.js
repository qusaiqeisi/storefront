let initialState = {
    filterList:[],

    activeCategory:'',
}


const products =(state=initialState, action)=>{
    let {type , payload } = action;
    switch(type){
        
        case 'GET':
            initialState.filterList = payload;
            return initialState.filterList
            case 'ACTIVE':
            let productSelected= initialState.filterList.filter((item)=>item.category===payload?item:null)
            initialState.activeCategory = payload;
            return {initialState :productSelected}
            
            case 'DECREMENT': 
                initialState.filterList = payload.allData;
                initialState.activeCategory = payload.updateProduct.category
            let productSelected2= initialState.filterList.filter((item)=>item.category===initialState.activeCategory?item:null)
                return {initialState :productSelected2}
        default:
            return state;
    }
}
export default products