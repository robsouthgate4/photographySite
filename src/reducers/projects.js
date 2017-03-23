export const projects = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.payload
      ]
      break;
    case 'DELETE_PROJECT':
        return state.filter((project) => project.id != action.projectId)
      break;
    case 'FETCH_PROJECTS':
      return state
      break;
    default:
      return state;
  }
}
