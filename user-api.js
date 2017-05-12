const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

// creating user -> /user POST
const create = user => {
  return fetch('/user', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(user)
  }).then(res => {
    return res.json();
  });
};

// login validation => /user/login POST
const login = user => {
  return fetch('/user/login', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(user)
  }).then(res => {
    return res.json();
  });
};

// user auth -> /user/auth GET
const auth = () => {
  return fetch('/user/auth', {
    method: 'GET',
    headers: headers,
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
};
