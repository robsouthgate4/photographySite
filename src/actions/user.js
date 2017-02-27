export const addUser = (user) => {
  console.log('adding user:', user);
  return {
      type: 'add',
      user
  };
}

export const editUser = (id, user) => {
  console.log('editing user:', user, id);
  return {
      type: 'edit',
      user
  };
}

export const deleteUser = (id) => {
  console.log('deleting user:', id);
  return {
      type: 'delete',
      user
  };
}
