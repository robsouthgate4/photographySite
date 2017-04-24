import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import * as types from './projectActionTypes';

export const addProject = (project) => {

  let data = new FormData();

  data.append('file', project.uploadedFile);
  data.append('caption', project.projectName);
  data.append('tags', project.tags);

  return function(dispatch, getState) {
      return fetch(`http://localhost:4000/api/projects`,{
          method: 'POST',
          body: data
        })
        .then(response => response.json())
        .then(json => dispatch(addProjectSuccess(json)))

      }
}

export const addProjectSuccess = (project) => {
  return {
    type: types.ADD_PROJECT_SUCCESS,
    project
  };
}

export const deleteProject = (projectId) => {
  return function(dispatch, getState) {
      return fetch(`http://localhost:4000/api/projects/${projectId}`,{
          method: 'delete'
        })
        .then(dispatch(deleteProjectSuccess(projectId)))

      }
}

export const deleteProjectSuccess = (projectId) => {
  return {
      type: types.DELETE_PROJECT,
      projectId
  }
}

export const updateProject = (data, projectId) => {
    return {
        type: types.UPDATE_PROJECT,
        data,
        projectId
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

export const receiveProject = (response) => {
      return {
          type: types.RECEIVE_PROJECT,
          project: response,
          receivedAt: Date.now()
      }
  }

export const fetchProjects = (projectId) => {

    return function(dispatch) {

      if (projectId !== undefined) {

        dispatch(requestProject())
          return fetch(`http://localhost:4000/api/projects/${projectId}`)
              .then(response => response.json())
              .then(json => dispatch(receiveProject(json))
              )

      } else {

        dispatch(requestProjects())
          return fetch(`http://localhost:4000/api/projects`)
            .then(response => response.json())
            .then(json => dispatch(receiveProjects(json))
          )

      }

    }
}
