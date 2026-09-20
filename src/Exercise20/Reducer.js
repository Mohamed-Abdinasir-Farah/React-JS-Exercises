export const initialValue = [];
export const reducer = (state, action) => {
  switch(action.type) {
    case 'add' :
      return [...state, action.payload];
    case 'toggle' :
      return state.map((todo)=> todo.id === action.payload ? {...state, completed: !todo.completed} : todo);
    case 'delete' :
      return state.filter((todo)=> todo.id !== action.payload);
    case 'edit' :
      return state.map((todo)=> todo.id === action.payload.id ? action.payload : todo);
    default :
      return state;
  }
}
