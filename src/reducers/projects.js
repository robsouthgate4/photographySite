import * as types from '../actions/actionTypes'

import projects from '../data/projects';

const initialState = {
  projects: [],
  singleProject: {},
  counter: 0,
  isFetching: false,
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
    case types.FETCH_PROJECT:
        return Object.assign({}, state, {
          projects: state.projects.map((project, index) => {
            if ( project.id === action.projectId ) {
              return Object.assign({}, project, {
                selectedProject: project
              })
            }
          })
        })
        break;
    case types.UPDATE_PROJECT:
        return Object.assign({}, state, {
          projects: state.projects.map((project, index) => {
            if ( project.id === action.projectId ) {
              return Object.assign({}, action.data)
            }
          })
        })
        break;
    case types.INCREMENT:
        return Object.assign({}, state, {
          counter: state.counter + 1
        })
        break;
  case types.REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      })
      break;
  case types.RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        projects: action.projects,
        lastUpdated: action.receivedAt
      })
      break;
    case types.DELETE_PROJECT:
        return state.filter((project) => project.id != action.projectId)
      break;
    default:
      return state;
  }
}
