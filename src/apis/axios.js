import axios from 'axios';

export default axios.create({
  // baseURL: 'https://backstopindia.herokuapp.com/api', //for production mode
  baseURL: "http://43.205.213.166:8000/api", //for production mode
  headers: {
    "Content-type": "application/json"
  }
});
