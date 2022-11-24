import axios from 'axios';

export default axios.create({
  baseURL: 'https://digital-card-backend.herokuapp.com/api', //for production mode
  // baseURL: 'http://localhost:8000/api', //for production mode
  headers: {
    "Content-type": "application/json"
  }
});
