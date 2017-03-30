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

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestProjects())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://localhost:4000/api/projects`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveProjects(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
