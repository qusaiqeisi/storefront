import superagent from 'superagent'
// const api='https://api-server-0.herokuapp.com/products';
//action:trigger the reducer to change the active category
export const active=(name)=>{
    return{
        type:'ACTIVE',
        payload:name,
    }
}
export const increment =(el)=>{
    console.log(el);
    return{
        type:'INCREMENT',
        payload:el
    }
}
export const decrement =(el)=>{
    return{
        type:'deleteFromCart',
        payload: el
    }
}

export const getRemotData=(api)=>(dispatch , state)=>{
// 1 // get remot  data with superagent 
// 2 // then dispatch an action with the response after we get it 

return superagent.get(api).then(res=>{
    dispatch(getAction(res.body))
}).catch((e)=>{console.log('error' , e.message)})
}

export const getAction = payload=>{

    return{
        type:'GET',
        payload: payload
    }
}

export const getAfterUpdate = payload=>{

    return{
        type:'DECREMENT',
        payload: payload
    }
}


export const updateRemotData=(api, product)=>{
  return (dispatch)=>{
console.log(dispatch);
      return superagent.put(`${api}/${product._id}`).send({inventory:product.inventory-1}).then((res)=>{
          return superagent.get(api).then(data=>{
            dispatch(getAfterUpdate({allData: data.body ,updateProduct: res.body}))
        })
        }).catch((e)=>{console.log('error' , e.message)})
  }
}