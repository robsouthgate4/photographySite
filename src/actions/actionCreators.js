const ADD_PROJECT = 'ADD_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';
const FETCH_PROJECT = 'FETCH_PROJECT';
const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';

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

export const fetchAllProjects = () => {
    return {
      type: FETCH_ALL_PROJECTS
    }
}
