export const getUser = (user, users) => {
  let userObj = {};
  users.forEach(item => {
    if (user.username === item.username && user.password === item.password) {
      userObj = item
    }
  });
  return userObj;
}
