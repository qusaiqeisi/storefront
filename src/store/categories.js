const initialState = {
  
  categories: [{ name: 'Electronics', description: 'Different categore of  electronic devices' }, { name: 'Food', description: ' all kinds of foods that you desire' }],
  activeCategory: {},
}

export default function categoriesReducer(state = initialState, action) {

  const { payload, type } = action;

  switch (type) {
    case 'CHANGE_ACTIVE':
      let modified = {};

      state.categories.map(item => {
        if (item.name === payload) {
          modified = item;
        }
      });
      return {
        categories: state.categories,
        activeCategory: modified
      };
    default:
      return state;
  }
}


export function changeActive(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}


