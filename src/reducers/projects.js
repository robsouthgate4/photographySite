export const projects = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.payload
      ]
      break;
    case 'GET_ALL_PROJECTS':
      return state
      break;
    default:
      return state;

  }
}
