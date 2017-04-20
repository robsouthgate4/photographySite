export const getProjectById = (projectArray, id) => {
  let projectObj;
  projectArray.forEach((project, index) => {
    if ( project._id === id ) {
      projectObj = project;
    }
  });
  return projectObj;
}
