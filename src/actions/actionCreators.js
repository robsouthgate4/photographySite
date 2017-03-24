export const addProject = (project, author) => {
  return {
    type: 'ADD_PROJECT',
    project, author
  }
}

export const deleteProject = (projectId) => {
  return {
    type: 'DELETE_PROJECT',
    projectId
  }
}

export const updateProject = (projectId, author, body) => {
    return {
      type: 'UPDATE_PROJECT',
      projectId,
      author,
      body
    }
}

export const resolvedFetchProjects = (data) => {
  return {
    type: 'RESOLVED_FETCH_PROJECTS',
    payload: data
  }
}

export const fetchingProjects = (data) => {
  return {
    type: 'FETCHING_PROJECTS',
    payload: 'Loading projects'
  }
}

export const fetchProjects = () => {
    return (dispatch) => {
      dispatch(fetchingProjects());
      fetch("http://localhost:4000/api/projects")
       .then(response => response.json())
       .then(json => dispatch(resolvedFetchProjects(json)))
    }
}
