import {ADD_PROJECT,
        DELETE_PROJECT,
        UPDATE_PROJECT,
        FETCH_PROJECT,
        INCREMENT,
        REQUEST_PROJECTS,
        RECEIVE_PROJECTS} from '../actions/actionCreators'

import projects from '../data/projects';

const initialState = {
  projects: [],
  counter: 0,
  isFetching: false,
  lastUpdated: null
}

export const projectsApp = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_PROJECT:
      console.log('asdasdasd');
      return {
        ...state,
        projects: [...state.projects, action.project]
      }
      break;
    case FETCH_PROJECT:
        return Object.assign({}, state, {
          projects: state.projects.map((project, index) => {
            if ( project.id === action.projectId ) {
              return Object.assign({}, project)
            }
          })
        })
        break;
    case UPDATE_PROJECT:
        return Object.assign({}, state, {
          projects: state.projects.map((project, index) => {
            if ( project.id === action.projectId ) {
              return Object.assign({}, action.data)
            }
          })
        })
        break;
    case INCREMENT:
        return Object.assign({}, state, {
          counter: state.counter + 1
        })
        break;
  case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      })
      break;
  case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        projects: action.projects,
        lastUpdated: action.receivedAt
      })
      break;
    case DELETE_PROJECT:
        return state.filter((project) => project.id != action.projectId)
      break;
    default:
      return state;
  }
}
