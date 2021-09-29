let initialState = {
    categories:[
        {name:'food', display_name:'FOOD' , description:'Food is the language of the world'},
        {name:'electronics', display_name:'ELECTRONICS' , description:'keep up with developments'}
    ]
,
    activeCategory:{}
}
const categories = (state=initialState , action)=>{
    let {type , payload} = action
    switch(type){
        case 'ACTIVE':
            let activeCategory = initialState.categories.filter(category=>category.name === payload);
            console.log(activeCategory);
            return { categories: initialState.categories ,payload }
        default :
        return state
    }
}
export default categories;