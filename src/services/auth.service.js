// The provided code defines an authentication service module, which uses Axios, a popular JavaScript HTTP client library, to interact with a backend API for user registration, login, and logout. The module exports three main functions: register, login, and logout.

//     register(username, email, password): This function is used for user registration. It sends a POST request to the API's endpoint at http://localhost:8000/api/auth/signup, passing the username, email, and password as data in the request body. The API is expected to handle the registration process and respond accordingly.

//     login(username, password): This function is used for user login. It sends a POST request to the same endpoint http://localhost:8000/api/auth/signin, passing the username and password as data in the request body. Upon a successful login, the function stores the response.data object, which typically includes an accessToken, in the browser's local storage under the key "user". The accessToken can be used for subsequent authenticated requests. The function returns a promise that resolves with the response.data.

//     logout(): This function is used for user logout. It removes the "user" key from the browser's local storage, effectively clearing any stored user data related to the login session.

import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

function register(username, email, password) {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
}

function login(username, password) {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

function logout() {
  localStorage.removeItem("user");
}

export default { register, login, logout };
