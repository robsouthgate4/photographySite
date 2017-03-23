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

export const fetchProjects = () => {
    fetch("http://localhost:4000/api/projects", {
    	method: 'get'
    }).then(function(response) {
    	console.log(response);
    }).catch(function(err) {
    	console.log(err);
    });
}
