import { API } from "../../../backend";

export const signup = user => {
  console.log(API)
  return fetch('http://127.0.0.1:8000/api/signup', {
    method: "POST",
    mode: 'cors',
    credentials: 'include', 
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch('http://127.0.0.1:8000/api/signin', {
    method: "POST",
    mode: 'cors',
    credentials: 'include', 
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authenticate = (data, next) => { 
  if (typeof window !== "undefined") {     // window object is accessible to us
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`http://127.0.0.1:8000/api/signout`, {
      method: "GET",
      mode: 'cors',
      credentials: 'include', 
    })
      .then(response => console.log("signout success"))
      .catch(err => console.log(err));
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {    //
    return false;
  }
  
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
