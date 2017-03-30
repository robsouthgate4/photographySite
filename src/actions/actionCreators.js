import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const INCREMENT = 'INCREMENT';

export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    project: project
  }
}

export const deleteProject = (projectId) => {
  return {
    type: DELETE_PROJECT,
    projectId: projectId
  }
}

export const updateProject = (data, projectId) => {
    return {
      type: UPDATE_PROJECT,
      data: data,
      projectId: projectId
    }
}

export const fetchProject = (projectId) => {
    return {
      type: FETCH_PROJECT,
      projectId: projectId
    }
}


export const incrementCounter = () => {
    return {
      type: INCREMENT
    }
}

export const requestProjects = () => {
    return {
      type: REQUEST_PROJECTS
    }
}

export const receiveProjects = (json) => {
    return {
      type: RECEIVE_PROJECTS,
      projects: json,
      receivedAt: Date.now()
    }
}

export const fetchProjects = () => {

  return function (dispatch) {

    dispatch(requestProjects())

    return fetch(`http://localhost:4000/api/projects`)
      .then(response => response.json())
      .then(json =>
          dispatch(receiveProjects(json))
      )

  }
}
