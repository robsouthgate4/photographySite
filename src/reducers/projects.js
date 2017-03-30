import {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FETCH_PROJECT } from '../actions/actionCreators'

import projects from '../data/projects';

const initialState = {
  projects: []
}

export const projectsApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
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
    case DELETE_PROJECT:
        return state.filter((project) => project.id != action.projectId)
      break;
    default:
      return state;
  }
}
