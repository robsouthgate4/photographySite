import * as types from '../actions/actionTypes';

const initialState = {
  projects: [],
  activeProject: {},
  counter: 0,
  isFetching: false,
  isFetchingActive: false,
  lastUpdated: null
}

export const projectsApp = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project]
      }
      break;
    case types.REQUEST_PROJECT:
        return {
          ...state,
          isFetchingActive: true
        }
        break;
    case types.RECEIVE_PROJECT:
        return {
          ...state,
          activeProject: action.project,
          isFetchingActive: false
        }
      break;
    case types.UPDATE_PROJECT:
        return {
          ...state,
          projects: state.projects.map((project, index) => {
            if ( project.id === action.projectId ) {
              return {
                ...state,
                projects: action.data
              }
            }
          })
        }
        break;
    case types.INCREMENT:
        return {
          ...state,
          counter: state.counter + 1
        }
        break;
  case types.REQUEST_PROJECTS:
      return {
        ...state,
        isFetching: true
      }
      break;
  case types.RECEIVE_PROJECTS:
      return {
        ...state,
        isFetching: false,
        projects: action.projects,
        lastUpdated: action.receivedAt
      }
      break;
    case types.DELETE_PROJECT:
        return {
          ...state,
          projects: state.projects.filter(project => project.id !== action.projectId)
        }
      break;
    default:
      return state;
  }
}
