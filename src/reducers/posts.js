export const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.payload
      ]
      break;
    default:
      return state;

  }
}
