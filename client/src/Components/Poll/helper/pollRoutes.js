import { API } from "../../../backend";


export const PollList = () =>{
    return fetch('http://127.0.0.1:8000/api/votes',{
        method:"GET"
    })
    .then((response) => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const PollResult = poll => {
    return fetch(' http://127.0.0.1:8000/api/votes', {
      method: "PATCH",
    mode: 'cors',
    credentials: 'include', 

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(poll)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };