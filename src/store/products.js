const initialState = {
  products: [
    { name: 'TV', description: 'You can watch movies on it', category: 'Electronics', inventoryCount: 1, price: 1000, image: 'https://images.philips.com/is/image/PhilipsConsumer/50PUT6604_56-IMS-en_AE?$jpglarge$&wid=960' },
    { name: 'Fridge', description: 'Store food in it', category: 'Electronics', inventoryCount: 2, price: 500, image: 'https://static.turbosquid.com/Preview/2019/12/06__15_21_23/Image0001.png652D7C88-6F72-4C38-9E53-1920F695966CLarge.jpg' },
    { name: 'laptop', description: 'hp core i7', category: 'Electronics', inventoryCount: 3, price: 700, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyGxd2bgdFcv5_lYkWH601n7H5EFxmUmo3Q&usqp=CAU' },
    { name: 'Camera', description: 'Canon D8', category: 'Electronics', inventoryCount: 4, price: 400, image: 'https://i.ytimg.com/vi/epAO4ezPzrE/maxresdefault.jpg' },
    { name: 'Pizza', description: 'Italian Pizza', category: 'Food', inventoryCount: 4, price: 10, image: 'https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg' },
    { name: 'Burger', description: 'Classic Burger', category: 'Food', inventoryCount: 4, price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66leiNCcKMnbwEDzshSh-j3FhXwrVAIqYUw&usqp=CAU' },
    { name: 'Pasta', description: 'macaroni pasta', category: 'Food', inventoryCount: 4, price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uXegSxoL0wyf4Lg_VBI_X3v0bimmTUQybw&usqp=CAU' },
    { name: 'Mansaf', description: 'Jordanian food', category: 'Food', inventoryCount: 4, price: 10, image: 'https://www.localguidesconnect.com/t5/image/serverpage/image-id/487270i9AFFA37368C7BE64/image-size/large?v=v2&px=999' }
  ],
  activeProducts: []
}

export default function getItems(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_ACTIVE':
      const modified = state.products.filter(item => {
        return item.category === payload
      })
      return {
        products: state.products,
        activeProducts: modified
      }
    case 'DECREASE_INVENTORY':
      const afterAdd = state.products.map((element) => {
        if (element.name == payload.name && element.inventoryCount > 0) {
          element.inventoryCount = element.inventoryCount - 1;
        }
        if (element.inventoryCount === 0) {
          element.description = 'OUT OF STOCK'
        }
        return element;
      });
      return {
        products: afterAdd,
        activeProducts: state.activeProducts
      }
    default:
      return state;
  }

}

export function getCategoryItems(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}

export function reduceInventory(product) {
  return {
    type: 'DECREASE_INVENTORY',
    payload: product
  }
}