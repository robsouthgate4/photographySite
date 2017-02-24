/* Login user */
export const loginUser = (username, password) => {
  return fetch('http://localhost:9000/api/authenticate', {
  	method: 'POST',
    headers: {
      'Accept': 'application/json',
  		'Content-Type': 'application/json'
  	},
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then((result) => result.json());
}
