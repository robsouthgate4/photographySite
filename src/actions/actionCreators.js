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

export const fetchProject = (projectId) => {
    return {
        type: types.FETCH_PROJECT,
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

export const receiveProjects = (json) => {
    return {
        type: types.RECEIVE_PROJECTS,
        projects: json,
        receivedAt: Date.now()
    }
}

export const fetchProjects = () => {

    return function(dispatch) {

        dispatch(requestProjects())

          return fetch(`http://localhost:4000/api/projects`)
              .then(response => response.json())
              .then(json =>
                  dispatch(receiveProjects(json))
              )



    }
}
