export const addProject = (project, author) => {
  return {
    type: 'ADD_PROJECT',
    project, author
  }
}

export const deleteProject = (projectId) => {
  return {
    type: 'ADD_PROJECT',
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
