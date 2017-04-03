import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import * as types from './actionTypes';



export const addProject = (project) => {
    return {
        type: types.ADD_PROJECT,
        project: project
    }
}

export const deleteProject = (projectId) => {
    return {
        type: types.DELETE_PROJECT,
        projectId: projectId
    }
}

export const updateProject = (data, projectId) => {
    return {
        type: types.UPDATE_PROJECT,
        data: data,
        projectId: projectId
    }
}

export const incrementCounter = () => {
    return {
        type: types.INCREMENT
    }
}

export const requestProjects = () => {
    return {
        type: types.REQUEST_PROJECTS
    }
}

export const requestProject = () => {
    return {
        type: types.REQUEST_PROJECT
    }
}

export const receiveProjects = (json) => {
    return {
        type: types.RECEIVE_PROJECTS,
        projects: json,
        receivedAt: Date.now()
    }
  }

export const receiveProject = (json) => {
      return {
          type: types.RECEIVE_PROJECT,
          projects: json,
          receivedAt: Date.now()
      }
  }

export const fetchProjects = (projectId) => {

    return function(dispatch) {

      console.log(projectId);

      if (projectId !== undefined) {

        dispatch(requestProject())
          return fetch(`http://localhost:4000/api/projects/${projectId}`)
              .then(response => response.json())
              .then(json =>
                  dispatch(receiveProject(json))
              )

      } else {

        dispatch(requestProjects())
          return fetch(`http://localhost:4000/api/projects`)
              .then(response => response.json())
              .then(json =>
                  dispatch(receiveProjects(json))
              )

      }





    }
}
